import $ from 'jquery';
import Litepicker from 'litepicker'; // @litepicker date picker
// @litepicker init
const initDatepicker = () => {
  $('.js-date').each(function(){
    new Litepicker({
      element: $(this)[0]
    });
  })
}

$(document).ready(function(){
  initDatepicker();
});
