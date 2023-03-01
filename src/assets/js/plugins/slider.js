import noUiSlider from 'nouislider';
import $ from 'jquery';
// @slider init
export const initSlider = () => {
  $('.js-slider').each(function(){
    const slider = $(this)[0];
    const $slider = $(this);
    noUiSlider.create(slider, {
      start: [16, 22],
      step: 1,
      connect: true,
      tooltips: true,
      range: {
          'min': 16,
          'max': 22
      },
      pips: {
        mode: 'count',
        values: 2,
        density: 100,
          stepped: true
      }
    });

    $slider.find('.noUi-handle-lower').attr('aria-label','Lower Range Handle');
    $slider.find('.noUi-handle-upper').attr('aria-label','Upper Range Handle');


  })


}

// $(document).ready(function(){
//   initSlider(); // @slider init
// });
