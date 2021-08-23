import selectize from 'selectize'; // @selectize custom select dropdowns
import $ from 'jquery';

// @selectize init
const initSelectize = () => {
  $('.js-selectize').selectize();
}

$(document).ready(function(){
  initSelectize(); // @selectize init call
})
