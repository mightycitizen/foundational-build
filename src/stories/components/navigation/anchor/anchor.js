document.addEventListener('alpine:init', () => {
  Alpine.data('stickyAnchor', () => ({
    activeAnchor: null,

    init() {
      this.bindEvents();
    },

    bindEvents() {
      window.addEventListener('scroll', this.throttle(() => {
        if (!document.documentElement.classList.contains('is-scrolling')) this.scroll();
      }, 100));
    },

    scrollToSection(anchor) {
      const section = document.querySelector(anchor);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
        setTimeout(() => {
          this.setActive(anchor);
        }, 550);
      }
    },

    setActive(anchor) {
      this.activeAnchor = anchor;
    },

    scroll() {
      let activeAnchor = null;
      document.querySelectorAll('[data-anchormenu] a').forEach(anchor => {
        const section = document.querySelector(anchor.getAttribute('href'));
        if (section && this.isInViewport(section, 2 / 3)) {
          activeAnchor = anchor.getAttribute('href');
          return;
        }
      });
      this.setActive(activeAnchor);
    },

    isInViewport(element, fraction) {
      const rect = element.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

      const vertInView = (rect.top <= windowHeight * fraction) && ((rect.top + rect.height) >= 0);
      const horInView = (rect.left <= windowWidth * fraction) && ((rect.left + rect.width) >= 0);

      return (vertInView && horInView);
    },

    throttle(fn, wait) {
      let time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
        }
      }
    }
  }));
});