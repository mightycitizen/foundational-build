
export const initScrollShow = () => {
  let animateOnce = true;
  const scrollCheck = () => {
    $('[data-scroll-hide],[data-scroll-show]').each(function(){
      let scrollClass = 'is-inactive';
      let attribute = 'data-scroll-hide';
      
      if (typeof $(this).attr('data-scroll-show') !== 'undefined'){
        attribute = 'data-scroll-show';
        scrollClass =  'is-active';
      }

      let scrollTrigger;
      if ($(this).attr(attribute) > 0) {
        scrollTrigger = $(window).scrollTop() > $(this).attr(attribute);
      }else{
        // if element is in window
        scrollTrigger = $(window).scrollTop() + $(window).height() > $(this).offset().top ;
        console.log($(this), $(this).offset().top, $(window).scrollTop()+ $(window).height());
        
        // if (!animateOnce){
        //   scrollTrigger = scrollTrigger && $(window).scrollTop() < $(this).offset().top + $(this).height();
        // }
      }

      if (animateOnce) {
        if (scrollTrigger) $(this).addClass(scrollClass,scrollTrigger);
      }else{
        $(this).toggleClass(scrollClass,scrollTrigger);
      }
    });
  }
  scrollCheck();
  $(window).on('scroll', Foundation.util.throttle(function(e){

    scrollCheck();
  }, 300));

}

