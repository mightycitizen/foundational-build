(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[7942],{"./src/stories/components/modules/cta/cta.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BackgroundImage:function(){return BackgroundImage},Default:function(){return Default},Image:function(){return Image},__namedExportsOrder:function(){return __namedExportsOrder}});var _cta_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/modules/cta/cta.twig"),_cta_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_cta_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Modules/CTA"};const Template=_ref=>{let{label:label,...args}=_ref;return _cta_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},defaultArgs={section_heading:"Heading",section_description:"Description",section_button:{text:"Link",url:"#"}},Default=Template.bind({});Default.args=defaultArgs;const Image=Template.bind({});Image.args=Object.assign({...defaultArgs},{section_image:{src:"https://source.unsplash.com/9wg5jCEPBsw/632x400",alt:"Image"}});const BackgroundImage=Template.bind({});BackgroundImage.args=Object.assign({...defaultArgs},{section_background:{src:"https://source.unsplash.com/9wg5jCEPBsw/1200x500",alt:"Image"}}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Default.parameters?.docs?.source}}},Image.parameters={...Image.parameters,docs:{...Image.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Image.parameters?.docs?.source}}},BackgroundImage.parameters={...BackgroundImage.parameters,docs:{...BackgroundImage.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...BackgroundImage.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Image","BackgroundImage"]},"./src/stories/components/modules/cta/cta.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/sections/section.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"section_button",expression:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"secondary"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.string",value:"cta bg-primary bg-gradient-primary-darker color-white "},{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" cta--horizontal"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"intro_class"},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"medium-text-left"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"Twig.expression.type.string",value:" text-center mb-0"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}],id:"src/stories/components/modules/cta/cta.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/modules/cta/cta.twig",module.exports.default=module.exports}}]);