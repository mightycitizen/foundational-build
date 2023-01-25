import twig from './modal.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: '@Components/Containers/Modal',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    heading: {
      control: 'text'
    },

    summary: {
      control: 'text'
    },
    subheading: {
      control: 'text'
    },
    button: {
      url: {
        control: 'text'
      },
      text: {
        control: 'text'
      }
    },
    categories: [
      {
        text: {
          control: 'text'
        },
        url: {
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
  heading: 'Hero',
  summary: 'Summary',
  subheading: 'Subheading'
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
