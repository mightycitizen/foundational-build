import{T as t,t as s}from"./twig-BXd3Gfe2.js";import{a as e}from"./twig-foVUGi9y.js";e(t);t.cache(!1);e(t);t.cache(!1);s.twig({id:"@components/containers/carousel/carousel-nav.twig",data:[{type:"raw",value:'<div class="splide__arrows splide__nav flex justify-center gap-6 items-center mt-4 md:mt-8 ',position:{start:0,end:91}},{type:"output",position:{start:91,end:123},stack:[{type:"Twig.expression.type.variable",value:"splide_nav_class",match:["splide_nav_class"],position:{start:91,end:123}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:91,end:123}}]},{type:"raw",value:" ",position:{start:123,end:124}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"inline",match:["inline"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:124,end:148},output:[{type:"raw",value:"splide-nav--inline",position:{start:148,end:166}}]},position:{open:{start:124,end:148},close:{start:166,end:177}}},{type:"raw",value:`">
		<button class="splide__arrow splide__arrow--prev aspect-square button rounded-full w-10 flex items-center justify-center p-0">
			<span class="icon-chevron-left"></span>
      <span class="sr-only">Prev</span>			
		</button>
    <ul class="splide__pagination list-none gap-4"></ul>
		<button class="splide__arrow splide__arrow--next aspect-square button rounded-full w-10 flex items-center justify-center p-0">
      <span class="icon-chevron-right"></span>
      <span class="sr-only">Next</span>			
		</button>
  `,position:{start:177,end:697}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"pause",match:["pause"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:697,end:721},output:[{type:"raw",value:`    <button class="js-splide-toggle splide__toggle">
      <span class="sr-only">Toggle Pause/Play</span>
      <span class="icon-pause active"></span>
      <span class="icon-play inactive"></span>
    </button>
  `,position:{start:722,end:937}}]},position:{open:{start:697,end:721},close:{start:937,end:948}}},{type:"raw",value:`</div>
`,position:{start:949,end:949}}],precompiled:!0});
