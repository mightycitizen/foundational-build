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
      self.setActive($(this));
    });

    $(window).on('scroll', Foundation.util.throttle(function(e){
      self.scroll();
    }))
  }
  setActive(activeAnchor){
    activeAnchor.parent().addClass('is-active').siblings().removeClass('is-active');
    $('[data-anchormenu-activetext]').text(activeAnchor.text());
  }
  scroll(){
    let activeAnchor;
    //const self = this;
    this.$anchorMenu.find('a').each(function(){
      const $anchor = $(this);
      const $section = $($anchor.attr('href'));
      if ($section && !$('html').hasClass('is-scrolling')){
        if ($section.isInViewport()){
          //activeSection = $section;
          return activeAnchor = $anchor;
        }
      }
    });
    if (activeAnchor){
      this.setActive(activeAnchor);

    }
  }
}


// @anchor update
const initAnchor = () => {

  new Anchor('[data-anchormenu][data-sticky]');


}

initAnchor(); // @tippy init call
