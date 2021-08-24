import 'lity'; // @lity modal
// @foundation breakpoint event trigger
$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
   // @lity breakpoint trigger
  lityCheck();
});

 // @lity breakpoint trigger
const lityCheck = () => {
  $('.lity-mobile').toggleClass('lity-hide',Foundation.MediaQuery.only('small'));
}


// @lity accessibility init
const initLityAccessibility = () => {
  const dataAttr = 'trigger';
  $(document).on('click', '[data-lity]', function(event) {
    const $trigger = $(this);
    let triggerId = $trigger.attr('id');
    if (!triggerId){
      triggerId = 'lity-' + randomId();
      $trigger.attr('id', triggerId);

    }
    $('.lity').attr('data-' + dataAttr,triggerId);
  });

  $(document).on('lity:close', function(event, instance) {
    const $lity = instance.element();
    const $trigger = $('#'+$lity.data(dataAttr));
    $trigger.focus();
  });
}

$(document).ready(function(){
  lityCheck(); // @lity breakpoint trigger
  initLityAccessibility(); // @lity init accessibility call
});
