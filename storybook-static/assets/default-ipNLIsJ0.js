import{T as e,t}from"./twig-DGqAAA8S.js";import{a as i}from"./twig-xRDxs_F9.js";import"./header-vPwZuI0e.js";import"./alert-DjUyq6F7.js";import"./footer-CXuePMqK.js";i(e);e.cache(!1);t.twig({id:"@layout/wrapper/footer.twig",data:[{type:"raw",value:`<footer class="l-footer text-white text-center bg-primary py-8">
  <div class="container">
    <div class="grid grid-cols-12 gap-6">

      <div class="col-span-12 md:col-span-5 md:order-2 md:text-left">
        <div class="flex flex-col lg:flex-row flex-justify-center gap-x-3 gap-y-3">
          <div>
            `,position:{start:0,end:316}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/logo/logo.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"logo",match:["logo"]}],position:{start:316,end:368}},position:{start:316,end:368}},{type:"raw",value:`          </div>
          <div>
            <address>
             `,position:{start:369,end:437}},{type:"output",position:{start:437,end:468},stack:[{type:"Twig.expression.type.variable",value:"address",match:["address"],position:{start:437,end:468}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:437,end:468}},{type:"Twig.expression.type.filter",value:"nl2br",match:["| nl2br","nl2br"],position:{start:437,end:468}}]},{type:"raw",value:`
            </address>
          </div>
        </div>

      </div>
      <div class="col-span-12  md:order-1">
        <ul class="menu flex flex-col md:flex-row justify-between gap-x-3 gap-y-4 list-none">
        `,position:{start:468,end:684}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:684,end:706},output:[{type:"raw",value:`          <li>
            <a class="font-bold no-underline hover:underline" href="`,position:{start:707,end:790}},{type:"output",position:{start:790,end:804},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:790,end:804}},{type:"Twig.expression.type.key.period",position:{start:790,end:804},key:"url"}]},{type:"raw",value:'">',position:{start:804,end:806}},{type:"output",position:{start:806,end:821},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:806,end:821}},{type:"Twig.expression.type.key.period",position:{start:806,end:821},key:"text"}]},{type:"raw",value:`</a>
          </li>
        `,position:{start:821,end:850}}]},position:{open:{start:684,end:706},close:{start:850,end:862}}},{type:"raw",value:`      </ul>
      </div>
      <div class="col-span-12 md:col-span-7 md:text-right md:order-3 my-4">
        `,position:{start:863,end:972}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/social-media/social-media.twig"}],position:{start:972,end:1036}},position:{start:972,end:1036}},{type:"raw",value:`      </div>
    </div>

    <ul class="list-none flex gap-4 justify-center mb-2">
      `,position:{start:1037,end:1126}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"footer_links",match:["footer_links"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1126,end:1166},output:[{type:"raw",value:`        <li>          
          `,position:{start:1167,end:1200}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/links/link.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]}],position:{start:1200,end:1253}},position:{start:1200,end:1253}},{type:"raw",value:`        </li>
      `,position:{start:1254,end:1274}}]},position:{open:{start:1126,end:1166},close:{start:1274,end:1286}}},{type:"raw",value:`    </ul>
    <p>Copyright &copy; `,position:{start:1287,end:1321}},{type:"output",position:{start:1321,end:1357},stack:[{type:"Twig.expression.type.variable",value:"copyright_year",match:["copyright_year"],position:{start:1321,end:1357}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:1321,end:1357},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:1321,end:1357}},{type:"Twig.expression.type.number",value:2022,match:["2022",null],position:{start:1321,end:1357}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:1321,end:1357},expression:!1}]}]},{type:"raw",value:" ",position:{start:1357,end:1358}},{type:"output",position:{start:1358,end:1383},stack:[{type:"Twig.expression.type.variable",value:"site_name",match:["site_name"],position:{start:1358,end:1383}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:1358,end:1383}}]},{type:"raw",value:`</p>

  </div>
  `,position:{start:1383,end:1400}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/back-to-top/back-to-top.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"scroll_show"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1400,end:1495}},position:{start:1400,end:1495}},{type:"raw",value:`</footer>
`,position:{start:1496,end:1496}}],precompiled:!0});t.twig({id:"@components/informational/alert/alert.twig",data:[{type:"raw",value:'<div class="alert-bar bg-secondary py-4 ',position:{start:0,end:40}},{type:"output",position:{start:40,end:61},stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"],position:{start:40,end:61}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:40,end:61}}]},{type:"raw",value:'" ',position:{start:61,end:63}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:63,end:90},output:[{type:"raw",value:"data-closable",position:{start:90,end:103}}]},position:{open:{start:63,end:90},close:{start:103,end:114}}},{type:"raw",value:`>
  <div class="container flex gap-3 justify-center">
    `,position:{start:114,end:172}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:172,end:196},output:[{type:"raw",value:'      <span class="alert-bar_label font-bold">',position:{start:197,end:243}},{type:"output",position:{start:243,end:254},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:243,end:254}}]},{type:"raw",value:`:</span>
    `,position:{start:254,end:267}}]},position:{open:{start:172,end:196},close:{start:267,end:278}}},{type:"raw",value:"    ",position:{start:279,end:283}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:283,end:306},output:[{type:"raw",value:'      <a href="',position:{start:307,end:322}},{type:"output",position:{start:322,end:332},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:322,end:332}}]},{type:"raw",value:'">',position:{start:332,end:334}},{type:"output",position:{start:334,end:344},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:334,end:344}}]},{type:"raw",value:`</a>
    `,position:{start:344,end:353}}]},position:{open:{start:283,end:306},close:{start:353,end:363}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:353,end:363},output:[{type:"raw",value:"      <span>",position:{start:364,end:376}},{type:"output",position:{start:376,end:386},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:376,end:386}}]},{type:"raw",value:`</span>      
    `,position:{start:386,end:404}}]},position:{open:{start:353,end:363},close:{start:404,end:415}}},{type:"raw",value:"    ",position:{start:416,end:420}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:420,end:447},output:[{type:"raw",value:'      <button class="',position:{start:448,end:469}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:469,end:510},output:[{type:"raw",value:"close-button",position:{start:510,end:522}}]},position:{open:{start:469,end:510},close:{start:522,end:532}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:522,end:532},output:[{type:"raw",value:"button",position:{start:532,end:538}}]},position:{open:{start:522,end:532},close:{start:538,end:549}}},{type:"raw",value:`" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">`,position:{start:549,end:637}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:637,end:669},output:[{type:"output",position:{start:669,end:688},stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"],position:{start:669,end:688}}]}]},position:{open:{start:637,end:669},close:{start:688,end:698}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:688,end:698},output:[{type:"raw",value:"&times;",position:{start:698,end:705}}]},position:{open:{start:688,end:698},close:{start:705,end:716}}},{type:"raw",value:`</span>
      </button>
    `,position:{start:716,end:744}}]},position:{open:{start:420,end:447},close:{start:744,end:755}}},{type:"raw",value:`  </div>
</div>
`,position:{start:756,end:756}}],precompiled:!0});t.twig({id:"@layout/wrapper/header.twig",data:[{type:"raw",value:`<script>
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
`,position:{start:1762,end:1762}}],precompiled:!0});
