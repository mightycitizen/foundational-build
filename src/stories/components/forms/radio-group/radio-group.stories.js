import twig from './radio-group.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Forms/Radio Group',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    required: {
      control: {
        type: 'boolean'
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

export const RadioGroup = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
RadioGroup.args = {
  label: 'Radio',
  id: 'radio',
  name: 'radio',

  options: [
    {
      label: 'Radio A',
      value: 0
    },
    {
      label: 'Radio B',
      value: 1
    },
    {
      label: 'Radio C',
      value: 2
    }
  ]
};
