---
inject: true
to: src/assets/js/app.js
after: // CLASS DEFINITIONS
skip_if: class <%= h.inflection.camelize(name,false) %>
---
class <%= h.inflection.camelize(name,false) %>{
  constructor() {
    this.init();
    this.options = {
      clickSelector: '[data-<%= h.inflection.dasherize(name.toLowerCase()) %>-elem]',
    }
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