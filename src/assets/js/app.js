import 'slick-carousel';
import $ from 'jquery';
import './lib/foundation-explicit-pieces';

$(document).foundation();

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

