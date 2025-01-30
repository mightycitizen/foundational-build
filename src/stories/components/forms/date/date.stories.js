import twig from './date-form.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Forms/Date',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    required: {
      control: {
        type: 'boolean'
      }
    }

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

export const Date = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Date.args = {
  id: 'field',
  value: '',
  label: 'Label',
};
