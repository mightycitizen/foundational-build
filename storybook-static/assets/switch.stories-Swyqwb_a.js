import{T as i,t as l}from"./twig-DGqAAA8S.js";import{a as d,D as u}from"./twig-xRDxs_F9.js";import"./_commonjsHelpers-BosuxZz1.js";d(i);i.cache(!1);const r=e=>e,m=(e={})=>{const s=l.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/switch/switch.twig",data:[{type:"raw",value:`   <div x-data="{ isChecked: false }" class="flex items-center">
        <label for="toggle" class="relative inline-flex items-center cursor-pointer mb-0">
            <input type="checkbox" id="toggle" x-model="isChecked" class="sr-only" />
            <div :class="isChecked ? 'bg-primary' : 'bg-gray'" class="w-11 h-6 rounded-full shadow-inner"></div>
            <div :class="isChecked ? 'translate-x-5' : 'translate-x-1'" class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
        </label>
        <span class="ml-3 text-gray-700" x-text="isChecked ? 'On' : 'Off'"></span>
    </div>`,position:{start:0,end:0}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{return r(s.render({attributes:new u,...e}))}catch(c){return r("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/switch/switch.twig: "+c.toString())}},g={title:"Components/Forms/Switch",argTypes:{required:{control:{type:"boolean"}}}},p=e=>m(e),t=p.bind({});t.args={label:"Switch",id:"switch",name:"switch"};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const b=["Switch"];export{t as Switch,b as __namedExportsOrder,g as default};
