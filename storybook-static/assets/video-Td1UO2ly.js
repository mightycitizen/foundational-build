import{T as a,t as e}from"./twig-DGqAAA8S.js";import{a as n,D as p}from"./twig-xRDxs_F9.js";import"./section-CtV-pKbR.js";import"./video-FXJIh3oi.js";n(a);a.cache(!1);e.twig({id:"@components/embed/video/video.twig",data:[{type:"raw",value:`<figure class="mb-0" x-data="{
	    loading: true,
	    playing: false,
	    player: null,
	    firstPlay: true,
	    videoId: '`,position:{start:0,end:128}},{type:"output",position:{start:128,end:142},stack:[{type:"Twig.expression.type.variable",value:"video_id",match:["video_id"],position:{start:128,end:142}}]},{type:"raw",value:`',
	    trigger: '`,position:{start:142,end:160}},{type:"output",position:{start:160,end:192},stack:[{type:"Twig.expression.type.variable",value:"trigger",match:["trigger"],position:{start:160,end:192}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:160,end:192},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:160,end:192}},{type:"Twig.expression.type.string",value:"click",position:{start:160,end:192}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:160,end:192},expression:!1}]}]},{type:"raw",value:`',
	    videoType: '`,position:{start:192,end:212}},{type:"output",position:{start:212,end:249},stack:[{type:"Twig.expression.type.variable",value:"video_type",match:["video_type"],position:{start:212,end:249}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:212,end:249},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:212,end:249}},{type:"Twig.expression.type.string",value:"youtube",position:{start:212,end:249}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:212,end:249},expression:!1}]}]},{type:"raw",value:`',
	
	    init() {
	      if (window.videoPlayers === undefined) {
	        window.videoPlayers = [];
	      }
	      if (window.videoPlayers.includes(this.videoId)) {
	        return;
	      }
	      window.videoPlayers.push(this.videoId);
	
	      this.videoType === 'youtube' ? this.loadYouTubeAPI() : this.setupVimeoPlayer();
	    },
	
	    loadYouTubeAPI() {
	      // load script instead
	      const tag = document.createElement('script');
	      tag.src = 'https://www.youtube.com/iframe_api';
	      document.body.appendChild(tag);
	
	      if (!window.YT) {
	        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
	      } else {
	        this.onYouTubeIframeAPIReady();
	      }
	    },
	
	    onYouTubeIframeAPIReady() {
	      this.player = new YT.Player(this.$refs.player, {
	        videoId: this.videoId,
	        playerVars: {
	          'enablejsapi': 1,
	          'fs': 1,
	          'playlist': this.videoId,
	          'loop': 1,
	          'modestbranding': 1,
	          'autoplay': 0,
	          'controls': 1,
	          'showInfo': 0,
	          'mute': 1,
	          'rel': 0
	        },
	        events: {
	          'onReady': this.onPlayerReady.bind(this),
	          'onStateChange': this.onPlayerStateChange.bind(this)
	        }
	      });
	    },
	
	    setupVimeoPlayer() {
	      const tag = document.createElement('script');
	      tag.src = 'https://player.vimeo.com/api/player.js';
	      tag.onload = this.onVimeoAPIReady.bind(this);
	      document.body.appendChild(tag);
	    },
	
	    onVimeoAPIReady() {
	      const vid = this.$refs.player;
	      const playerId = 'vimeo_' + this.videoId;
	      vid.setAttribute('id', playerId);
	
	      const player = new Vimeo.Player(playerId, { id: this.videoId });
	
	      player.ready().then(() => {
	        this.loading = false;
	        this.setVideoSize();
	        this.player = {
	          play: () => player.play(),
	          pause: () => player.pause()
	        };
	        const iframe = player.element;
	        // set tabindex to -1
	        iframe.setAttribute('tabindex', '-1');
	        `,position:{start:249,end:2367}},{type:"raw",value:`
	
	
	      }).catch(error => {
	        console.error('Error with Vimeo player:', error);
	      });
	
	      player.on('play', () => { this.playing = true; });
	      player.on('pause', () => { this.playing = false; });
	    },
	
	    handleClick() {
	      if (!this.player) return;
	
	      if (this.playing) {
	        this.player.pause();
	      } else {
	        this.player.play();
	      }
	
	      this.playing = !this.playing; // Toggle playing state
	    },
	
	    onPlayerReady() {
	      this.loading = false;
	      this.setVideoSize();
	      if (this.firstPlay && this.trigger !== 'background') {
	        setTimeout(() => { this.player.pauseVideo(); }, 5);
	      }
	
	      this.firstPlay = false;
	      const iframe = this.player.g;
	      // set tabindex to -1
	      iframe.setAttribute('tabindex', '-1');
	
	      this.player.play = () => { this.player.playVideo(); };
	      this.player.pause = () => { this.player.pauseVideo(); };
	    },
	
	    onPlayerStateChange(event) {
	      clearTimeout(this.timeout);
            if (this.firstPlay){
              if (this.trigger !== 'background'){
                setTimeout(() => {
                  this.player.pauseVideo();
                }, 5);
              }

            }            
            switch (event.data){
              case 2:
                this.timeout = setTimeout(() => {
                  switch (event.data){
                    case 2:
                      
                      this.playing = false;                      
                      break;
                    case 1:
                      this.playing = true;                      
                      break;
                  }
                }, 300);
                break;
              case 1:
                if (!this.firstPlay) this.player.unMute();
                this.playing = true;
                break;
            }


            this.firstPlay = false;
	    },
	
	    setVideoSize() {
	      const width = this.$el.clientWidth;
	      const height = this.$el.clientHeight;
	      if (this.videoType === 'youtube') {
	        this.player.setSize(width, (width / 16) * 9);
	      } else {
	        const iframe = this.$refs.player.querySelector('iframe');
	        iframe.style.width = \`\${width}px\`;
	        iframe.style.height = \`\${height}px\`;
	      }
	    }
	  }" x-init="init">
	`,position:{start:2427,end:4793}},{type:"logic",token:{type:"Twig.logic.type.set",key:"overlay_class",expression:[{type:"Twig.expression.type.string",value:"bg-opacity-30 bg-black"}],position:{start:4793,end:4843}},position:{start:4793,end:4843}},{type:"raw",value:'	<div class="video_wrapper relative" data-video-trigger="',position:{start:4844,end:4901}},{type:"output",position:{start:4901,end:4933},stack:[{type:"Twig.expression.type.variable",value:"trigger",match:["trigger"],position:{start:4901,end:4933}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:4901,end:4933},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:4901,end:4933}},{type:"Twig.expression.type.string",value:"click",position:{start:4901,end:4933}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:4901,end:4933},expression:!1}]}]},{type:"raw",value:'" data-video-type="',position:{start:4933,end:4952}},{type:"output",position:{start:4952,end:4968},stack:[{type:"Twig.expression.type.variable",value:"video_type",match:["video_type"],position:{start:4952,end:4968}}]},{type:"raw",value:`">
		<button @click="handleClick" x-show="!loading && !playing" class="absolute left-0 top-0 z-20 w-full h-full cursor-pointer `,position:{start:4968,end:5095}},{type:"output",position:{start:5095,end:5114},stack:[{type:"Twig.expression.type.variable",value:"overlay_class",match:["overlay_class"],position:{start:5095,end:5114}}]},{type:"raw",value:`">
			<span class="icon-play text-white text-8xl"></span>
			<span class="sr-only">Pause/Play Video</span>
		</button>
		<div class="video_loader absolute z-20 flex justify-center items-center h-full w-full `,position:{start:5114,end:5321}},{type:"output",position:{start:5321,end:5340},stack:[{type:"Twig.expression.type.variable",value:"overlay_class",match:["overlay_class"],position:{start:5321,end:5340}}]},{type:"raw",value:`" x-show="loading">
			`,position:{start:5340,end:5363}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/loader/loader.twig"}],position:{start:5363,end:5415}},position:{start:5363,end:5415}},{type:"raw",value:`		</div>
		`,position:{start:5416,end:5427}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]}],position:{start:5427,end:5441},output:[{type:"raw",value:`			<div class="video_image_wrapper image-size--landscapeCropped z-10" x-show="!playing">
				<img src="`,position:{start:5442,end:5545}},{type:"output",position:{start:5545,end:5560},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:5545,end:5560}},{type:"Twig.expression.type.key.period",position:{start:5545,end:5560},key:"src"}]},{type:"raw",value:'" alt="',position:{start:5560,end:5567}},{type:"output",position:{start:5567,end:5582},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:5567,end:5582}},{type:"Twig.expression.type.key.period",position:{start:5567,end:5582},key:"alt"}]},{type:"raw",value:`" class="w-full aspect-video object-cover" loading="lazy">
			</div>
		`,position:{start:5582,end:5653}}]},position:{open:{start:5427,end:5441},close:{start:5653,end:5664}}},{type:"raw",value:`
		<div class="video_container " :class="playing ? 'z-10' : 'z-0 opacity-0 absolute top-0 left-0'">
			<div class="video_player_wrapper">
				<div class="video_player aspect-video" x-ref="player" x-trap="playing" data-video-id="`,position:{start:5665,end:5893}},{type:"output",position:{start:5893,end:5907},stack:[{type:"Twig.expression.type.variable",value:"video_id",match:["video_id"],position:{start:5893,end:5907}}]},{type:"raw",value:`"></div>
			</div>
		</div>
	</div>
	`,position:{start:5907,end:5944}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"]}],position:{start:5944,end:5960},output:[{type:"raw",value:'		<figcaption class="video_caption">',position:{start:5961,end:5997}},{type:"output",position:{start:5997,end:6010},stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"],position:{start:5997,end:6010}}]},{type:"raw",value:`</figcaption>
	`,position:{start:6010,end:6025}}]},position:{open:{start:5944,end:5960},close:{start:6025,end:6036}}},{type:"raw",value:`</figure>
`,position:{start:6037,end:6037}}],precompiled:!0});e.twig({id:"@components/sections/section.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:0,end:26}},position:{start:0,end:26}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:27,end:72},output:[{type:"raw",value:"  ",position:{start:73,end:75}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-lg"}],position:{start:75,end:119}},position:{start:75,end:119}}]},position:{open:{start:27,end:72},close:{start:120,end:168}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:120,end:168},output:[{type:"raw",value:`  
  `,position:{start:168,end:173}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-xl"}],position:{start:173,end:217}},position:{start:173,end:217}}]},position:{open:{start:120,end:168},close:{start:218,end:229}}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:230,end:265},output:[{type:"raw",value:`  
  `,position:{start:265,end:270}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"background_style",match:["background_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"gradient"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:270,end:319},output:[{type:"raw",value:"    ",position:{start:320,end:324}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_color",expression:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-200"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:324,end:378}},position:{start:324,end:378}},{type:"raw",value:`    
    `,position:{start:378,end:387}},{type:"logic",token:{type:"Twig.logic.type.set",key:"section_class",expression:[{type:"Twig.expression.type.string",value:"bg-gradient-to-b lg:bg-gradient-to-r from-"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" to-white"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:387,end:490}},position:{start:387,end:490}},{type:"raw",value:"  ",position:{start:491,end:493}}]},position:{open:{start:270,end:319},close:{start:493,end:503}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:493,end:503},output:[{type:"raw",value:"    ",position:{start:504,end:508}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_color",expression:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"primary"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-100"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-200"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:508,end:622}},position:{start:508,end:622}},{type:"raw",value:"    ",position:{start:623,end:627}},{type:"logic",token:{type:"Twig.logic.type.set",key:"section_class",expression:[{type:"Twig.expression.type.string",value:"bg-"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:627,end:677}},position:{start:627,end:677}},{type:"raw",value:"  ",position:{start:678,end:680}}]},position:{open:{start:493,end:503},close:{start:680,end:691}}}]},position:{open:{start:230,end:265},close:{start:692,end:703}}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:704,end:743},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"intro_class",expression:[{type:"Twig.expression.type.string",value:"text-center"}],position:{start:743,end:780}},position:{start:743,end:780}}]},position:{open:{start:704,end:743},close:{start:780,end:791}}},{type:"raw",value:`
`,position:{start:792,end:793}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"intro",position:{start:793,end:808},output:[{type:"raw",value:"  ",position:{start:809,end:811}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:811,end:845},output:[{type:"raw",value:'      <div class="section_intro ',position:{start:846,end:878}},{type:"output",position:{start:878,end:895},stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"],position:{start:878,end:895}}]},{type:"raw",value:` ">
        <div class="grid `,position:{start:895,end:924}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:924,end:956},output:[{type:"raw",value:"grid-cols-12",position:{start:956,end:968}}]},position:{open:{start:924,end:956},close:{start:968,end:979}}},{type:"raw",value:` gap-y-6 gap-x-10 items-center justify-center">
          `,position:{start:979,end:1037}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1037,end:1069},output:[{type:"raw",value:`            <div class="col-span-12 md:col-span-5 lg:col-span-6" >
              <div class="image-size--landscapeCroppedMedium">
                <img loading="lazy" src="`,position:{start:1070,end:1241}},{type:"output",position:{start:1241,end:1264},stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"],position:{start:1241,end:1264}},{type:"Twig.expression.type.key.period",position:{start:1241,end:1264},key:"src"}]},{type:"raw",value:'" alt="',position:{start:1264,end:1271}},{type:"output",position:{start:1271,end:1294},stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"],position:{start:1271,end:1294}},{type:"Twig.expression.type.key.period",position:{start:1271,end:1294},key:"alt"}]},{type:"raw",value:`" class="w-full">
              </div>
            </div>
          `,position:{start:1294,end:1362}}]},position:{open:{start:1037,end:1069},close:{start:1362,end:1373}}},{type:"raw",value:'          <div class="col-span-12 ',position:{start:1374,end:1408}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1408,end:1440},output:[{type:"raw",value:"md:col-span-7 lg:col-span-6",position:{start:1440,end:1467}}]},position:{open:{start:1408,end:1440},close:{start:1467,end:1512}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:1467,end:1512},output:[{type:"raw",value:"md:col-span-8",position:{start:1512,end:1525}}]},position:{open:{start:1467,end:1512},close:{start:1525,end:1536}}},{type:"raw",value:`">
            <h2 class="section_heading">`,position:{start:1536,end:1579}},{type:"output",position:{start:1579,end:1600},stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"],position:{start:1579,end:1600}}]},{type:"raw",value:`</h2>
            `,position:{start:1600,end:1618}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1618,end:1655},output:[{type:"raw",value:'              <h3 class="section_subheading">',position:{start:1656,end:1701}},{type:"output",position:{start:1701,end:1725},stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"],position:{start:1701,end:1725}}]},{type:"raw",value:`</h3>
            `,position:{start:1725,end:1743}}]},position:{open:{start:1618,end:1655},close:{start:1743,end:1754}}},{type:"raw",value:"            ",position:{start:1755,end:1767}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1767,end:1805},output:[{type:"raw",value:'              <p class="lead ',position:{start:1806,end:1835}},{type:"output",position:{start:1835,end:1886},stack:[{type:"Twig.expression.type.variable",value:"section_description_size",match:["section_description_size"],position:{start:1835,end:1886}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:1835,end:1886},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:1835,end:1886}},{type:"Twig.expression.type.string",value:"text-xl",position:{start:1835,end:1886}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:1835,end:1886},expression:!1}]}]},{type:"raw",value:'">',position:{start:1886,end:1888}},{type:"output",position:{start:1888,end:1913},stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"],position:{start:1888,end:1913}}]},{type:"raw",value:`</p>
            `,position:{start:1913,end:1930}}]},position:{open:{start:1767,end:1805},close:{start:1930,end:1941}}},{type:"raw",value:"            ",position:{start:1942,end:1954}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1954,end:1987},output:[{type:"raw",value:"              ",position:{start:1988,end:2002}},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/links/button/button.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"color"},{type:"Twig.expression.type.string",value:"secondary"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:2002,end:2141}},position:{start:2002,end:2141}},{type:"raw",value:"            ",position:{start:2142,end:2154}}]},position:{open:{start:1954,end:1987},close:{start:2154,end:2165}}},{type:"raw",value:`          </div>
        </div>
      </div>
    `,position:{start:2166,end:2215}}]},position:{open:{start:811,end:845},close:{start:2215,end:2226}}}]},position:{open:{start:793,end:808},close:{start:2227,end:2239}}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"content",position:{start:2240,end:2257},output:[{type:"raw",value:"  ",position:{start:2258,end:2260}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type._function",fn:"block",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"section_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["| trim","trim"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:2260,end:2312},output:[{type:"raw",value:`    <div class="section_content" >
      `,position:{start:2313,end:2354}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:2354,end:2381},output:[{type:"raw",value:"      ",position:{start:2382,end:2388}}]},position:{open:{start:2354,end:2381},close:{start:2388,end:2402}}},{type:"raw",value:`    </div>
  `,position:{start:2403,end:2416}}]},position:{open:{start:2260,end:2312},close:{start:2416,end:2427}}}]},position:{open:{start:2240,end:2257},close:{start:2428,end:2440}}},{type:"raw",value:"<section ",position:{start:2441,end:2450}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2450,end:2479},output:[{type:"raw",value:'id="',position:{start:2479,end:2483}},{type:"output",position:{start:2483,end:2499},stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"],position:{start:2483,end:2499}}]},{type:"raw",value:'"',position:{start:2499,end:2500}}]},position:{open:{start:2450,end:2479},close:{start:2500,end:2511}}},{type:"raw",value:` 
  class="relative section 
  `,position:{start:2511,end:2542}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:2542,end:2579},output:[{type:"raw",value:`    py-5 lg:py-10
  `,position:{start:2580,end:2600}}]},position:{open:{start:2542,end:2579},close:{start:2600,end:2610}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:2600,end:2610},output:[{type:"raw",value:`    py-10 lg:py-16
  `,position:{start:2611,end:2632}}]},position:{open:{start:2600,end:2610},close:{start:2632,end:2643}}},{type:"raw",value:`  

  `,position:{start:2643,end:2649}},{type:"output",position:{start:2649,end:2678},stack:[{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"],position:{start:2649,end:2678}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:2649,end:2678}}]},{type:"raw",value:` 
  transition-opacity duration-1000 ease-in-out  
  `,position:{start:2678,end:2731}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"collapse",match:["collapse"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2731,end:2758},output:[{type:"raw",value:" section--collapse",position:{start:2758,end:2776}}]},position:{open:{start:2731,end:2758},close:{start:2776,end:2787}}},{type:"raw",value:`" 
    :class="show ? 'opacity-100' : 'opacity-0'"    
    x-data="`,position:{start:2787,end:2854}},{type:"output",position:{start:2854,end:2861},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:2854,end:2861}}]},{type:"raw",value:" show: false ",position:{start:2861,end:2874}},{type:"output",position:{start:2874,end:2881},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:2874,end:2881}}]},{type:"raw",value:`"  x-intersect="show = true" >
  `,position:{start:2881,end:2914}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2914,end:2951},output:[{type:"raw",value:`    <div class="position-unset">
      `,position:{start:2952,end:2991}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2991,end:3028},output:[{type:"raw",value:'<img class=" section_background absolute object-cover left-0 h-full w-full top-0 opacity-30" src="',position:{start:3028,end:3126}},{type:"output",position:{start:3126,end:3154},stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"],position:{start:3126,end:3154}},{type:"Twig.expression.type.key.period",position:{start:3126,end:3154},key:"src"}]},{type:"raw",value:'" alt="" loading="lazy"/>',position:{start:3154,end:3179}}]},position:{open:{start:2991,end:3028},close:{start:3179,end:3190}}},{type:"raw",value:"      ",position:{start:3191,end:3197}},{type:"raw",value:`
    </div>
  `,position:{start:3345,end:3359}}]},position:{open:{start:2914,end:2951},close:{start:3359,end:3370}}},{type:"raw",value:'  <div class="',position:{start:3371,end:3385}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"exclude_container",match:["exclude_container"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3385,end:3421},output:[{type:"raw",value:"max-w-full lg:px-0",position:{start:3421,end:3439}}]},position:{open:{start:3385,end:3421},close:{start:3439,end:3450}}},{type:"raw",value:" ",position:{start:3450,end:3451}},{type:"output",position:{start:3451,end:3478},stack:[{type:"Twig.expression.type.variable",value:"width_class",match:["width_class"],position:{start:3451,end:3478}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3451,end:3478}}]},{type:"raw",value:" container ",position:{start:3478,end:3489}},{type:"output",position:{start:3489,end:3515},stack:[{type:"Twig.expression.type.variable",value:"grid_class",match:["grid_class"],position:{start:3489,end:3515}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3489,end:3515}}]},{type:"raw",value:` relative z-10" >
    `,position:{start:3515,end:3537}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"side"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:3537,end:3599},output:[{type:"raw",value:`      <div class="grid grid-cols-12 items-center justify-center gap-y-8">
        <div class="col-span-12 lg:col-span-8">
          `,position:{start:3600,end:3732}},{type:"output",position:{start:3732,end:3743},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:3732,end:3743}}]},{type:"raw",value:`
        </div>
        <div class="col-span-12 lg:col-span-4">
          `,position:{start:3743,end:3817}},{type:"output",position:{start:3817,end:3830},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:3817,end:3830}}]},{type:"raw",value:`
        </div>
      </div>
    `,position:{start:3830,end:3863}}]},position:{open:{start:3537,end:3599},close:{start:3863,end:3873}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:3863,end:3873},output:[{type:"raw",value:`      <div class="flex flex-col gap-y-8">
        `,position:{start:3874,end:3924}},{type:"output",position:{start:3924,end:3935},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:3924,end:3935}}]},{type:"raw",value:`
        `,position:{start:3935,end:3944}},{type:"output",position:{start:3944,end:3957},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:3944,end:3957}}]},{type:"raw",value:`
      </div>


    `,position:{start:3957,end:3977}}]},position:{open:{start:3863,end:3873},close:{start:3977,end:3988}}},{type:"raw",value:`
  </div>
</section>
`,position:{start:3989,end:3989}}],precompiled:!0});const s=t=>t,c=(t={})=>{const i=e.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/video/video.twig",data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_heading"},{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:0,end:158},output:[{type:"raw",value:"  ",position:{start:159,end:161}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:161,end:188},output:[{type:"raw",value:"      ",position:{start:189,end:195}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/embed/video/video.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"trigger"},{type:"Twig.expression.type.string",value:"click"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:195,end:284}},position:{start:195,end:284}},{type:"raw",value:"  ",position:{start:285,end:287}}]},position:{open:{start:161,end:188},close:{start:287,end:301}}}]},position:{open:{start:0,end:158},close:{start:302,end:316}}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{return s(i.render({attributes:new p,...t}))}catch(o){return s("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/video/video.twig: "+o.toString())}};export{c as t};
