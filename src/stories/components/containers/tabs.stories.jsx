import twig from './tabs.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export


export default {
  title: 'Components/Containers/Tabs',
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
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const tabs = [...Array(5)].map((_, i) => ( {
  "text": "Tab " + (0 + i),
  "id": "tab-" + i,
  "content": `<h2>Tab Content</h2><p>Lorem ipsum ${i}</p><p><a href='' class='read-more'>Styled Link</a></p>`
}));

const defaultArgs = {
  id: 'example-tabs',
  tabs: tabs
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
