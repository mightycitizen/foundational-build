import twig from './card-testimonial.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Teasers/Testimonial Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    image: {
      src: {
        control: 'text'
      },
      alt: {
        control: 'text'
      }
    },
    quote: {
      control: 'text'
    },
    attribution: {
      label: {
        control: 'text'
      },
      info: {
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

const defaultArgs = {



  quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  image: {
    src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
    alt: 'Alt Text'
  },
  attribution: {
    label: 'Firstname Lastname',
    info: 'Title'
  }
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;


