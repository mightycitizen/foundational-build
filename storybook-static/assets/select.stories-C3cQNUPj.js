import{t as p}from"./select-DPFaf-F_.js";import{f as d}from"./filterable-B7kNpsXQ.js";import"./twig-BXd3Gfe2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./twig-foVUGi9y.js";import"./input-Bm6R5C2j.js";const h={title:"Components/Forms/Select Dropdown",argTypes:{filterable:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},u=t=>p(t),c={label:"Select Dropdown",id:"dropdown",name:"dropdown",placeholder:"Select an option",options:[{label:"Dropdown A",value:0},{label:"Dropdown B",value:1},{label:"Dropdown C",value:2}]},e=u.bind({});e.args=c;const m=t=>d(t),r=m.bind({});r.args=Object.assign({...c},{name:"select_filterable",id:"select_filterable"});var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return filterableTwig(args);
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["Default","Filterable"];export{e as Default,r as Filterable,S as __namedExportsOrder,h as default};
