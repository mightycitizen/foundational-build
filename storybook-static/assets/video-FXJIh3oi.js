import{T as i,t as a}from"./twig-DGqAAA8S.js";import{a as r,D as o}from"./twig-xRDxs_F9.js";import"./loader-B0317glY.js";r(i);i.cache(!1);a.twig({id:"@components/utils/loader/loader.twig",data:[{type:"raw",value:`<div class="loader inline-block relative w-20 h-20">
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
`,position:{start:0,end:0}}],precompiled:!0});const n=t=>t,y=(t={})=>{const e=a.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/embed/video/video.twig",data:[{type:"raw",value:`<figure class="mb-0" x-data="{
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
`,position:{start:6037,end:6037}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return n(e.render({attributes:new o,...t}))}catch(s){return n("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/embed/video/video.twig: "+s.toString())}};export{y as t};
