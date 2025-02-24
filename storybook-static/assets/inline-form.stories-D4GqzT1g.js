import{t as u,T as l}from"./twig-BXd3Gfe2.js";import{D as c,a as m}from"./twig-foVUGi9y.js";import"./_commonjsHelpers-BosuxZz1.js";m(l);l.cache(!1);const i=e=>e,p=(e={})=>{const r=u.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/inline-form/inline-form.twig",data:[{type:"raw",value:`
<label for="inline">Inline</label>
<div class="flex items-center gap-3">
  <span class="input-group-label">$</span>
  <input id="inline" class="input-group-field" type="number">
  <div class="input-group-button">
    <input type="submit" class="button" value="Submit">
  </div>
</div>


`,position:{start:0,end:0}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),i(r.render({attributes:new c(t),...e}))}catch(t){return i("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/inline-form/inline-form.twig: "+t.toString())}},w={title:"Components/Forms/Inline Form"},d=e=>p(e),n=d.bind({});var s,o,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const v=["InlineForm"];export{n as InlineForm,v as __namedExportsOrder,w as default};
