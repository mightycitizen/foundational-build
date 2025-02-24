import{t as c,T as l}from"./twig-BXd3Gfe2.js";import{D as u,a as d}from"./twig-foVUGi9y.js";import"./_commonjsHelpers-BosuxZz1.js";d(l);l.cache(!1);const r=t=>t,p=(t={})=>{const o=c.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/containers/modal/modal.twig",data:[{type:"raw",value:`


<!-- Inline Modal -->
<div x-data="{ open: true }" @keydown.escape.window="open = false" class="modal" >
    <button @click.prevent="open = true" class="button">Open Modal</button>    
    <div class="bg-black bg-opacity-40 fixed left-0 top-0 w-full h-full flex justify-center items-center"  @click="open = false" x-show="open" x-transition>
        <div  @click.stop class="bg-white p-8 shadow-lg max-w-screen-md relative transition-opacity duration-300" x-show="open" x-transition>
            <h2>Modal Heading Here</h2>
            <div class="prose">
                <p>Phasellus odio nisl, imperdiet vel tempus eu, blandit et erat. Nunc eget ligula quis quam viverra posuere eu vel magna.</p>
                <p>Sed faucibus non arcu ac consectetur. Donec erat lectus, pharetra ut nisi quis, mattis rhoncus sem.</p>                
            </div>        
            <button @click="open = false" class="absolute right-4 top-3 text-3xl">
                <span class="sr-only">Close</span>
                <span class="icon-close"></span>
            </button>
        </div>
    </div>
</div>

<script>
    function openModal(content) {
        this.modalContent = content;
        this.open = true;
    }
<\/script>
`,position:{start:0,end:0}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),r(o.render({attributes:new u(e),...t}))}catch(e){return r("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/containers/modal/modal.twig: "+e.toString())}},w={title:"Components/Containers/Modal",argTypes:{heading:{control:"text"},summary:{control:"text"},subheading:{control:"text"},button:{url:{control:"text"},text:{control:"text"}},categories:[{text:{control:"text"},url:{control:"text"}}]}},m=t=>p(t),g={heading:"Hero",summary:"Summary",subheading:"Subheading"},n=m.bind({});n.args=g;var s,a,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const x=["Modal"];export{n as Modal,x as __namedExportsOrder,w as default};
