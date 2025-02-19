// import '@splidejs/splide/css';
// import '@splidejs/splide/css/skyblue';
// import '@splidejs/splide/css/sea-green';
import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';
import breakpoints from '../../../stories/global/base/breakpoints.json';
// remove px from breakpoints
const breakpointsArray = Object.keys(breakpoints).map(key => parseInt(key.replace('px', '')));

export const initSplide = () => {
  document.querySelectorAll('.js-splide:not(.splide-initialized)').forEach(slider => {

    

    // console.log(slider);
    let sliderOptions = {
      type: 'loop',
      perMove: 1,
      lazyLoad: 'nearby',
      autoplay: true,
      pauseOnHover: false,
      pagination: true,
      arrows: true,
      speed: 500,
      breakpoints: {
        [breakpoints.medium]: {
          destroy: true,
        },
      },
    };
    if (slider.dataset.type === 'cards') {
      sliderOptions = {
          type: 'loop',
          perPage: 3,
          gap: '1rem',
          padding: '0.5rem',
          lazyLoad: 'nearby',
          breakpoints: {
              [breakpointsArray.lg]: { perPage: 1 }
          }
      };
    } else if (slider.dataset.type === 'center') {
      sliderOptions = {
            autoWidth: true,
            type: 'loop',
            updateOnMove: true,
            autoHeight: true,            
            perPage: 5,
            focus: 'center',            
            padding: '5rem',
            gap: '2rem',
            breakpoints: {
              [breakpointsArray.lg]: {                                                       
                  
                }
            }
        };
    }
    // console.log(breakpoints.lg)
    const splide = new Splide(slider, sliderOptions);

    var heightMap = {};
    const slides = slider.querySelectorAll(".splide__slide");
    slides.forEach(function (e) {
      e.style.maxHeight = 0;
    });

    const resizeActiveSlide = (index) => {
        if (index < 0) return;
        if (!heightMap[index]){
          setTimeout(() => {            
            heightMap[index] = slides[index].scrollHeight;
            resizeActiveSlide(index);
          }, 100);
          return;
        }
        // console.log(heightMap[index]);
        splide.root.querySelector(".splide__list").style.height = heightMap[index] + "px";
    }
     
    const resetHeightMap = () => {
      heightMap = {};
    }

    // on window resize, run throttled resizeHeightMap

    const throttle = (func, limit) => {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    }
    const resizeHeightMap = throttle(() => {
      resetHeightMap();
      resizeActiveSlide(splide.index);
    }, 100);

    window.addEventListener('resize', resizeHeightMap);


    
    splide.on("active", function (e) {
      resizeActiveSlide(e.slideIndex);
    });


    splide.mount();
    attachSplideEvents(splide, slider);
    slider.classList.add('splide-initialized');
  });
};

const attachSplideEvents = (splide, slider) => {
  splide.on('mounted move', () => updatePagination(slider, splide));
  // if slider is center add 
  attachPauseButton(slider, splide);
};

const updatePagination = (slider, splide) => {
  const dots = slider.querySelector('.splide__pagination');
  if (dots) {
    slider.classList.toggle('has-pagers', splide.length > 1);
  }
};

const attachPauseButton = (slider, splide) => {
  const pauseButton = document.querySelector(`[data-splide-pause="${slider.id}"]`);
  if (pauseButton) {
    pauseButton.addEventListener('click', () => {
      if (splide.options.autoplay) {
        splide.options = { ...splide.options, autoplay: false };
        pauseButton.classList.add('is-paused');
      } else {
        splide.options = { ...splide.options, autoplay: true };
        pauseButton.classList.remove('is-paused');
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', initSplide);
