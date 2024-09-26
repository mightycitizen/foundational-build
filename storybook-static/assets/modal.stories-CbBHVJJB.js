import{T as i,t as c}from"./twig-DGqAAA8S.js";import{a as u,D as d}from"./twig-xRDxs_F9.js";import"./_commonjsHelpers-BosuxZz1.js";u(i);i.cache(!1);const o=t=>t,p=(t={})=>{const n=c.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/containers/modal/modal.twig",data:[{type:"raw",value:`


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
`,position:{start:0,end:0}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{return o(n.render({attributes:new d,...t}))}catch(l){return o("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/containers/modal/modal.twig: "+l.toString())}},x={title:"Components/Containers/Modal",argTypes:{heading:{control:"text"},summary:{control:"text"},subheading:{control:"text"},button:{url:{control:"text"},text:{control:"text"}},categories:[{text:{control:"text"},url:{control:"text"}}]}},m=t=>p(t),g={heading:"Hero",summary:"Summary",subheading:"Subheading"},e=m.bind({});e.args=g;var s,a,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const w=["Modal"];export{e as Modal,w as __namedExportsOrder,x as default};
