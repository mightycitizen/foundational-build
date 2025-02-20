// import $ from 'jquery';
import Litepicker from 'litepicker'; // @litepicker date picker
// @litepicker init
export const initDatepicker = () => {
  // vanilla js
  document.querySelectorAll('.js-datepicker').forEach(datepicker => {  
    new Litepicker({
      element: datepicker,
    });
  })
}



document.addEventListener('DOMContentLoaded', initDatepicker);
// $(document).ready(function(){
//   initDatepicker();
// });
