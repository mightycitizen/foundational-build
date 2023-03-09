import twig from './date.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Forms/Date',
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

export const Date = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Date.args = {
  field_id: 'field',
  id: 0,
  value: '',
  label: 'Label',
};
