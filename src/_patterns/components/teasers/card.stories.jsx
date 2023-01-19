import twig from './card.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Teasers/Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
      type: {
        handle: {
          control: 'text'
        }
      },
      date: {
        month_short: {
          control: 'text'
        },
        day: {
          control: 'text'
        }
      },
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
      text: 'Heading',
      url: '#'
    },
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



export const Click = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Click.args = Object.assign({...defaultArgs}, { clickCard: true });


export const Event = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Event.args = Object.assign({...defaultArgs}, {
  type: {
    handle: 'events'
  },
  date: {
    "month_short": "Mon",
    "day": "08"
  }
});
