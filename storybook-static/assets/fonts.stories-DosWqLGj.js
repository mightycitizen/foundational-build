import{T as p,t as c}from"./twig-DGqAAA8S.js";import{a as u,D as d}from"./twig-xRDxs_F9.js";import"./_commonjsHelpers-BosuxZz1.js";u(p);p.cache(!1);const a=t=>t,y=(t={})=>{const e=c.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/global/base/fonts.twig",data:[{type:"raw",value:`
`,position:{start:0,end:1}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:"key",valueVar:"value",expression:[{type:"Twig.expression.type.variable",value:"fonts",match:["fonts"]}],position:{start:1,end:30},output:[{type:"raw",value:"  ",position:{start:31,end:33}},{type:"logic",token:{type:"Twig.logic.type.set",key:"font",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"join",match:["| join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:", "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:33,end:68}},position:{start:33,end:68}},{type:"raw",value:"  <div class='font-",position:{start:69,end:88}},{type:"output",position:{start:88,end:97},stack:[{type:"Twig.expression.type.variable",value:"key",match:["key"],position:{start:88,end:97}}]},{type:"raw",value:`'>
    <h2 class="text-xl mb-0">`,position:{start:97,end:129}},{type:"output",position:{start:129,end:151},stack:[{type:"Twig.expression.type.variable",value:"key",match:["key"],position:{start:129,end:151}},{type:"Twig.expression.type.filter",value:"capitalize",match:["| capitalize","capitalize"],position:{start:129,end:151}}]},{type:"raw",value:`</h2>  
    <div class="mb-3">    
      <span>Default</span><br />
      <em>Italics</em><br />
      <strong>Bold</strong></p>
    </div>
  </div>
`,position:{start:151,end:300}}]},position:{open:{start:1,end:30},close:{start:300,end:312}}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return a(e.render({attributes:new d,...t}))}catch(l){return a("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/global/base/fonts.twig: "+l.toString())}},g=["Roboto","sans-serif"],m=["Georgia","serif"],o={display:g,body:m},k={title:"Global/Base/Fonts"},f=t=>y(t),s=f.bind({});let v=Object.keys(o).reduce((t,e)=>(t[e]=o[e],t),{});s.args={fonts:v};var r,n,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["Fonts"];export{s as Fonts,h as __namedExportsOrder,k as default};
