import{T as i,t as p}from"./twig-BXd3Gfe2.js";import{a as s,D as a}from"./twig-foVUGi9y.js";s(i);i.cache(!1);s(i);i.cache(!1);p.twig({id:"@components/forms/simple-form/simple-form.twig",data:[{type:"raw",value:'<form action="',position:{start:0,end:14}},{type:"output",position:{start:14,end:47},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:14,end:47}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:14,end:47},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:14,end:47}},{type:"Twig.expression.type.string",value:"/search",position:{start:14,end:47}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:14,end:47},expression:!1}]}]},{type:"raw",value:`">
  <div class="flex relative">
    <label for="`,position:{start:47,end:96}},{type:"output",position:{start:96,end:132},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:96,end:132}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:96,end:132},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:96,end:132}},{type:"Twig.expression.type.string",value:"keywords",position:{start:96,end:132}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:96,end:132},expression:!1}]}]},{type:"raw",value:`" class="sr-only">Keywords</label>
    <input class="w-full pr-6" placeholder="Search" type="search" id="`,position:{start:132,end:237}},{type:"output",position:{start:237,end:273},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:237,end:273}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:237,end:273},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:237,end:273}},{type:"Twig.expression.type.string",value:"keywords",position:{start:237,end:273}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:237,end:273},expression:!1}]}]},{type:"raw",value:'" name="',position:{start:273,end:281}},{type:"output",position:{start:281,end:306},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:281,end:306}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:281,end:306},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:281,end:306}},{type:"Twig.expression.type.string",value:"q",position:{start:281,end:306}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:281,end:306},expression:!1}]}]},{type:"raw",value:`">
    <div class="absolute h-full right-0 top-0 flex items-center px-3">
      <button type="submit"  value="Submit">
        <span class="sr-only">`,position:{start:306,end:455}},{type:"output",position:{start:455,end:492},stack:[{type:"Twig.expression.type.variable",value:"button_text",match:["button_text"],position:{start:455,end:492}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:455,end:492},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:455,end:492}},{type:"Twig.expression.type.string",value:"Search",position:{start:455,end:492}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:455,end:492},expression:!1}]}]},{type:"raw",value:`</span>
        <span class="icon-search text-primary"></span>
      </button>
    </div>
  </div>
</form>
`,position:{start:492,end:492}}],precompiled:!0});const o=e=>e,d=(e={})=>{const n=p.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/navigation/menu/menu.twig",data:[{type:"raw",value:`
<div id="main-menu" x-data="{
	    breakpoint: 1024,
	    dropdownOpen: { sm: null, lg: null },	    
      align: 'left',
      timeout: null,
	    toggleDropdown(index) {
	      if (window.innerWidth <= this.breakpoint) {
	        this.dropdownOpen.sm = this.dropdownOpen.sm === index ? null : index;
	      }else{          
          this.dropdownOpen.lg = this.dropdownOpen.lg === index ? null : index;
          setTimeout(() => {
            this.checkDropdownPosition();
          }, 10);
        }        
	    },
      checkDropdownPosition() {
        if (window.innerWidth > this.breakpoint) {
          const dropdown = document.querySelector('.dropdown:not(.hidden)');
          
          if (!dropdown) {
            console.warn('Dropdown reference not found');
            return;
          }

          const dropdownWidth = dropdown.offsetWidth; // Get the width of the dropdown
          const dropdownPosition = dropdown.getBoundingClientRect().left; // Get the left position of the dropdown
          const windowWidth = window.innerWidth; // Get the full width of the viewport
          const windowRight = windowWidth - dropdownPosition - dropdownWidth; // Calculate space on the right side of the dropdown          

          // Determine alignment based on available space
          if (windowRight < 0) {
            this.align = 'right'; // Not enough space on the right
          } else {
            this.align = 'left'; // Enough space, align left
          }

          
        }
      },
	    handleMouseEnter(index) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.align = 'left';
          if (window.innerWidth > this.breakpoint) this.dropdownOpen['lg'] = index;
          setTimeout(() => {
            this.checkDropdownPosition();
          }, 10);        
        }, 100);
        
        
	    },
	    handleMouseLeave() {        
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
	        if (window.innerWidth > this.breakpoint) this.dropdownOpen['lg'] = null;        
        }, 100);        
	    },
      handleDirection(direction){        
        if (direction === 'left') {
          if (this.dropdownOpen.lg > 0) { 
            this.dropdownOpen.lg--;             
          }else{
            this.dropdownOpen.lg = $refs.topbar.children.length - 1;
          }
        } else {
          if (this.dropdownOpen.lg < $refs.topbar.children.length - 1) { 
            this.dropdownOpen.lg++; 
          }else{
            this.dropdownOpen.lg = 0;
          }
        }        
        $refs.topbar.children[this.dropdownOpen.lg].querySelector('a').focus(); 
      }
	  }" class="absolute z-20 bg-white w-full py-4 lg:mt-4 lg:relative lg:block shadow-md lg:shadow-none lg:py-0" :class="(mainMenu ? '' : 'hidden')">
	<div class="container">
		<ul role="menubar"   
      x-ref="topbar"  
      @keydown.left="handleDirection('left')" 
      @keydown.right="handleDirection('right')" 
      class="flex flex-col justify-between gap-x-3 list-none lg:-mx-6 lg:flex-row" >
			`,position:{start:0,end:3096}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:3096,end:3118},output:[{type:"raw",value:`				<li 
          @focusin="if (window.innerWidth > this.breakpoint) dropdownOpen.lg = `,position:{start:3119,end:3207}},{type:"output",position:{start:3207,end:3224},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3207,end:3224}},{type:"Twig.expression.type.key.period",position:{start:3207,end:3224},key:"index0"}]},{type:"raw",value:`"    
          role="presentation" class="relative lg:border-0 `,position:{start:3224,end:3288}},{type:"output",position:{start:3288,end:3346},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3288,end:3346}},{type:"Twig.expression.type.key.period",position:{start:3288,end:3346},key:"last"},{type:"Twig.expression.type.bool",value:!1,position:{start:3288,end:3346}},{type:"Twig.expression.type.operator.binary",value:"==",position:{start:3288,end:3346},precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.string",value:"border-b border-gray-200",position:{start:3288,end:3346}},{type:"Twig.expression.type.string",value:"",position:{start:3288,end:3346}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3288,end:3346},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`" 
          `,position:{start:3346,end:3359}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:3359,end:3381},output:[{type:"raw",value:`            
            @mouseenter="handleMouseEnter(`,position:{start:3381,end:3436}},{type:"output",position:{start:3436,end:3453},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3436,end:3453}},{type:"Twig.expression.type.key.period",position:{start:3436,end:3453},key:"index0"}]},{type:"raw",value:`)" 
            @mouseleave="handleMouseLeave()"
          `,position:{start:3453,end:3512}}]},position:{open:{start:3359,end:3381},close:{start:3512,end:3523}}},{type:"raw",value:`          >

					`,position:{start:3524,end:3542}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"length",match:["| length","length"]}],position:{start:3542,end:3573},output:[{type:"raw",value:`						<button               
              @click="toggleDropdown(`,position:{start:3574,end:3640}},{type:"output",position:{start:3640,end:3657},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3640,end:3657}},{type:"Twig.expression.type.key.period",position:{start:3640,end:3657},key:"index0"}]},{type:"raw",value:`)" 
              class="py-3 text-black no-underline w-full font-bold flex items-center gap-2 justify-between leading-5 lg:hidden " `,position:{start:3657,end:3790}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3790,end:3824},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:3824,end:3856}}]},position:{open:{start:3790,end:3824},close:{start:3856,end:3867}}},{type:"raw",value:` role="menuitem">
							`,position:{start:3867,end:3892}},{type:"output",position:{start:3892,end:3968},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3892,end:3968}},{type:"Twig.expression.type.key.period",position:{start:3892,end:3968},key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3892,end:3968}},{type:"Twig.expression.type.test",position:{start:3892,end:3968},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3892,end:3968}},{type:"Twig.expression.type.key.period",position:{start:3892,end:3968},key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3892,end:3968}},{type:"Twig.expression.type.key.period",position:{start:3892,end:3968},key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3892,end:3968},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`
							<span :class="(dropdownOpen.sm === `,position:{start:3968,end:4011}},{type:"output",position:{start:4011,end:4028},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4011,end:4028}},{type:"Twig.expression.type.key.period",position:{start:4011,end:4028},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4028,end:4079}},{type:"output",position:{start:4079,end:4096},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4079,end:4096}},{type:"Twig.expression.type.key.period",position:{start:4079,end:4096},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-primary')" class="icon-chevron-down text-xs text-primary"></span>
						</button>
					`,position:{start:4096,end:4213}}]},position:{open:{start:3542,end:3573},close:{start:4213,end:4224}}},{type:"raw",value:`
					<a @keydown.enter="toggleDropdown(`,position:{start:4225,end:4265}},{type:"output",position:{start:4265,end:4282},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4265,end:4282}},{type:"Twig.expression.type.key.period",position:{start:4265,end:4282},key:"index0"}]},{type:"raw",value:')"  role="menuitem" :class="dropdownOpen.lg === ',position:{start:4282,end:4330}},{type:"output",position:{start:4330,end:4347},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4330,end:4347}},{type:"Twig.expression.type.key.period",position:{start:4330,end:4347},key:"index0"}]},{type:"raw",value:` ? 'bg-primary text-white' : ''" class="`,position:{start:4347,end:4387}},{type:"output",position:{start:4387,end:4448},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4387,end:4448}},{type:"Twig.expression.type.key.period",position:{start:4387,end:4448},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:inline-flex",position:{start:4387,end:4448}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:4387,end:4448}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:4387,end:4448},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" font-bold px-6 py-3 gap-2 leading-5 items-center lg:inline-flex text-black no-underline ",position:{start:4448,end:4537}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.test",filter:"empty"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:4537,end:4581},output:[{type:"raw",value:"hover:underline",position:{start:4581,end:4596}}]},position:{open:{start:4537,end:4581},close:{start:4596,end:4607}}},{type:"raw",value:'" ',position:{start:4607,end:4609}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:4609,end:4626},output:[{type:"raw",value:' href="',position:{start:4626,end:4633}},{type:"output",position:{start:4633,end:4647},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4633,end:4647}},{type:"Twig.expression.type.key.period",position:{start:4633,end:4647},key:"url"}]},{type:"raw",value:'"',position:{start:4647,end:4648}}]},position:{open:{start:4609,end:4626},close:{start:4648,end:4659}}},{type:"raw",value:`>            
            `,position:{start:4659,end:4685}},{type:"output",position:{start:4685,end:4700},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4685,end:4700}},{type:"Twig.expression.type.key.period",position:{start:4685,end:4700},key:"text"}]},{type:"raw",value:`          
            `,position:{start:4700,end:4723}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:4723,end:4745},output:[{type:"raw",value:'						  <span :class="(dropdownOpen.sm === ',position:{start:4746,end:4789}},{type:"output",position:{start:4789,end:4806},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4789,end:4806}},{type:"Twig.expression.type.key.period",position:{start:4789,end:4806},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4806,end:4857}},{type:"output",position:{start:4857,end:4874},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4857,end:4874}},{type:"Twig.expression.type.key.period",position:{start:4857,end:4874},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-primary')" class="icon-chevron-down text-xs text-primary"></span>
            `,position:{start:4874,end:4982}}]},position:{open:{start:4723,end:4745},close:{start:4982,end:4993}}},{type:"raw",value:`					</a>

					`,position:{start:4994,end:5010}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:5010,end:5042},output:[{type:"raw",value:'						<ul role="presentation" class="list-none lg:absolute lg:bg-white lg:py-3 w-full lg:w-80 lg:shadow-md dropdown" :class="(dropdownOpen.sm === ',position:{start:5043,end:5189}},{type:"output",position:{start:5189,end:5206},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5189,end:5206}},{type:"Twig.expression.type.key.period",position:{start:5189,end:5206},key:"index0"}]},{type:"raw",value:" || dropdownOpen.lg === ",position:{start:5206,end:5230}},{type:"output",position:{start:5230,end:5247},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5230,end:5247}},{type:"Twig.expression.type.key.period",position:{start:5230,end:5247},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (align + '-0')" x-data=" {
								    breakpoint: 1024,
								    childOpen: { sm: null, lg: null },
                    childAlign: 'left',
								    toggleChildDropdown(index) {                      
								      if (window.innerWidth <= this.breakpoint) {
                        this.childOpen.sm = this.childOpen.sm === index ? null : index;
                      }else{
                        this.childOpen.lg = this.childOpen.lg === index ? null : index;
                        setTimeout(() => {
                          this.checkDropdownPosition();
                        }, 25);
                      }
                    
								    },
                    checkDropdownPosition() {
                      if (window.innerWidth > this.breakpoint) {                        
                        const dropdown = $el.querySelector('.dropdown:not(.hidden)');
                        
                        if (!dropdown) {
                          console.warn('Dropdown reference not found');
                          return;
                        }

                        const dropdownWidth = dropdown.offsetWidth; // Get the width of the dropdown
                        const dropdownPosition = dropdown.getBoundingClientRect().left; // Get the left position of the dropdown
                        const windowWidth = window.innerWidth; // Get the full width of the viewport
                        const windowRight = windowWidth - dropdownPosition - dropdownWidth; // Calculate space on the right side of the dropdown          

                        // Determine alignment based on available space
                        if (windowRight < 0) {
                          this.childAlign = 'right'; // Not enough space on the right
                        } else {
                          this.childAlign = 'left'; // Enough space, align left
                        }                      
                      }
                    },                    
								    handleChildMouseEnter(index) {
                      this.timeout = setTimeout(() => {
                        this.childAlign = 'left';
                        if (window.innerWidth > this.breakpoint) this.childOpen.lg = index;
                        setTimeout(() => {
                          this.checkDropdownPosition();
                        }, 25);                          
                      }, 100);
								    },
								    handleChildMouseLeave() {
                      this.timeout = setTimeout(() => {
								        if (window.innerWidth > this.breakpoint) this.childOpen.lg = null;
                      }, 100);
								    }
								  }">
							<li role="presentation" class="parent-link font-bold lg:px-6 py-1">
								<a `,position:{start:5247,end:8040}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8040,end:8074},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:8074,end:8106}}]},position:{open:{start:8040,end:8074},close:{start:8106,end:8117}}},{type:"raw",value:' href="',position:{start:8117,end:8124}},{type:"output",position:{start:8124,end:8138},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:8124,end:8138}},{type:"Twig.expression.type.key.period",position:{start:8124,end:8138},key:"url"}]},{type:"raw",value:'" class="text-primary">',position:{start:8138,end:8161}},{type:"output",position:{start:8161,end:8176},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:8161,end:8176}},{type:"Twig.expression.type.key.period",position:{start:8161,end:8176},key:"text"}]},{type:"raw",value:`
									Overview</a>
							</li>
							`,position:{start:8176,end:8219}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8219,end:8251},output:[{type:"raw",value:`								<li 
                  @focusin="if (window.innerWidth > this.breakpoint) childOpen.lg = `,position:{start:8252,end:8349}},{type:"output",position:{start:8349,end:8366},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8349,end:8366}},{type:"Twig.expression.type.key.period",position:{start:8349,end:8366},key:"index0"}]},{type:"raw",value:`"    
                  class="py-1 lg:px-6" 
                  `,position:{start:8366,end:8430}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8430,end:8453},output:[{type:"raw",value:'                    :class="childOpen.lg === ',position:{start:8454,end:8499}},{type:"output",position:{start:8499,end:8516},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8499,end:8516}},{type:"Twig.expression.type.key.period",position:{start:8499,end:8516},key:"index0"}]},{type:"raw",value:` ? 'lg:bg-primary-100' : ''"  
                    @mouseenter="handleChildMouseEnter(`,position:{start:8516,end:8602}},{type:"output",position:{start:8602,end:8619},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8602,end:8619}},{type:"Twig.expression.type.key.period",position:{start:8602,end:8619},key:"index0"}]},{type:"raw",value:`)" 
                    @mouseleave="handleChildMouseLeave()"
                  `,position:{start:8619,end:8699}}]},position:{open:{start:8430,end:8453},close:{start:8699,end:8710}}},{type:"raw",value:`>
									`,position:{start:8710,end:8721}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8721,end:8754},output:[{type:"raw",value:'										<button @click="toggleChildDropdown(',position:{start:8755,end:8801}},{type:"output",position:{start:8801,end:8818},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8801,end:8818}},{type:"Twig.expression.type.key.period",position:{start:8801,end:8818},key:"index0"}]},{type:"raw",value:')" role="menuitem" href="',position:{start:8818,end:8843}},{type:"output",position:{start:8843,end:8858},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8843,end:8858}},{type:"Twig.expression.type.key.period",position:{start:8843,end:8858},key:"url"}]},{type:"raw",value:`" class="flex items-center gap-2 justify-between w-full lg:hidden text-primary">
                      <span class="underline hover:no-underline flex w-full">
											  `,position:{start:8858,end:9030}},{type:"output",position:{start:9030,end:9046},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9030,end:9046}},{type:"Twig.expression.type.key.period",position:{start:9030,end:9046},key:"text"}]},{type:"raw",value:`
                      </span>
                    
                      <span :class="childOpen.sm === `,position:{start:9046,end:9151}},{type:"output",position:{start:9151,end:9168},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9151,end:9168}},{type:"Twig.expression.type.key.period",position:{start:9151,end:9168},key:"index0"}]},{type:"raw",value:` ? 'rotate-180' : ''" class="icon-chevron-down lg:hidden text-primary text-xs no-underline"></span>
                      <span class="icon-chevron-right hidden lg:block text-primary text-xs no-underline"></span>
                    
										</button>
									`,position:{start:9168,end:9431}}]},position:{open:{start:8721,end:8754},close:{start:9431,end:9442}}},{type:"raw",value:'									<a @keydown.enter="toggleChildDropdown(',position:{start:9443,end:9491}},{type:"output",position:{start:9491,end:9508},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9491,end:9508}},{type:"Twig.expression.type.key.period",position:{start:9491,end:9508},key:"index0"}]},{type:"raw",value:')" role="menuitem" class="no-underline ',position:{start:9508,end:9547}},{type:"output",position:{start:9547,end:9644},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9547,end:9644}},{type:"Twig.expression.type.key.period",position:{start:9547,end:9644},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:flex justify-between gap-2 items-center w-full",position:{start:9547,end:9644}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:9547,end:9644}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:9547,end:9644},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" href="',position:{start:9644,end:9652}},{type:"output",position:{start:9652,end:9666},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:9652,end:9666}},{type:"Twig.expression.type.key.period",position:{start:9652,end:9666},key:"url"}]},{type:"raw",value:`">
                    <span class="underline flex w-full hover:no-underline">
                      `,position:{start:9666,end:9767}},{type:"output",position:{start:9767,end:9783},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9767,end:9783}},{type:"Twig.expression.type.key.period",position:{start:9767,end:9783},key:"text"}]},{type:"raw",value:`
                    </span>
                    `,position:{start:9783,end:9832}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9832,end:9865},output:[{type:"raw",value:`                      
                      <span class="icon-chevron-right hidden lg:block text-primary text-xs no-underline"></span>
                    `,position:{start:9865,end:10021}}]},position:{open:{start:9832,end:9865},close:{start:10021,end:10032}}},{type:"raw",value:`                  </a>

									`,position:{start:10033,end:10066}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10066,end:10099},output:[{type:"raw",value:'										<ul role="presentation" class="list-none dropdown lg:absolute my-3 lg:my-0 top-0 bg-primary-100 w-full lg:w-80 p-3 md:px-6 flex flex-col space-y-2 lg:shadow-md" :class="(childOpen.sm === ',position:{start:10100,end:10297}},{type:"output",position:{start:10297,end:10314},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10297,end:10314}},{type:"Twig.expression.type.key.period",position:{start:10297,end:10314},key:"index0"}]},{type:"raw",value:" || childOpen.lg === ",position:{start:10314,end:10335}},{type:"output",position:{start:10335,end:10352},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10335,end:10352}},{type:"Twig.expression.type.key.period",position:{start:10335,end:10352},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (childAlign === 'right' ? 'lg:right-full' : 'lg:left-full')">
											<li role="presentation" class="font-bold">
												<a `,position:{start:10352,end:10509}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10509,end:10544},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:10544,end:10576}}]},position:{open:{start:10509,end:10544},close:{start:10576,end:10587}}},{type:"raw",value:' href="',position:{start:10587,end:10594}},{type:"output",position:{start:10594,end:10609},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10594,end:10609}},{type:"Twig.expression.type.key.period",position:{start:10594,end:10609},key:"url"}]},{type:"raw",value:'">',position:{start:10609,end:10611}},{type:"output",position:{start:10611,end:10627},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10611,end:10627}},{type:"Twig.expression.type.key.period",position:{start:10611,end:10627},key:"text"}]},{type:"raw",value:`
													Overview</a>
											</li>
											`,position:{start:10627,end:10682}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:10682,end:10720},output:[{type:"raw",value:`												<li role="presentation">
													<a role="menuitem" href="`,position:{start:10721,end:10796}},{type:"output",position:{start:10796,end:10816},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10796,end:10816}},{type:"Twig.expression.type.key.period",position:{start:10796,end:10816},key:"url"}]},{type:"raw",value:'">',position:{start:10816,end:10818}},{type:"output",position:{start:10818,end:10839},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10818,end:10839}},{type:"Twig.expression.type.key.period",position:{start:10818,end:10839},key:"text"}]},{type:"raw",value:`</a>
												</li>
											`,position:{start:10839,end:10873}}]},position:{open:{start:10682,end:10720},close:{start:10873,end:10885}}},{type:"raw",value:`										</ul>
									`,position:{start:10886,end:10911}}]},position:{open:{start:10066,end:10099},close:{start:10911,end:10922}}},{type:"raw",value:`								</li>
							`,position:{start:10923,end:10944}}]},position:{open:{start:8219,end:8251},close:{start:10944,end:10956}}},{type:"raw",value:`						</ul>
					`,position:{start:10957,end:10974}}]},position:{open:{start:5010,end:5042},close:{start:10974,end:10985}}},{type:"raw",value:`				</li>
			`,position:{start:10986,end:10999}}]},position:{open:{start:3096,end:3118},close:{start:10999,end:11011}}},{type:"raw",value:`		</ul>
		<div class="lg:hidden search-wrapper mt-4">
			`,position:{start:11012,end:11069}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"input_id"},{type:"Twig.expression.type.string",value:"keywords_mobile"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:11069,end:11168}},position:{start:11069,end:11168}},{type:"raw",value:`		</div>
	</div>
</div>
`,position:{start:11169,end:11169}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(n.render({attributes:new a(t),...e}))}catch(t){return o("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/navigation/menu/menu.twig: "+t.toString())}};export{d as t};
