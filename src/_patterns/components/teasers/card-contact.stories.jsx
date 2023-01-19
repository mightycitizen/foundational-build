import twig from './card-contact.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Teasers/Contact Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    heading:  {
      control: 'text'
    },
    subheading:  {
      control: 'text'
    },
    description:  {
      control: 'text'
    },
    link: {
      text: {
        control: 'text'
      },
      url: {
        control: 'text'
      }
    },
    items: [
      {
        label: {
          control: 'text'
        },
        value: {
          control: 'text'
        }
      },
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


  heading: 'Heading',
  subheading: 'Subheading',
  description: 'Description',
  link: {
    text: 'Link',
    url: '#'
  },
  items: [
    {
      label: "Phone",
      value: "(###) ### - ####"
    },
    {
      label: "Email",
      url: "mailto:example@domain.com",
      value: "example@domain.com"
    },
    {
      label: "Location",
      value: "Address here\r\nRoom\r\n"
    }
  ]
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;



