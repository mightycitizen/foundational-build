import twig from './checkbox.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Forms/Checkbox',
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

export const Checkbox = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Checkbox.args = {
  field_id: 'field',
  id: 0,
  value: '',
  label: 'Label'
};
