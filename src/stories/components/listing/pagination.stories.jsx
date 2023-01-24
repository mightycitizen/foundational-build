import twig from './pagination.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export


export default {
  title: 'Components/Listing/Pagination',
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
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {
  previous: '#',
  next: '#',
  pages: [
    {
      url: '#',
      index: 1
    },
    {
      url: '#',
      index: 2
    },
    {
      url: '#',
      index: 3,
      current: true
    },
    {
      ellipses: true
    },
    {
      url: '#',
      index: 4
    },
    {
      url: '#',
      index: 5
    }
  ]
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
