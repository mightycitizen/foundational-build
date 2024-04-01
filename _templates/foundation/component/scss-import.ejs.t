---
inject: true
to: "<%= scss ? 'src/assets/scss/app.scss' : null %>"
before: ;\n\/\/ COMPONENTS END
skip_if: components/<%= name.toLowerCase() %>
---
  "components/<%= name.toLowerCase() %>",