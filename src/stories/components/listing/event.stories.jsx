import twig from './event.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export


export default {
  title: 'Components/Listing/Events',
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

const events = [...Array(5)].map((_, i) => ( {
  title: 'Event Title',
  active: true,
  categories: [
    {
      url: '#',
      title: 'Category'
    }
  ],
  groups: [
    {
      url: '#',
      title: 'Category'
    }
  ]
}));

const defaultArgs = {
  events: events
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
