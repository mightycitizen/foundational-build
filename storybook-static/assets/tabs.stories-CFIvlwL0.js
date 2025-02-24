import{t as n}from"./tabs-Z9J9TfsW.js";import"./twig-BXd3Gfe2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./twig-foVUGi9y.js";const u={title:"Components/Containers/Tabs",argTypes:{}},p=a=>n(a),i=[...Array(15)].map((a,e)=>({text:"Tab "+(0+e),id:"tab-"+e,content:`<h2>Tab Content</h2><p>Lorem ipsum ${e}</p><p><a href='' class='read-more'>Styled Link</a></p>`})),m={tabs_id:"example-tabs",tabs:i},t=p.bind({});t.args=m;var r,s,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const g=["Tabs"];export{t as Tabs,g as __namedExportsOrder,u as default};
