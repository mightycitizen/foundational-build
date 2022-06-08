// import tippy from 'tippy.js'; // @tippy tooltip
import $ from 'jquery';
import '../utils/in-viewport';

class Anchor{
  constructor(anchorSelector){
    this.selector = anchorSelector;
    this.$anchorMenu = $(anchorSelector);
    this.init();
  }
  init(){
    this.bindEvents();
  }
  bindEvents(){
    const self = this;
    this.$anchorMenu.find('a').on('click', function(){
      const elem = $(this);
      setTimeout(function(){
        self.setActive(elem);
      },550);
    });

    $(window).on('scroll', Foundation.util.throttle(function(e){
      if (!$('html').hasClass('is-scrolling')) self.scroll();
    }))
  }
  setActive(activeAnchor, delay = 0){
    const self = this;

    let anchorParent;
    const $activeElem = $('[data-anchormenu-activetext]');
    let placeholder =  $activeElem.attr('data-anchormenu-activetext');
    if (activeAnchor){
      placeholder = activeAnchor.text();
      anchorParent = activeAnchor.parent();
      anchorParent.addClass('is-active');
    }
    self.$anchorMenu.find('li').not(anchorParent).removeClass('is-active');

    $activeElem.text(placeholder);

  }
  scroll(){

    let activeAnchor;
    //const self = this;
    this.$anchorMenu.find('a').each(function(){
      const $anchor = $(this);
      const $section = $($anchor.attr('href'));
      if ($section && $section.isInViewport(2/3)){
        activeAnchor = $anchor;
        return;
        ///console.log($anchor.text());
       // return;
      }
    });
    //console.log(activeAnchor.text());
    this.setActive(activeAnchor);
  }
}


// @anchor update
const initAnchor = () => {

  new Anchor('[data-anchormenu][data-sticky]');


}

initAnchor(); // @tippy init call
