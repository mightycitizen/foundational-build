import{T as e,t}from"./twig-BXd3Gfe2.js";import{a as i}from"./twig-foVUGi9y.js";import"./header-CThnj0Ho.js";import"./alert-BiGVFIoi.js";import"./footer-D_Dktr3f.js";i(e);e.cache(!1);t.twig({id:"@layout/wrapper/footer.twig",data:[{type:"raw",value:`<footer class="l-footer text-white text-center bg-primary py-8">
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
    `,position:{start:254,end:267}}]},position:{open:{start:172,end:196},close:{start:267,end:278}}},{type:"raw",value:"    ",position:{start:279,end:283}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:283,end:306},output:[{type:"raw",value:'      <a href="',position:{start:307,end:322}},{type:"output",position:{start:322,end:336},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:322,end:336}},{type:"Twig.expression.type.key.period",position:{start:322,end:336},key:"url"}]},{type:"raw",value:'" ',position:{start:336,end:338}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"target"}],position:{start:338,end:358},output:[{type:"raw",value:'target="',position:{start:358,end:366}},{type:"output",position:{start:366,end:383},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:366,end:383}},{type:"Twig.expression.type.key.period",position:{start:366,end:383},key:"target"}]},{type:"raw",value:'"',position:{start:383,end:384}}]},position:{open:{start:338,end:358},close:{start:384,end:395}}},{type:"raw",value:">",position:{start:395,end:396}},{type:"output",position:{start:396,end:406},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:396,end:406}}]},{type:"raw",value:`</a>
    `,position:{start:406,end:415}}]},position:{open:{start:283,end:306},close:{start:415,end:425}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:415,end:425},output:[{type:"raw",value:"      <span>",position:{start:426,end:438}},{type:"output",position:{start:438,end:448},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:438,end:448}}]},{type:"raw",value:`</span>      
    `,position:{start:448,end:466}}]},position:{open:{start:415,end:425},close:{start:466,end:477}}},{type:"raw",value:"    ",position:{start:478,end:482}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable",match:["closable"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:482,end:509},output:[{type:"raw",value:'      <button class="',position:{start:510,end:531}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:531,end:572},output:[{type:"raw",value:"close-button",position:{start:572,end:584}}]},position:{open:{start:531,end:572},close:{start:584,end:594}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:584,end:594},output:[{type:"raw",value:"button",position:{start:594,end:600}}]},position:{open:{start:584,end:594},close:{start:600,end:611}}},{type:"raw",value:`" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">`,position:{start:611,end:699}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:699,end:731},output:[{type:"output",position:{start:731,end:750},stack:[{type:"Twig.expression.type.variable",value:"closable_text",match:["closable_text"],position:{start:731,end:750}}]}]},position:{open:{start:699,end:731},close:{start:750,end:760}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:750,end:760},output:[{type:"raw",value:"&times;",position:{start:760,end:767}}]},position:{open:{start:750,end:760},close:{start:767,end:778}}},{type:"raw",value:`</span>
      </button>
    `,position:{start:778,end:806}}]},position:{open:{start:482,end:509},close:{start:806,end:817}}},{type:"raw",value:`  </div>
</div>
`,position:{start:818,end:818}}],precompiled:!0});t.twig({id:"@layout/wrapper/header.twig",data:[{type:"raw",value:`<script>
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
