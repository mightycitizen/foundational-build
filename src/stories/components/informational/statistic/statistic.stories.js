import twig from './statistic.twig';
import { statistic } from '../../../global/placeholders/components.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Informational/Statistic',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    value: {
      control: 'text'
    },
    link: {
      url: {
        control: 'text'
      },
      target: {
        control: 'text'
      }
    },
    text: {
      control: 'text'
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
  ...statistic
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Link = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Link.args = Object.assign(
  { ...defaultArgs },
  {
    link: '#'
  }
);
