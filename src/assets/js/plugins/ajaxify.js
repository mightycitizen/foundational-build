import Twig from 'twig'; // @twig used with @ajax
import resultsTemplate from '../../../_patterns/components/listing/event.twig'; // used with @ajax
import paginationTemplate from '../../../_patterns/components/listing/pagination.twig'; // used with @ajax
import $ from 'jquery';

function buildPagination(
  totalItems,
  currentPage = 1,
  pageSize = 10,
  maxPages = 10
) {
  // calculate total pages
  let totalPages = Math.ceil(totalItems / pageSize);

  // ensure current page isn't out of range
  if (currentPage < 1) {
      currentPage = 1;
  } else if (currentPage > totalPages) {
      currentPage = totalPages;
  }

  let startPage, endPage;
  if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
  } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
          // current page near the end
          startPage = totalPages - maxPages + 1;
          endPage = totalPages;
      } else {
          // current page somewhere in the middle
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
      }
  }

  // calculate start and end item indexes
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

  // return object with all pager properties required by the view
  return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
  };
}


class Ajax {
  constructor(endpoint, $results, key, filterRefresh, numPerPage){
    this.options = {
      endpoint,
      key,
      filterRefresh,
      numPerPage
    }

    this.$results = $results;

    this.id = $results.attr('id');
    this.$filters = $('[data-ajaxify-form=' + this.id + ']')
    this.$noResults = $('[data-ajaxify-no-results=' + this.id + ']');
    this.$numResults = $('[data-ajaxify-num-results=' + this.id + ']');
    this.$toggles = $('[data-ajaxify-toggles=' + this.id + ']');
    this.$pagination = $('[data-ajaxify-pagination=' + this.id + ']');
    this.currentPage = 1;
  }
  init(){
    this.bindEvents();
    this.loadData();
  }
  updatePagination(){
    const self = this;
    const template = Twig.twig({ data: paginationTemplate });
    let links = {}
    let pageBase;
    let paginationObject;
    if (self.options.filterRefresh){
      // @craft pagination
      const paginationData = self.meta.pagination;
      links = paginationData.links;
      pageBase = links.next || links.previous;
      paginationObject = buildPagination(paginationData.total,paginationData.current_page, self.options.numPerPage)
      // need @drupal pagination
    }else{
      paginationObject = buildPagination(self.total,self.currentPage, self.options.numPerPage);
      if (paginationObject.currentPage !== 1) links.previous = paginationObject.currentPage - 1;
      if (paginationObject.currentPage < paginationObject.totalPages) links.next = paginationObject.currentPage + 1;

    }

    if (paginationObject.totalPages > 1){

      links.pages = [];
      paginationObject.pages.map(page => {
        let url = page;

        if (self.options.filterRefresh && pageBase) url = pageBase.replace(/page=(\d)+/,'page=' + page);

        links.pages.push({
          url,
          pageIndex: page,
          current: paginationObject.currentPage === page
        });
      })
      self.$pagination.html(template.render({ links }));
    }
  }
  clearPagination(){
    this.$pagination.html('');
  }
  updateResults(){
    const self = this;
    self.clearPagination();

    setTimeout(() => {
      window.enableSubmit(self.$filters.find('button[type="submit"][disabled]'));
    }, (50));
    let data = self.data;
    if (self.dataFiltered) data = self.dataFiltered;
    if (!self.options.endpointRefresh && self.options.numPerPage){
      data = data.slice((self.currentPage - 1) * self.options.numPerPage, self.currentPage * self.options.numPerPage);
    }
    const template = Twig.twig({ data: resultsTemplate });
    self.$results.html(template.render({ [self.options.key]: data }));
    this.$noResults.toggleClass('hide', data.length > 0);
    this.$numResults.find('.value').text(self.total);
    this.$numResults.toggleClass('hide', data.length === 0);
    if (self.options.numPerPage) self.updatePagination();
  }
  filterResults(){
    const self = this;
    let dataFiltered = self.data;
    if (self.options.filterRefresh){
      self.loadData();
    }else{
      self.$filters.find('input[data-filter]:checked').each(function(){
        const value = $(this).attr('value');
        const name = $(this).attr('name');
        if (value !== ''){
          dataFiltered = dataFiltered.filter(item => {
            let currValue = item[name];
            if (!currValue) return false;
            //console.log(currValue);
            if (Array.isArray(currValue)){

              return currValue.length > 0 && currValue.some(arrayItem => {
                const checkVal = arrayItem.id || arrayItem;
                return checkVal.toString() === value })
            }else{
              const checkVal = currValue.id || currValue;
              return checkVal.toString() === value
            }
          });
        }
      });
      self.$filters.find('[data-filter-checkbox]').each(function(){
        const name = $(this).data('filter-checkbox');
        let values = [];

        $(this).find('input[type="checkbox"]:checked').each(function(){
          values.push($(this).val());
        });

        if (values.length > 0){

          dataFiltered = dataFiltered.filter(item => {
            let currValue = item[name];
            if (!currValue) return false;
            if (Array.isArray(currValue)){
              if (currValue.length === 0) return false;
              let intersection = currValue.filter(arrayItem => values.some(value => arrayItem.id.toString() === value));
              return intersection.length > 0
            }else{
              return values.includes(currValue.id.toString())
            }
          });
        }
      });
      self.$filters.find('[data-filter-keywords]').each(function(){
        const value = $(this).val();
        const fields = $(this).data('filter-keywords').split(',');
        if (value !== ''){
          dataFiltered = dataFiltered.filter(item => {
            return fields.some(field => {
              return item[field].toLowerCase().includes(value.toLowerCase())
            })
          });
        }
      });
      self.dataFiltered = dataFiltered;
      self.total = dataFiltered.length;
      self.updateResults();
    }

  }
  loadData(url){
    const self = this;
    if (!url){
      url = self.options.endpoint
      if (self.options.numPerPage){
        url = url + '?limit=' + self.options.numPerPage
      }
    }

    let ajaxOptions = {
      url,
      method: 'GET'
    };


    if (self.options.filterRefresh){
      ajaxOptions.data = self.$filters.serialize();
    }

    $.ajax( ajaxOptions).done(function( response ) {
      if (self.options.numPerPage && response.meta) self.meta = response.meta;
      response = response.data || response;
      self.total = response.length;
      // @craft pagination
      if (self.meta && self.meta.pagination) self.total = self.meta.pagination.total;
      self.data = response;
      self.updateResults();
      self.$results.addClass('is-loaded');
    });
  }
  getLabel(field){
    const id = field.attr('id');
    const $label = $('label[for='+ id +']');
    if (!$label) return false;
    return $label.text();
  }
  clearToggles(){
    this.$toggles.html('');
  }
  updateToggles(elem, checked){

    const label = this.getLabel(elem);
    const type = elem.attr('type');
    const name = elem.attr('name');
    const value = elem.attr('value');
    const id = elem.attr('id');
    if (type === 'radio') this.$toggles.find('[data-ajaxify-radio="' + name + '"]').remove();
    if (label && value !== '' && checked) this.$toggles.append('<button class="button" type="button" data-ajaxify-' + type + '="' + name + '" data-ajaxify-toggle="'+ id +'">'+label+'<span class="icon-cross"></span></button>');
    if (!checked && type === 'checkbox') this.$toggles.find('[data-ajaxify-toggle="' + id + '"]').remove();
  }

