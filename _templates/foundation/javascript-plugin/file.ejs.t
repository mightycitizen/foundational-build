---
to: src/assets/js/plugins/<%= h.inflection.camelize(name,true) %>.js
---

import $ from 'jquery';

class <%= h.inflection.camelize(name,false) %>{
  constructor() {
    this.options = {
      clickSelector: '[data-<%= h.inflection.dasherize(name.toLowerCase()) %>-elem]',
    }
    this.init();
  }

  init() {
    const self = this;
    this.bindEvents();
  }
  bindEvents() {
    const self = this;
    $(document).on('click', $(self.options.clickSelector), (e) => {
      e.preventDefault();
      console.log('click');
    });
  }
}

// @<%= h.inflection.dasherize(name.toLowerCase()) %> init
const init<%=  h.inflection.camelize(name,false) %> = () => {
  const <%= h.inflection.camelize(name,true) %>Instance = new <%= h.inflection.camelize(name,false) %>();
  <%= h.inflection.camelize(name,true) %>Instance.init();
}

$(document).ready(function(){
  init<%= h.inflection.camelize(name,false) %>(); // @<%= h.inflection.dasherize(name.toLowerCase())%> init
});