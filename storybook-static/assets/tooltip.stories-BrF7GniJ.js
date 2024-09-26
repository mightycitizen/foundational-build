import{T as r,t as p}from"./twig-DGqAAA8S.js";import{a as c,D as u}from"./twig-xRDxs_F9.js";import"./_commonjsHelpers-BosuxZz1.js";c(r);r.cache(!1);const n=t=>t,d=(t={})=>{const e=p.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/inline-text/tooltip/tooltip.twig",data:[{type:"raw",value:`<span x-data="{
    show: false,
    tooltipClasses: '',
    showTooltip(event) {
        this.tooltipClasses = 'bottom-full';
        const tooltip = this.$refs.tooltip;
        const tooltipRect = tooltip.getBoundingClientRect();
        const buttonRect = event.currentTarget.getBoundingClientRect();

        this.show = true;

        // Center the tooltip above the button
        let top = buttonRect.top - tooltipRect.height - 8; // 8px gap
        let left = buttonRect.left + (buttonRect.width / 2) - (tooltipRect.width / 2);

        console.log(top, left);

        // Check if tooltip goes off the top of the viewport
        if (top < 0) {            
            this.tooltipClasses = 'top-full'; // Center below
        } 

        // Adjust left position if it goes out of bounds
        if (left < 0) {
            this.tooltipClasses += \` left-2\`; // Align to the left if out of bounds
        } else if (left + tooltipRect.width > window.innerWidth) {
            this.tooltipClasses += \` right-2\`; // Align to the right if out of bounds
        }else{
            this.tooltipClasses += ' -translate-x-1/2 left-1/2'; // Center tooltip
        }

        // Add top and left styles based on the computed positions        
    },

    hideTooltip() {
        this.show = false;
    },

    
}" class="inline-flex gap-x-2 relative" >

    `,position:{start:0,end:1357}},{type:"output",position:{start:1357,end:1367},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:1357,end:1367}}]},{type:"raw",value:`
    <span class="relative">
        <button x-ref="button" @click="show = !show;" @focusin="showTooltip($event)" @blur="hideTooltip()" @mouseenter="showTooltip($event)" @mouseleave="hideTooltip()" ><span class="sr-only">Tooltip trigger for `,position:{start:1367,end:1608}},{type:"output",position:{start:1608,end:1618},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:1608,end:1618}}]},{type:"raw",value:`</span><i class="icon-info-circle"></i></button>
        <span         
            x-ref="tooltip"
            aria-hidden="!show"                       
            :class="tooltipClasses + (show ? ' opacity-100' : ' opacity-0') + ' duration-75 transition-opacity'"
            class="absolute bg-primary text-white text-sm rounded p-2 whitespace-nowrap"
    >
            `,position:{start:1618,end:1993}},{type:"output",position:{start:1993,end:2006},stack:[{type:"Twig.expression.type.variable",value:"tooltip",match:["tooltip"],position:{start:1993,end:2006}}]},{type:"raw",value:`
        </span>
    </span>
 
</span>


`,position:{start:2006,end:2006}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return n(e.render({attributes:new u,...t}))}catch(l){return n("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/inline-text/tooltip/tooltip.twig: "+l.toString())}},b={title:"Components/Inline Text/Tooltip"},h=t=>d(t),o=h.bind({});o.args={text:"Trigger Text",tooltip:"Tooltip Text"};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const m=["Tooltip"];export{o as Tooltip,m as __namedExportsOrder,b as default};
