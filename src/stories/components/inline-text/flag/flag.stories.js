import twig from './flag.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Inline Text/Flag',
  argTypes: {
    class: {
      control: {
        type: 'text'
      }
    },
    text: {
      control: {
        type: 'text'
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

export const Flag = Template.bind({});
Flag.args = {
  text: 'Flag'
};
//
