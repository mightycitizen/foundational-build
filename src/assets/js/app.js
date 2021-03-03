import 'slick-carousel';
import $ from 'jquery';
import Lity from 'lity';
import './lib/foundation-explicit-pieces';

//$(document).on('click', '[data-lity]', lity);

$(document).foundation();

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

