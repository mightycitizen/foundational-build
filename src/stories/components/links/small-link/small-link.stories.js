import twig from './small-link.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/Small Link',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {}
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  text: 'Small Link',
  url: '#'
};
export const SmallLink = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
SmallLink.args = defaultArgs;
