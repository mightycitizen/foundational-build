import twig from './video.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Embed/Video',
  argTypes: {


  }

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {
  trigger: "click",
  video_type: "youtube",
  video_id: "gJ6APKIjFQY",
  image: {
    src: "//via.placeholder.com/900x500",
    alt: ""
  }
};
export const Default = Template.bind({});
Default.args = defaultArgs;
//

export const Scroll = Template.bind({});

Scroll.args = Object.assign({...defaultArgs}, {
  trigger: "scroll"
});

export const Vimeo = Template.bind({});

Vimeo.args = Object.assign({...defaultArgs}, {
  video_type: 'vimeo',
  video_id: '559422073'
});
