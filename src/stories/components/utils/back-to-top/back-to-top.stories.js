import twig from './back-to-top.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Utils/Back To Top',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   label: {
  //     control: 'text'
  //   },
  //   class: {
  //     control: 'text'
  //   },

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

export const BackToTop = Template.bind({});
BackToTop.args = {
  scroll_show: false
}