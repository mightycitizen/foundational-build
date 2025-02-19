class Anchor {
  constructor(anchorSelector) {
    this.selector = anchorSelector;
    this.anchorMenu = document.querySelector(anchorSelector);
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    const self = this;
    this.anchorMenu.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', function() {
        const elem = this;
        setTimeout(function() {
          self.setActive(elem);
        }, 550);
      });
    });

    window.addEventListener('scroll', this.throttle(function() {
      if (!document.documentElement.classList.contains('is-scrolling')) self.scroll();
    }, 100));
  }

  setActive(activeAnchor, delay = 0) {
    const self = this;

    let anchorParent;
    const activeElem = document.querySelector('[data-anchormenu-activetext]');
    let placeholder = activeElem.getAttribute('data-anchormenu-activetext');
    if (activeAnchor) {
      placeholder = activeAnchor.textContent;
      anchorParent = activeAnchor.parentElement;
      anchorParent.classList.add('is-active');
    }
    self.anchorMenu.querySelectorAll('li').forEach(li => {
      if (li !== anchorParent) {
        li.classList.remove('is-active');
      }
    });

    activeElem.textContent = placeholder;
  }

  scroll() {
    let activeAnchor;
    this.anchorMenu.querySelectorAll('a').forEach(anchor => {
      const section = document.querySelector(anchor.getAttribute('href'));
      if (section && this.isInViewport(section, 2 / 3)) {
        activeAnchor = anchor;
        return;
      }
    });
    this.setActive(activeAnchor);
  }

  isInViewport(element, fraction) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight * fraction) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth * fraction) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }

  throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
}

// @anchor update
export const initAnchor = () => {
  new Anchor('[data-anchormenu][data-sticky]');
}
