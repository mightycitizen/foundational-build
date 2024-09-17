import tippy from 'tippy.js'; // @tippy tooltip
import $ from 'jquery';

export const initTippy = () => {
  var tippies = document.querySelectorAll("[data-tippy-content]");
  tippy(tippies, {
    hideOnClick: false,
    animation: "shift-away",
    arrow: true,
    //trigger: "click",
    interactive: true,
    offset: [0,-5],
    maxWidth: 600,
    placement: "bottom",
    onShow: function(tippyElem){
      var tempDom = $('<div>').append($.parseHTML(tippyElem.reference.dataset.tippyContent))[0];
      tippyElem.setContent(tempDom);
    },
    onShown: function (tippyElem) {
      tippyElem.reference.classList.add("tippy-active");
    },
    onHidden: function (tippyElem) {
      tippyElem.reference.classList.remove("tippy-active");
    },
    onMount: function (tippyElem) {
      var elem = tippyElem;


      if (!elem.reference.classList.contains("tippy-initialized")) {
        $(elem.popper)
          .find(".tippy-tooltip")
          .prepend(
            "<button class='tippy-close'><span class='sr-only'>Close tooltip</span></button>"
          );
        $(elem.popper)
          .find(".tippy-close")
          .on("click", function (event) {
            elem.hide();
            return false;
          });

        elem.reference.addEventListener(
          "touchstart",
          function (event) {
            //console.log(elem);
            if (elem.state.isVisible) {
              elem.setProps({
                trigger: "manual",
              });
              elem.hide();
            } else {
              elem.setProps({
                trigger: "focus mouseenter",
              });
              elem.show();
            }
          },
          false
        );
      }
      elem.reference.classList.add("tippy-initialized");
    },
  });
}



