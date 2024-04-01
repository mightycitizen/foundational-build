(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[7930],{"./src/stories/components/forms/form-group/form-group.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FormGroup:function(){return FormGroup},__namedExportsOrder:function(){return __namedExportsOrder}});var _form_group_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/forms/form-group/form-group.twig"),_form_group_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_form_group_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Forms/Form Group"};const FormGroup=(_ref=>{let{label:label,...args}=_ref;return _form_group_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});FormGroup.parameters={...FormGroup.parameters,docs:{...FormGroup.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...FormGroup.parameters?.docs?.source}}};const __namedExportsOrder=["FormGroup"]},"./src/stories/components/forms/form-group/form-group.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/forms/text/text.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="grid-x grid-margin-x form-group align-bottom">\n  '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"form_content",output:[{type:"raw",value:'    <div class="cell large-5 medium-4">\n      '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/forms/text/text.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"name"},{type:"Twig.expression.type.string",value:"text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"field_group_1"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"placeholder"},{type:"Twig.expression.type.string",value:"Prompt Text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"required"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:'    </div>\n    <div class="cell large-5 medium-4">\n      '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/forms/text/text.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"name"},{type:"Twig.expression.type.string",value:"text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"field_group_2"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"placeholder"},{type:"Twig.expression.type.string",value:"Prompt Text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"required"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:'    </div>\n    <div class="cell large-2 medium-4">\n      <button class="button" type="submit">Submit</button>\n    </div>\n  '}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/forms/form-group/form-group.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/forms/form-group/form-group.twig",module.exports.default=module.exports},"./src/stories/components/forms/input/input.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="form-input '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"input_class",match:["input_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n  <label for="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'<span class="form-required">*</span>'}]}},{type:"raw",value:"</label>\n  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"field",output:[{type:"raw",value:"  "}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'    <span class="form-error">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]}]},{type:"raw",value:" is required</span>\n  "}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/forms/input/input.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/forms/input/input.twig",module.exports.default=module.exports},"./src/stories/components/forms/text/text.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/forms/input/input.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/forms/input/input.twig"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"field",output:[{type:"raw",value:"    <input \n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:"    \n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"disabled",match:["disabled"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"disabled"}]}},{type:"raw",value:' type="text" value="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]},{type:"raw",value:'" name="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"]}]},{type:"raw",value:'" id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]}]},{type:"raw",value:'" placeholder="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"placeholder",match:["placeholder"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"required"}]}},{type:"raw",value:"/>\n  "}]}}]}}],id:"src/stories/components/forms/text/text.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/forms/text/text.twig",module.exports.default=module.exports}}]);