import twig from './large-value.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Inline Text/Large Value'
  // argTypes: {
  //   value: {
  //     control: {
  //       type: 'text'
  //     }
  //   }

  // }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

export const LargeValue = Template.bind({});
LargeValue.args = {
  value: 9
};
//
