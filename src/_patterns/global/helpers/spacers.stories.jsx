import twig from './spacers.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Global/Helpers/Spacers',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    heading: {
      control: 'text'
    },
    subheading: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    intro_class: {
      control: 'text'
    },
    class: {
      control: 'text'
    },
    style: {
      control: {
        type: 'select',
      },
      options: [
        'side',
        ''
      ]
    },
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

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  heading: 'Heading',
};
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
