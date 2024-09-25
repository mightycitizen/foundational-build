import twig from './link.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/Link',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    text: { control: 'text' },
    url: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['', 'h3'],
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
  text: 'Link Text',
  url: '#',

}
export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Link.args = defaultArgs;
