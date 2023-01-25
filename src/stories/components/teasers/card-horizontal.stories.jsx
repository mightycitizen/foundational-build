import twig from './card-horizontal.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: '@Components/Teasers/Horizontal Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    image: {
      src: {
        control: 'text'
      },
      url: {
        control: 'text'
      }
    },
    summary: {
      control: 'text'
    },
    heading: {
      level: {
        control: 'number'
      },
      text: {
        control: 'text'
      },
      url: {
        control: 'text'
      }
    },
    link: {
      text: {
        control: 'text'
      },
      url: {
        control: 'text'
      }
    }

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


  heading: {
    level: 3,
    text: 'Heading',
    url: '#'
  },
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  image: {
    src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
    alt: 'Alt Text'
  },
  link: {
    text: 'Link',
    url: '#'
  }
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;


