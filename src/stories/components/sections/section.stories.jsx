import twig from './section.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Sections/Section',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    intro_class: {
      control: 'text'
    },
    section_style: {
      control: {
        type: 'select',
      },
      options: [
        'side',
        ''
      ]
    },
    section_image: {
      src: {
        control: 'text'
      },
      alt: {
        control: 'text'
      }

    }

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
  section_heading: 'Heading',
  section_description: 'Description',
  section_button: {
    url: '#',
    text: 'Button'

  }

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
