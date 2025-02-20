import twig from './step-list.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export

export default {
  title: 'Components/Listing/Steps',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    // label: { control: 'text' },
    // onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  steps: [
    {
      heading: 'Test',
      description: 'Test',
      link: {
        text: 'Test',
        url: '#'
      }
    },
    {
      heading: 'Test',
      description: 'Test',
      link: {
        text: 'Test',
        url: '#'
      }
    },
    {
      heading: 'Test',
      description: 'Test',
      link: {
        text: 'Test',
        url: '#'
      }
    }
  ]
};
export const StepList = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
StepList.args = defaultArgs;
