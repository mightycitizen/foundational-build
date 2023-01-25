import twig from './button.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: '@Components/Links/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

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
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
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


export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Large.args = Object.assign({...defaultArgs}, {size: 'large'});

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Small.args = Object.assign({...defaultArgs}, {size: 'small'});

export const Tiny = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Tiny.args = Object.assign({...defaultArgs}, {size: 'tiny'});
