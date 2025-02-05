import twig from './read-more.twig';
import './read-more.css';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/Read More',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    text: { control: 'text' },
    url: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['', 'lg'],
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
  text: 'Read More',
  url: '#',

}
export const ReadMore = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ReadMore.args = defaultArgs;
