---
inject: true
to: src/assets/js/app.js
before: // IMPORT PLUGINS
skip_if: import './plugins/<%= h.inflection.camelize(name,true) %>';
---
import './plugins/<%= h.inflection.camelize(name,true) %>';