import twig from './card-group.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export


export default {
  title: 'Components/Containers/Card Group',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    modifier: {
      control: 'text'
    },
    cards: {
      flag: {
        control: 'text'
      },
      image: {
        src: {
          control: 'text'
        },
        url: {
          control: 'text'
        }
      },
      heading: {
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
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const cards = [...Array(5)].map((_, i) => ( {
  heading: {
    text: 'Heading',
    url: '#',
    level: 3
  },
  image: {
    src: 'https://placehold.co/430x230',
    alt: 'Alt Text'
  },
  link: {
    text: 'Link',
    url: '#'
  },
}));

const defaultArgs = {
  cards: cards
}
export const CardGroup = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CardGroup.args = defaultArgs;
