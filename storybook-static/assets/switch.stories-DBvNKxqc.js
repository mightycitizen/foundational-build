import{t as c,T as l}from"./twig-BXd3Gfe2.js";import{D as d,a as u}from"./twig-foVUGi9y.js";import"./_commonjsHelpers-BosuxZz1.js";u(l);l.cache(!1);const a=e=>e,m=(e={})=>{const s=c.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/switch/switch.twig",data:[{type:"raw",value:`   <div x-data="{ isChecked: false }" class="flex items-center">
        <label for="toggle" class="relative inline-flex items-center cursor-pointer mb-0">
            <input type="checkbox" id="toggle" x-model="isChecked" class="sr-only" />
            <div :class="isChecked ? 'bg-primary' : 'bg-gray'" class="w-11 h-6 rounded-full shadow-inner"></div>
            <div :class="isChecked ? 'translate-x-5' : 'translate-x-1'" class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
        </label>
        <span class="ml-3 text-gray-700" x-text="isChecked ? 'On' : 'Off'"></span>
    </div>`,position:{start:0,end:0}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),a(s.render({attributes:new d(t),...e}))}catch(t){return a("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/switch/switch.twig: "+t.toString())}},g={title:"Components/Forms/Switch",argTypes:{required:{control:{type:"boolean"}}}},p=e=>m(e),r=p.bind({});r.args={label:"Switch",id:"switch",name:"switch"};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const b=["Switch"];export{r as Switch,b as __namedExportsOrder,g as default};
