import twig from './carousel-testimonial.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export


export default {
  title: 'Components/Containers/Card Group/Testimonial Cards',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    modifier: {
      control: 'text'
    },
    cards: {

      image: {
        src: {
          control: 'text'
        },
        url: {
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

const cards = [...Array(5)].map((_, i) => ( {
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.',
  attribution: {
    label: 'John Doe',
    info: 'CEO, Acme Inc.'
  },
  image: {
    src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
    alt: 'Alt Text'
  }
}));

const defaultArgs = {
  cards: cards
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
