---
inject: true
to: src/stories/global/base/plugins.json
before: \n}
skip_if: <%= h.inflection.camelize(name,true) %>
---
  "<%= h.inflection.camelize(name,true) %>": true,