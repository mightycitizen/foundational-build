import{T as a,t as i}from"./twig-DGqAAA8S.js";import{a as s,D as p}from"./twig-xRDxs_F9.js";s(a);a.cache(!1);const n=t=>t,l=(t={})=>{const e=i.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/containers/tabs/tabs.twig",data:[{type:"raw",value:`<div x-data="{ 
    expanded: 0,
    handleTabChange: (event) => { 
        const tab = event.target; 
        const tabNav = $refs.tabNav; 
        const offset = 30;

        if (tab) { 
            const tabStartPosition = tab.getBoundingClientRect().left - tabNav.getBoundingClientRect().left; 
            const tabNavWidth = tabNav.offsetWidth; 
            const tabWidth = tab.offsetWidth; 
            const tabEndPosition = tabStartPosition + tabWidth; 
            let position; 
            const currPosition = tabNav.scrollLeft;

            if (tabStartPosition < offset) { 
                position = currPosition + tabStartPosition - offset; 
            } else if (tabEndPosition > tabNavWidth - offset) { 
                position = currPosition + (tabEndPosition - tabNavWidth + offset); 
            }

            if (position !== undefined) { 
                tabNav.scrollTo({ 
                    left: position, 
                    behavior: 'smooth' 
                }); 
            } 
        } 
    },
    handleKeydown: function(event) {
        const totalTabs = `,position:{start:0,end:1096}},{type:"output",position:{start:1096,end:1113},stack:[{type:"Twig.expression.type.variable",value:"tabs",match:["tabs"],position:{start:1096,end:1113}},{type:"Twig.expression.type.filter",value:"length",match:["|length","length"],position:{start:1096,end:1113}}]},{type:"raw",value:`;
        if (event.key === 'Home') {
            this.expanded = 0;
            this.$refs.tabNav.children[0].querySelector('button').focus();
        } else if (event.key === 'End') {
            this.expanded = totalTabs - 1;
            this.$refs.tabNav.children[totalTabs - 1].querySelector('button').focus();
        } else if (event.key === 'ArrowLeft') {
            if (this.expanded > 0){
              this.expanded--;
            }else{
              this.expanded = totalTabs - 1;
            }
            
            this.$refs.tabNav.children[this.expanded].querySelector('button').focus();
        } else if (event.key === 'ArrowRight') {
            if (this.expanded < totalTabs - 1){
              this.expanded++;
            }else{
              this.expanded = 0;
            }
            
            this.$refs.tabNav.children[this.expanded].querySelector('button').focus();
        }
    }
}">
  
  <ul class="tabs list-none mb-0 flex max-w-full overflow-x-auto no-scrollbar" id="`,position:{start:1113,end:2122}},{type:"output",position:{start:2122,end:2145},stack:[{type:"Twig.expression.type.variable",value:"tabs_id",match:["tabs_id"],position:{start:2122,end:2145}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:2122,end:2145}}]},{type:"raw",value:`" x-ref="tabNav"
    @keydown="handleKeydown($event)">
    `,position:{start:2145,end:2204}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"tab",expression:[{type:"Twig.expression.type.variable",value:"tabs",match:["tabs"]}],position:{start:2204,end:2225},output:[{type:"raw",value:'      <li class="tabs_title font-bold mr-1" :class="expanded === ',position:{start:2226,end:2291}},{type:"output",position:{start:2291,end:2308},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:2291,end:2308}},{type:"Twig.expression.type.key.period",position:{start:2291,end:2308},key:"index0"}]},{type:"raw",value:` ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'">
        <button 
          :tabIndex="expanded === `,position:{start:2308,end:2422}},{type:"output",position:{start:2422,end:2439},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:2422,end:2439}},{type:"Twig.expression.type.key.period",position:{start:2422,end:2439},key:"index0"}]},{type:"raw",value:` ? 0 : -1"
          @click="expanded = `,position:{start:2439,end:2479}},{type:"output",position:{start:2479,end:2496},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:2479,end:2496}},{type:"Twig.expression.type.key.period",position:{start:2479,end:2496},key:"index0"}]},{type:"raw",value:'; handleTabChange($event);" class="px-2 lg:px-10 py-1 lg:py-3 whitespace-nowrap">',position:{start:2496,end:2577}},{type:"output",position:{start:2577,end:2591},stack:[{type:"Twig.expression.type.variable",value:"tab",match:["tab"],position:{start:2577,end:2591}},{type:"Twig.expression.type.key.period",position:{start:2577,end:2591},key:"text"}]},{type:"raw",value:`</button>
      </li>
    `,position:{start:2591,end:2617}}]},position:{open:{start:2204,end:2225},close:{start:2617,end:2629}}},{type:"raw",value:`  </ul>

  <div class="tabs_content shadow-lg">
    `,position:{start:2630,end:2682}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"tab",expression:[{type:"Twig.expression.type.variable",value:"tabs",match:["tabs"]}],position:{start:2682,end:2703},output:[{type:"raw",value:'      <div x-show="expanded === ',position:{start:2704,end:2736}},{type:"output",position:{start:2736,end:2753},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:2736,end:2753}},{type:"Twig.expression.type.key.period",position:{start:2736,end:2753},key:"index0"}]},{type:"raw",value:'" tabindex="0" id="',position:{start:2753,end:2772}},{type:"output",position:{start:2772,end:2784},stack:[{type:"Twig.expression.type.variable",value:"tab",match:["tab"],position:{start:2772,end:2784}},{type:"Twig.expression.type.key.period",position:{start:2772,end:2784},key:"id"}]},{type:"raw",value:`" class="tabs_panel py-8 lg:py-10 px-8">
        `,position:{start:2784,end:2833}},{type:"output",position:{start:2833,end:2856},stack:[{type:"Twig.expression.type.variable",value:"tab",match:["tab"],position:{start:2833,end:2856}},{type:"Twig.expression.type.key.period",position:{start:2833,end:2856},key:"content"},{type:"Twig.expression.type.filter",value:"raw",match:["| raw","raw"],position:{start:2833,end:2856}}]},{type:"raw",value:`
      </div>
    `,position:{start:2856,end:2874}}]},position:{open:{start:2682,end:2703},close:{start:2874,end:2886}}},{type:"raw",value:`  </div>
  
</div>
`,position:{start:2887,end:2887}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return n(e.render({attributes:new p,...t}))}catch(o){return n("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/containers/tabs/tabs.twig: "+o.toString())}};export{l as t};
