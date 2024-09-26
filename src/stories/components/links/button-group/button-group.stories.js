import twig from './button-group.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/Button Group',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    buttons: [
      {
        text: { control: 'text' },
        url: { control: 'text' },
        color: {
          control: {
            type: 'select',
          },
          options: ['primary','secondary']
        },
        size: {
          control: { type: 'select' },
          options: ['tiny', 'small', 'medium', 'large'],
        },
      }

    ]

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const buttons = [...Array(3)].map((_, i) => ({
  text: 'Button',
  url: '#',
}));

const defaultArgs = {
  buttons: buttons
};
export const ButtonGroup = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ButtonGroup.args = defaultArgs;
