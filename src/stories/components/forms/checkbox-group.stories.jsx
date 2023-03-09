import twig from './checkbox-group.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Forms/Checkbox Group',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    required: {
      controls: {
        type: 'boolean'
      }
    }

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const CheckboxGroup = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CheckboxGroup.args ={
  label: "Checkbox",
  id: "checkbox",
  name: "checkbox",

  options: [
    {
      label: "Checkbox A",
      value: 0
    },
    {
      label: "Checkbox B",
      value: 1
    },
    {
      label: "Checkbox C",
      value: 2
    }
  ]
};
