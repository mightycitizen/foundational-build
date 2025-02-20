import twig from './select.twig';
import filterableTwig from './filterable.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Forms/Select Dropdown',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    filterable: {
      control: {
        type: 'boolean'
      }
    },
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

const defaultArgs = {
  label: 'Select Dropdown',
  id: 'dropdown',
  name: 'dropdown',
  placeholder: 'Select an option',
  options: [
    {
      label: 'Dropdown A',
      value: 0
    },
    {
      label: 'Dropdown B',
      value: 1
    },
    {
      label: 'Dropdown C',
      value: 2
    }
  ]
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
const filterableTemplate = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return filterableTwig(args);
};

export const Filterable = filterableTemplate.bind({});
Filterable.args = Object.assign(
  { ...defaultArgs },
  {
    name: 'select_filterable',
    id: 'select_filterable'
  }
);

//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
