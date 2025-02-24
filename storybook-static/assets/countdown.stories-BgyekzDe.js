import{t as d,T as u}from"./twig-BXd3Gfe2.js";import{D as l,a as c}from"./twig-foVUGi9y.js";import"./_commonjsHelpers-BosuxZz1.js";c(u);u.cache(!1);const o=t=>t,m=(t={})=>{const a=d.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/informational/countdown/countdown.twig",data:[{type:"raw",value:`<div x-data="{
      targetDate: new Date(`,position:{start:0,end:42}},{type:"output",position:{start:42,end:52},stack:[{type:"Twig.expression.type.variable",value:"date",match:["date"],position:{start:42,end:52}}]},{type:"raw",value:`),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      init() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
      },
      updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        this.days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
        this.hours = Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
        this.minutes = Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0);
        this.seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);
      },
      formatNumber(num) {
        return String(num).padStart(2, '0');
      }
    }" class="countdown flex justify-center gap-3" data-countdown="`,position:{start:52,end:861}},{type:"output",position:{start:861,end:895},stack:[{type:"Twig.expression.type.variable",value:"date",match:["date"],position:{start:861,end:895}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:861,end:895},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:861,end:895}},{type:"Twig.expression.type.string",value:"1678991854",position:{start:861,end:895}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:861,end:895},expression:!1}]}]},{type:"raw",value:`">
    `,position:{start:895,end:902}},{type:"logic",token:{type:"Twig.logic.type.set",key:"items",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"days"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"hours"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"minutes"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"seconds"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:902,end:989}},position:{start:902,end:989}},{type:"raw",value:"    ",position:{start:990,end:994}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"items",match:["items"]}],position:{start:994,end:1017},output:[{type:"raw",value:'      <div class="countdown_item flex flex-col justify-center items-center" x-ref="',position:{start:1018,end:1101}},{type:"output",position:{start:1101,end:1111},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1101,end:1111}}]},{type:"raw",value:`">
        <span class="countdown_item_number bg-white text-black font-bold text-2xl p-2 rounded" x-text="formatNumber(`,position:{start:1111,end:1230}},{type:"output",position:{start:1230,end:1240},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1230,end:1240}}]},{type:"raw",value:`)"></span>
        <span class="countdown_item_label text-xs font-bold uppercase">`,position:{start:1240,end:1322}},{type:"output",position:{start:1322,end:1332},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1322,end:1332}}]},{type:"raw",value:`</span>
      </div>
    `,position:{start:1332,end:1357}}]},position:{open:{start:994,end:1017},close:{start:1357,end:1369}}},{type:"raw",value:`  
</div>
`,position:{start:1370,end:1370}}],precompiled:!0});a.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),o(a.render({attributes:new l(e),...t}))}catch(e){return o("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/informational/countdown/countdown.twig: "+e.toString())}},h={title:"Components/Informational/Countdown"},y=t=>m(t),s=new Date;s.setMonth(s.getMonth()+1);s.setHours(s.getDate()+1);const w=s.getTime(),g={date:w},n=y.bind({});n.args=g;var i,r,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(p=(r=n.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const T=["Countdown"];export{n as Countdown,T as __namedExportsOrder,h as default};
