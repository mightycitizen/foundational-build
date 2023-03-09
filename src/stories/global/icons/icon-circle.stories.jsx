import twig from './icon-circle.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Global/Icons/Circle Icon',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   required: {
  //     controls: {
  //       type: 'boolean'
  //     }
  //   }

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const CircleIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
