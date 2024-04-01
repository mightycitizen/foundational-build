---
inject: true
to: src/assets/js/app.js
after: // INITIALIZATION FUNCTIONS
skip_if: const init<%= name.charAt(0).toUpperCase() + name.slice(1) %> %>
---

// @<%= h.inflection.dasherize(name.toLowerCase()) %> init
const init<%=  h.inflection.camelize(name,false) %> = () => {
  const <%= h.inflection.camelize(name,true) %>Instance = new <%= h.inflection.camelize(name,false) %>();
  <%= h.inflection.camelize(name,true) %>Instance.init();
}