  bindEvents(){
    const self = this;

    this.$pagination.on('click', 'a', function(e){
      e.preventDefault();
      const page = $(e.target).data('ajax-page');
      if (self.options.filterRefresh){
        self.loadData(page);
      }else{
        self.currentPage = page;
        self.updateResults();
      }
    })
    $(document).on('click', '[data-ajaxify-toggle]', function(e){
      const { currentTarget } = e;
      const fieldId = $(this).data('ajax-toggle');
      if (fieldId){
        $('#'+fieldId).prop('checked', false).trigger('change');
      }
      $(currentTarget).remove();
    })
    self.$filters.on('reset', function(e){
      delete self.dataFiltered;
      self.total = self.data.length;
      self.clearToggles();
      self.$filters.find('.is-active').removeClass('is-active'); // don't love this for removing the input-clear Xes
      setTimeout(() => {
        self.$filters.trigger('submit');
      }, (50));

    })
    self.$filters.find('[data-filter-keywords]').on('change', function(){
      self.filterResults();
      //self.updateResults();
    });
    self.$filters.on('submit', function(e){
      e.preventDefault();
      self.filterResults();
    })
    self.$filters.find('[data-filter], [data-filter-checkbox] input[type="checkbox"]').on('change', function(e){
      const { checked } = e.target;
      self.updateToggles($(this), checked);
      if (self.$filters.find('[type="submit"]:visible').length === 0) self.$filters.trigger('submit');
    })
  }
}


// @ajax init
const initAjax = () => {
  const $events = $('[data-ajaxify]');
  if ($events.length) {
    const events = new Ajax('/js/data/events.json', $('[data-ajaxify]'), 'events', false, 1);
    events.init();
  }
}

export default initAjax;
