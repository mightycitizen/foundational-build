import twig from './small-link.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/Small Link',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {
  text: 'Small Link',
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
