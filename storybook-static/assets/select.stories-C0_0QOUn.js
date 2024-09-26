import{t as y}from"./select-DQTxE9qQ.js";import{T as c,t as u}from"./twig-DGqAAA8S.js";import{a as w,D as m}from"./twig-xRDxs_F9.js";import"./input-B6HYPlZz.js";import"./_commonjsHelpers-BosuxZz1.js";w(c);c.cache(!1);u.twig({id:"@components/forms/input/input.twig",data:[{type:"raw",value:'<div class="block ',position:{start:0,end:18}},{type:"output",position:{start:18,end:53},stack:[{type:"Twig.expression.type.variable",value:"input_class",match:["input_class"],position:{start:18,end:53}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:18,end:53},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:18,end:53}},{type:"Twig.expression.type.string",value:"my-4",position:{start:18,end:53}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:18,end:53},expression:!1}]}]},{type:"raw",value:`">
  <label for="`,position:{start:53,end:70}},{type:"output",position:{start:70,end:88},stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"],position:{start:70,end:88}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:70,end:88}}]},{type:"raw",value:'">',position:{start:88,end:90}},{type:"output",position:{start:90,end:101},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:90,end:101}}]},{type:"raw",value:" ",position:{start:101,end:102}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:102,end:129},output:[{type:"raw",value:'<span class="form-required">*</span>',position:{start:129,end:165}}]},position:{open:{start:102,end:129},close:{start:165,end:176}}},{type:"raw",value:`</label>
  `,position:{start:176,end:187}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"field",position:{start:187,end:204},output:[{type:"raw",value:"  ",position:{start:205,end:207}}]},position:{open:{start:187,end:204},close:{start:207,end:221}}},{type:"raw",value:"  ",position:{start:222,end:224}},{type:"raw",value:`
</div>
`,position:{start:337,end:337}}],precompiled:!0});const s=e=>e,h=(e={})=>{const o=u.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/select/filterable.twig",data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/input/input.twig"}],position:{start:0,end:48},output:[{type:"raw",value:"  ",position:{start:49,end:51}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"field",position:{start:51,end:68},output:[{type:"raw",value:`        <div   x-data="{
                  open: false,
                  search: '',
                  selectedString: '',
                  selected: [],
                  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                  get filteredOptions() {
                      const searchLower = this.search.toLowerCase();
                      return this.options.filter(option => 
                          option.toLowerCase().includes(searchLower) && !this.selected.includes(option)
                      );
                  },
                  toggle() {                    
                    this.open = !this.open;
                  },
                  close() {
                      this.open = false;
                  },
                  keydown(event) {
                    console.log(event.key);
                    if (event.key === 'Escape') {
                      this.open = false;
                    }else if (event.key === 'Delete') {
                        this.selected = [];
                        this.selectedString = '';
                    }else if (event.key === 'Backspace') {
                        this.selected.pop();
                        this.selectedString = this.selected.join(', ');
                    }
                  },
                  toggleOption(option) {
                    
                      if (this.selected.includes(option)) {
                          this.selected = this.selected.filter(item => item !== option);
                      } else {
                          this.selected.push(option);
                      }
                      this.selectedString = this.selected.join(', ');
                      this.search = ''; // Clear search input after selecting
                      // focus on first element in dropdown
                      const firstChild = this.$refs.dropdown.children[0];                      
                      if (firstChild) {
                        firstChild.focus();
                      }else{
                        this.$refs.searchInput.focus();
                      }


                  }
              }" class="relative w-64" >
          <button @keydown="keydown($event)"  @click="toggle"      class="border rounded p-2 bg-white cursor-pointer w-full text-left">
              <span x-text="selected.length ? selected.join(', ') : 'Select options'"></span>
          </button>

          <input type="hidden" name="`,position:{start:69,end:2534}},{type:"output",position:{start:2534,end:2544},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:2534,end:2544}}]},{type:"raw",value:`" x-model="selectedString">
          <div @keydown="keydown($event)"  x-show="open" @click.away="close" class="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg">
              <input x-ref="searchInput" type="text" placeholder="Add or select..." x-model="search" class="w-full p-2 border-b" />
              <div class="max-h-48 overflow-y-auto flex flex-col" >
                  <template x-for="option in filteredOptions" :key="option" x-ref="dropdown">
                      <button @click="toggleOption(option)" class="p-2 hover:bg-gray-200 cursor-pointer w-full text-left">
                          <span x-text="option"></span>
                      </button>
                  </template>
              </div>
          </div>
      </div>

    `,position:{start:2544,end:3309}}]},position:{open:{start:51,end:68},close:{start:3309,end:3323}}}]},position:{open:{start:0,end:48},close:{start:3324,end:3338}}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{return s(o.render({attributes:new m,...e}))}catch(g){return s("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/select/filterable.twig: "+g.toString())}},O={title:"Components/Forms/Select Dropdown",argTypes:{filterable:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},b=e=>y(e),f={label:"Select Dropdown",id:"dropdown",name:"dropdown",placeholder:"Select an option",options:[{label:"Dropdown A",value:0},{label:"Dropdown B",value:1},{label:"Dropdown C",value:2}]},t=b.bind({});t.args=f;const v=e=>h(e),n=v.bind({});n.args=Object.assign({...f},{name:"select_filterable",id:"select_filterable"});var i,r,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var l,p,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return filterableTwig(args);
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const C=["Default","Filterable"];export{t as Default,n as Filterable,C as __namedExportsOrder,O as default};
