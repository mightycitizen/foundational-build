
export const initScrollShow = () => {
  let animateOnce = false;
  const scrollCheck = () => {
    $('[data-scroll-hide],[data-scroll-show]').each(function(){
      let scrollClass = 'is-inactive';
      let attribute = 'data-scroll-hide';
      //console.log(typeof $(this).attr('data-scroll-show'));
      if (typeof $(this).attr('data-scroll-show') !== 'undefined'){
        attribute = 'data-scroll-show';
        scrollClass =  'is-active';
      }

      let scrollTrigger;
      if ($(this).attr(attribute) > 0) {
        scrollTrigger = $(window).scrollTop() > $(this).attr(attribute);
      }else{
        scrollTrigger = $(window).scrollTop() + $(window).height() > $(this).offset().top;
        if (!animateOnce){
          scrollTrigger = scrollTrigger && $(window).scrollTop() < $(this).offset().top + $(this).height();
        }
      }
      $(this).toggleClass(scrollClass,scrollTrigger);
    });
  }
  scrollCheck();
  $(window).on('scroll', Foundation.util.throttle(function(e){

    scrollCheck();
  }, 300));

}

