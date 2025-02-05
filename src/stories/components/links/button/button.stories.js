import twig from './button.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    text: { control: 'text' },
    url: { control: 'text' },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary','secondary','tertiary','alert','warning','success']
    },
    hollow: {
      control: 'boolean'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'lg'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  text: 'Button',
  url: '#',

}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Secondary.args = Object.assign({...defaultArgs}, {color: 'secondary'});


export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Small.args = Object.assign({...defaultArgs}, {size: 'sm'});

export const XSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
XSmall.args = Object.assign({...defaultArgs}, {size: 'xs'});


export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Large.args = Object.assign({...defaultArgs}, {size: 'lg'});