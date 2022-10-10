import $ from 'jquery';
$.fn.isInViewport = function(offsetFactor = 1) {
  if (!$(this).offset()) return false;
  var elementTop = $(this).offset().top;
  var elementBottom = $(this).offset().top + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  //let offsetFactor = 1;
  const dataOffset = $(this).data('offset');
  if (dataOffset) offsetFactor = eval(dataOffset);
  return viewportTop + offsetFactor*$(window).outerHeight() > elementTop && viewportTop < elementBottom;
};
