import{T as o,t}from"./twig-DGqAAA8S.js";import{a as p,D as a}from"./twig-xRDxs_F9.js";import"./logo-C5b6ZHtH.js";import"./menu-B-WZh3d9.js";import"./hamburger-BoW13af-.js";p(o);o.cache(!1);t.twig({id:"@components/navigation/menu/menu.twig",data:[{type:"raw",value:`
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
              class="py-3 text-black no-underline w-full font-bold flex items-center gap-2 justify-between leading-5 lg:hidden" `,position:{start:3657,end:3789}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3789,end:3823},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:3823,end:3855}}]},position:{open:{start:3789,end:3823},close:{start:3855,end:3866}}},{type:"raw",value:` role="menuitem">
							`,position:{start:3866,end:3891}},{type:"output",position:{start:3891,end:3967},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3891,end:3967}},{type:"Twig.expression.type.key.period",position:{start:3891,end:3967},key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3891,end:3967}},{type:"Twig.expression.type.test",position:{start:3891,end:3967},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3891,end:3967}},{type:"Twig.expression.type.key.period",position:{start:3891,end:3967},key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3891,end:3967}},{type:"Twig.expression.type.key.period",position:{start:3891,end:3967},key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3891,end:3967},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`
							<span :class="(dropdownOpen.sm === `,position:{start:3967,end:4010}},{type:"output",position:{start:4010,end:4027},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4010,end:4027}},{type:"Twig.expression.type.key.period",position:{start:4010,end:4027},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4027,end:4078}},{type:"output",position:{start:4078,end:4095},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4078,end:4095}},{type:"Twig.expression.type.key.period",position:{start:4078,end:4095},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-primary')" class="icon-chevron-down text-xs text-primary"></span>
						</button>
					`,position:{start:4095,end:4212}}]},position:{open:{start:3542,end:3573},close:{start:4212,end:4223}}},{type:"raw",value:`
					<a @keydown.enter="toggleDropdown(`,position:{start:4224,end:4264}},{type:"output",position:{start:4264,end:4281},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4264,end:4281}},{type:"Twig.expression.type.key.period",position:{start:4264,end:4281},key:"index0"}]},{type:"raw",value:')"  role="menuitem" :class="dropdownOpen.lg === ',position:{start:4281,end:4329}},{type:"output",position:{start:4329,end:4346},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4329,end:4346}},{type:"Twig.expression.type.key.period",position:{start:4329,end:4346},key:"index0"}]},{type:"raw",value:` ? 'bg-primary text-white' : ''" class="`,position:{start:4346,end:4386}},{type:"output",position:{start:4386,end:4447},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4386,end:4447}},{type:"Twig.expression.type.key.period",position:{start:4386,end:4447},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:inline-flex",position:{start:4386,end:4447}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:4386,end:4447}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:4386,end:4447},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:' font-bold px-6 py-3 gap-2 leading-5 items-center lg:inline-flex text-black no-underline" href="',position:{start:4447,end:4543}},{type:"output",position:{start:4543,end:4557},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4543,end:4557}},{type:"Twig.expression.type.key.period",position:{start:4543,end:4557},key:"url"}]},{type:"raw",value:`">
						`,position:{start:4557,end:4566}},{type:"output",position:{start:4566,end:4581},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4566,end:4581}},{type:"Twig.expression.type.key.period",position:{start:4566,end:4581},key:"text"}]},{type:"raw",value:`
						<span :class="(dropdownOpen.sm === `,position:{start:4581,end:4623}},{type:"output",position:{start:4623,end:4640},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4623,end:4640}},{type:"Twig.expression.type.key.period",position:{start:4623,end:4640},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4640,end:4691}},{type:"output",position:{start:4691,end:4708},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4691,end:4708}},{type:"Twig.expression.type.key.period",position:{start:4691,end:4708},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-primary')" class="icon-chevron-down text-xs text-primary"></span>
					</a>

					`,position:{start:4708,end:4820}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:4820,end:4852},output:[{type:"raw",value:'						<ul role="presentation" class="list-none lg:absolute lg:bg-white lg:py-3 w-full lg:w-80 lg:shadow-md dropdown" :class="(dropdownOpen.sm === ',position:{start:4853,end:4999}},{type:"output",position:{start:4999,end:5016},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4999,end:5016}},{type:"Twig.expression.type.key.period",position:{start:4999,end:5016},key:"index0"}]},{type:"raw",value:" || dropdownOpen.lg === ",position:{start:5016,end:5040}},{type:"output",position:{start:5040,end:5057},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5040,end:5057}},{type:"Twig.expression.type.key.period",position:{start:5040,end:5057},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (align + '-0')" x-data=" {
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
								<a `,position:{start:5057,end:7850}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:7850,end:7884},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:7884,end:7916}}]},position:{open:{start:7850,end:7884},close:{start:7916,end:7927}}},{type:"raw",value:' href="',position:{start:7927,end:7934}},{type:"output",position:{start:7934,end:7948},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7934,end:7948}},{type:"Twig.expression.type.key.period",position:{start:7934,end:7948},key:"url"}]},{type:"raw",value:'" class="text-primary">',position:{start:7948,end:7971}},{type:"output",position:{start:7971,end:7986},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:7971,end:7986}},{type:"Twig.expression.type.key.period",position:{start:7971,end:7986},key:"text"}]},{type:"raw",value:`
									Overview</a>
							</li>
							`,position:{start:7986,end:8029}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8029,end:8061},output:[{type:"raw",value:`								<li 
                  @focusin="if (window.innerWidth > this.breakpoint) childOpen.lg = `,position:{start:8062,end:8159}},{type:"output",position:{start:8159,end:8176},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8159,end:8176}},{type:"Twig.expression.type.key.period",position:{start:8159,end:8176},key:"index0"}]},{type:"raw",value:`"    
                  class="py-1 lg:px-6" 
                  `,position:{start:8176,end:8240}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8240,end:8263},output:[{type:"raw",value:'                    :class="childOpen.lg === ',position:{start:8264,end:8309}},{type:"output",position:{start:8309,end:8326},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8309,end:8326}},{type:"Twig.expression.type.key.period",position:{start:8309,end:8326},key:"index0"}]},{type:"raw",value:` ? 'lg:bg-primary-100' : ''"  
                    @mouseenter="handleChildMouseEnter(`,position:{start:8326,end:8412}},{type:"output",position:{start:8412,end:8429},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8412,end:8429}},{type:"Twig.expression.type.key.period",position:{start:8412,end:8429},key:"index0"}]},{type:"raw",value:`)" 
                    @mouseleave="handleChildMouseLeave()"
                  `,position:{start:8429,end:8509}}]},position:{open:{start:8240,end:8263},close:{start:8509,end:8520}}},{type:"raw",value:`>
									`,position:{start:8520,end:8531}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8531,end:8564},output:[{type:"raw",value:'										<button @click="toggleChildDropdown(',position:{start:8565,end:8611}},{type:"output",position:{start:8611,end:8628},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8611,end:8628}},{type:"Twig.expression.type.key.period",position:{start:8611,end:8628},key:"index0"}]},{type:"raw",value:')" role="menuitem" href="',position:{start:8628,end:8653}},{type:"output",position:{start:8653,end:8668},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8653,end:8668}},{type:"Twig.expression.type.key.period",position:{start:8653,end:8668},key:"url"}]},{type:"raw",value:`" class="flex items-center gap-2 justify-between w-full lg:hidden text-primary">
                      <span class="underline hover:no-underline flex w-full">
											  `,position:{start:8668,end:8840}},{type:"output",position:{start:8840,end:8856},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8840,end:8856}},{type:"Twig.expression.type.key.period",position:{start:8840,end:8856},key:"text"}]},{type:"raw",value:`
                      </span>
											<span :class="childOpen.sm === `,position:{start:8856,end:8929}},{type:"output",position:{start:8929,end:8946},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8929,end:8946}},{type:"Twig.expression.type.key.period",position:{start:8929,end:8946},key:"index0"}]},{type:"raw",value:` ? 'rotate-180' : ''" class="icon-chevron-down lg:hidden text-primary text-xs no-underline"></span>
											<span class="icon-chevron-right hidden lg:block text-primary text-xs no-underline"></span>
										</button>
									`,position:{start:8946,end:9177}}]},position:{open:{start:8531,end:8564},close:{start:9177,end:9188}}},{type:"raw",value:'									<a @keydown.enter="toggleChildDropdown(',position:{start:9189,end:9237}},{type:"output",position:{start:9237,end:9254},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9237,end:9254}},{type:"Twig.expression.type.key.period",position:{start:9237,end:9254},key:"index0"}]},{type:"raw",value:')" role="menuitem" class="no-underline ',position:{start:9254,end:9293}},{type:"output",position:{start:9293,end:9390},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9293,end:9390}},{type:"Twig.expression.type.key.period",position:{start:9293,end:9390},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:flex justify-between gap-2 items-center w-full",position:{start:9293,end:9390}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:9293,end:9390}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:9293,end:9390},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" href="',position:{start:9390,end:9398}},{type:"output",position:{start:9398,end:9412},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:9398,end:9412}},{type:"Twig.expression.type.key.period",position:{start:9398,end:9412},key:"url"}]},{type:"raw",value:`">
                    <span class="underline flex w-full hover:no-underline">
                      `,position:{start:9412,end:9513}},{type:"output",position:{start:9513,end:9529},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9513,end:9529}},{type:"Twig.expression.type.key.period",position:{start:9513,end:9529},key:"text"}]},{type:"raw",value:`
                    </span>
                    `,position:{start:9529,end:9578}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9578,end:9611},output:[{type:"raw",value:`                      
                      <span class="icon-chevron-right hidden lg:block text-primary text-xs no-underline"></span>
                    `,position:{start:9611,end:9767}}]},position:{open:{start:9578,end:9611},close:{start:9767,end:9778}}},{type:"raw",value:`                  </a>

									`,position:{start:9779,end:9812}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9812,end:9845},output:[{type:"raw",value:'										<ul role="presentation" class="list-none dropdown lg:absolute my-3 lg:my-0 top-0 bg-primary-100 w-full lg:w-80 p-3 md:px-6 flex flex-col space-y-2 lg:shadow-md" :class="(childOpen.sm === ',position:{start:9846,end:10043}},{type:"output",position:{start:10043,end:10060},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10043,end:10060}},{type:"Twig.expression.type.key.period",position:{start:10043,end:10060},key:"index0"}]},{type:"raw",value:" || childOpen.lg === ",position:{start:10060,end:10081}},{type:"output",position:{start:10081,end:10098},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10081,end:10098}},{type:"Twig.expression.type.key.period",position:{start:10081,end:10098},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (childAlign === 'right' ? 'lg:right-full' : 'lg:left-full')">
											<li role="presentation" class="font-bold">
												<a `,position:{start:10098,end:10255}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10255,end:10290},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:10290,end:10322}}]},position:{open:{start:10255,end:10290},close:{start:10322,end:10333}}},{type:"raw",value:' href="',position:{start:10333,end:10340}},{type:"output",position:{start:10340,end:10355},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10340,end:10355}},{type:"Twig.expression.type.key.period",position:{start:10340,end:10355},key:"url"}]},{type:"raw",value:'">',position:{start:10355,end:10357}},{type:"output",position:{start:10357,end:10373},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10357,end:10373}},{type:"Twig.expression.type.key.period",position:{start:10357,end:10373},key:"text"}]},{type:"raw",value:`
													Overview</a>
											</li>
											`,position:{start:10373,end:10428}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:10428,end:10466},output:[{type:"raw",value:`												<li role="presentation">
													<a role="menuitem" href="`,position:{start:10467,end:10542}},{type:"output",position:{start:10542,end:10562},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10542,end:10562}},{type:"Twig.expression.type.key.period",position:{start:10542,end:10562},key:"url"}]},{type:"raw",value:'">',position:{start:10562,end:10564}},{type:"output",position:{start:10564,end:10585},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10564,end:10585}},{type:"Twig.expression.type.key.period",position:{start:10564,end:10585},key:"text"}]},{type:"raw",value:`</a>
												</li>
											`,position:{start:10585,end:10619}}]},position:{open:{start:10428,end:10466},close:{start:10619,end:10631}}},{type:"raw",value:`										</ul>
									`,position:{start:10632,end:10657}}]},position:{open:{start:9812,end:9845},close:{start:10657,end:10668}}},{type:"raw",value:`								</li>
							`,position:{start:10669,end:10690}}]},position:{open:{start:8029,end:8061},close:{start:10690,end:10702}}},{type:"raw",value:`						</ul>
					`,position:{start:10703,end:10720}}]},position:{open:{start:4820,end:4852},close:{start:10720,end:10731}}},{type:"raw",value:`				</li>
			`,position:{start:10732,end:10745}}]},position:{open:{start:3096,end:3118},close:{start:10745,end:10757}}},{type:"raw",value:`		</ul>
		<div class="lg:hidden search-wrapper mt-4">
			`,position:{start:10758,end:10815}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"input_id"},{type:"Twig.expression.type.string",value:"keywords_mobile"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:10815,end:10914}},position:{start:10815,end:10914}},{type:"raw",value:`		</div>
	</div>
</div>
`,position:{start:10915,end:10915}}],precompiled:!0});t.twig({id:"@components/utils/hamburger/hamburger.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"hamburger_class",expression:[{type:"Twig.expression.type.string",value:"bg-primary h-[3px] rounded absolute w-full"}],position:{start:0,end:72}},position:{start:0,end:72}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:73,end:99},output:[{type:"raw",value:'<div x-data="{ ',position:{start:100,end:115}},{type:"output",position:{start:115,end:127},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:115,end:127}}]},{type:"raw",value:`: false }">
`,position:{start:127,end:139}}]},position:{open:{start:73,end:99},close:{start:139,end:150}}},{type:"raw",value:'  <button class="hamburger flex items-center flex-col" type="button" id="hamburger" @click="',position:{start:151,end:243}},{type:"output",position:{start:243,end:255},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:243,end:255}}]},{type:"raw",value:" = !",position:{start:255,end:259}},{type:"output",position:{start:259,end:271},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:259,end:271}}]},{type:"raw",value:`" aria-label="Toggle navigation">
    <div class="relative w-8 h-5">
      <div class="`,position:{start:271,end:358}},{type:"output",position:{start:358,end:379},stack:[{type:"Twig.expression.type.variable",value:"hamburger_class",match:["hamburger_class"],position:{start:358,end:379}}]},{type:"raw",value:' origin-center transition-all left-0 top-0" :class="',position:{start:379,end:431}},{type:"output",position:{start:431,end:443},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:431,end:443}}]},{type:"raw",value:` ? 'rotate-45 translate-y-2' : ''"></div>
      <div class="`,position:{start:443,end:503}},{type:"output",position:{start:503,end:524},stack:[{type:"Twig.expression.type.variable",value:"hamburger_class",match:["hamburger_class"],position:{start:503,end:524}}]},{type:"raw",value:' top-1/2 mt-0" x-show="!',position:{start:524,end:548}},{type:"output",position:{start:548,end:560},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:548,end:560}}]},{type:"raw",value:`"></div>
      <div class="`,position:{start:560,end:587}},{type:"output",position:{start:587,end:608},stack:[{type:"Twig.expression.type.variable",value:"hamburger_class",match:["hamburger_class"],position:{start:587,end:608}}]},{type:"raw",value:' origin-center transition-all left-0 top-full" :class="',position:{start:608,end:663}},{type:"output",position:{start:663,end:675},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:663,end:675}}]},{type:"raw",value:` ? ' -rotate-45 -translate-y-3' : ''"></div>
    </div>
    <span class="hamburger-text mt-2 uppercase font-bold text-xs tracking-wider" x-text="`,position:{start:675,end:820}},{type:"output",position:{start:820,end:832},stack:[{type:"Twig.expression.type.variable",value:"toggle",match:["toggle"],position:{start:820,end:832}}]},{type:"raw",value:` ? 'Close' : 'Menu'">Menu</span>
  </button>
`,position:{start:832,end:877}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:877,end:903},output:[{type:"raw",value:`  
</div>
`,position:{start:903,end:913}}]},position:{open:{start:877,end:903},close:{start:913,end:924}}}],precompiled:!0});t.twig({id:"@components/forms/simple-form/simple-form.twig",data:[{type:"raw",value:'<form action="',position:{start:0,end:14}},{type:"output",position:{start:14,end:47},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:14,end:47}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:14,end:47},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:14,end:47}},{type:"Twig.expression.type.string",value:"/search",position:{start:14,end:47}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:14,end:47},expression:!1}]}]},{type:"raw",value:`">
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
`,position:{start:492,end:492}}],precompiled:!0});t.twig({id:"@components/logo/logo.twig",data:[{type:"raw",value:'<a href="',position:{start:0,end:9}},{type:"output",position:{start:9,end:88},stack:[{type:"Twig.expression.type.variable",value:"homepage",match:["homepage"],position:{start:9,end:88}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:9,end:88},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:9,end:88}},{type:"Twig.expression.type.string",value:"/iframe.html?path=/story/pages-templates--templates",position:{start:9,end:88}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:9,end:88},expression:!1}]}]},{type:"raw",value:`" class="logo">
  <img `,position:{start:88,end:111}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"height"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:111,end:141},output:[{type:"raw",value:'height="',position:{start:141,end:149}},{type:"output",position:{start:149,end:166},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:149,end:166}},{type:"Twig.expression.type.key.period",position:{start:149,end:166},key:"height"}]},{type:"raw",value:'"',position:{start:166,end:167}}]},position:{open:{start:111,end:141},close:{start:167,end:178}}},{type:"raw",value:" ",position:{start:178,end:179}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]},{type:"Twig.expression.type.key.period",key:"width"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:179,end:208},output:[{type:"raw",value:'width="',position:{start:208,end:215}},{type:"output",position:{start:215,end:231},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:215,end:231}},{type:"Twig.expression.type.key.period",position:{start:215,end:231},key:"width"}]},{type:"raw",value:'"',position:{start:231,end:232}}]},position:{open:{start:179,end:208},close:{start:232,end:243}}},{type:"raw",value:' class="logo_image" src="',position:{start:243,end:268}},{type:"output",position:{start:268,end:282},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:268,end:282}},{type:"Twig.expression.type.key.period",position:{start:268,end:282},key:"src"}]},{type:"raw",value:'" alt="',position:{start:282,end:289}},{type:"output",position:{start:289,end:303},stack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"],position:{start:289,end:303}},{type:"Twig.expression.type.key.period",position:{start:289,end:303},key:"alt"}]},{type:"raw",value:`"/>
</a>
`,position:{start:303,end:303}}],precompiled:!0});const n=e=>e,c=(e={})=>{const i=t.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/layout/wrapper/header.twig",data:[{type:"raw",value:`<script>
    function focusFirstFocusable() {
        const mainElement = document.getElementById('main');
        const focusableElements = mainElement.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
        
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
<\/script>
<a href="#main" @keydown.enter.prevent="focusFirstFocusable" class="opacity-0 focus:opacity-100 fixed left-0 top-0 bg-primary text-white p-1" >Skip to main</a>
<header class="l-header py-4 lg:pt-8" id="header" x-data="`,position:{start:0,end:563}},{type:"output",position:{start:563,end:570},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:563,end:570}}]},{type:"raw",value:" mainMenu: false, dropdownOpen: {sm: null, lg: null} ",position:{start:570,end:623}},{type:"output",position:{start:623,end:630},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:623,end:630}}]},{type:"raw",value:`">
  <div class="container">
    <div class="grid grid-cols-12 gap-6 items-center justify-between">
      <div class="col-span-10 lg:col-span-9">
        `,position:{start:630,end:784}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}],position:{start:784,end:836}},position:{start:784,end:836}},{type:"raw",value:`      </div>
      <div class="col-span-12 lg:col-span-3 lg:block hidden">

        <div class="search-form">
          `,position:{start:837,end:957}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],position:{start:957,end:1019}},position:{start:957,end:1019}},{type:"raw",value:`        </div>


        `,position:{start:1020,end:1045}},{type:"raw",value:`
      </div>
      <div class="col-span-2 lg:hidden flex justify-end items-center">            
        `,position:{start:1445,end:1550}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/hamburger/hamburger.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"toggle"},{type:"Twig.expression.type.string",value:"mainMenu"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1550,end:1655}},position:{start:1550,end:1655}},{type:"raw",value:`      </div>      
    </div>

  </div>
  `,position:{start:1656,end:1698}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/navigation/menu/menu.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:1698,end:1761}},position:{start:1698,end:1761}},{type:"raw",value:`</header>
`,position:{start:1762,end:1762}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{return n(i.render({attributes:new a,...e}))}catch(s){return n("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/layout/wrapper/header.twig: "+s.toString())}};export{c as t};
