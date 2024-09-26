import{T as a,t as o}from"./twig-DGqAAA8S.js";import{a as l,D as d}from"./twig-xRDxs_F9.js";l(a);a.cache(!1);const n=r=>r,b=(r={})=>{const e=o.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/utils/loader/loader.twig",data:[{type:"raw",value:`<div class="loader inline-block relative w-20 h-20">
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader border-black border-t-transparent border-r-transparent border-b-transparent"></div>
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader animate-delay-75 border-black border-t-transparent border-r-transparent border-b-transparent"></div>
  <div class="absolute w-full h-full border-8 border-black rounded-full animate-loader animate-delay-150 border-black border-t-transparent border-r-transparent border-b-transparent"></div>
</div>

<style>
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-loader {
    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  .animate-delay-75 {
    animation-delay: -0.3s;
  }

  .animate-delay-150 {
    animation-delay: -0.15s;
  }

  .is-loaded .loader {
    display: none;
  }

  .button .loader {
    width: 3.75rem; /* Tailwind equivalent for rem-calc(15) */
    height: 3.75rem;
    margin-top: -0.25rem; /* rem-calc(-1) */
    margin-left: 2rem; /* rem-calc(8) */
    margin-right: -0.75rem; /* rem-calc(-3) */
    vertical-align: middle;
  }

  .button .loader div {
    border-width: 1px; /* Tailwind equivalent for rem-calc(4) */
  }
</style>
`,position:{start:0,end:0}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return n(e.render({attributes:new d,...r}))}catch(t){return n("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/utils/loader/loader.twig: "+t.toString())}};export{b as t};
