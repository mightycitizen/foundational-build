import twig from './accordion.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: '@Components/Modules/Accordion',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    accordion_id: {
      control: 'text'
    },
    heading: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    items: [
      {
        heading: {
          control: 'text'
        },
        content: {
          control: 'text'
        },
        icon: {
          control: 'text'
        }
      }
    ]

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
  accordion_id: 'accordion_default',
  heading: 'Heading',
  items: [
    {
      heading: 'Heading',
      content: 'Content'
    }
  ]
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
