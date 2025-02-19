// import $ from 'jquery';
import Litepicker from 'litepicker'; // @litepicker date picker
// @litepicker init
export const initDatepicker = () => {
  // vanilla js
  document.querySelectorAll('.js-date').forEach(datepicker => {  
    new Litepicker({
      element: datepicker,
    });
  })
}

// $(document).ready(function(){
//   initDatepicker();
// });
