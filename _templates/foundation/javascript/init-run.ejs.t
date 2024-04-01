---
inject: true
to: src/assets/js/app.js
before: // RUN INITS
skip_if: const init<%= h.inflection.camelize(name,false) %> %>
---
  init<%= h.inflection.camelize(name,false) %>(); // @<%= h.inflection.dasherize(name.toLowerCase())%> init