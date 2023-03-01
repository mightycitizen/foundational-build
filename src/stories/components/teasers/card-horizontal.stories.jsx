import twig from './card-horizontal.twig';
import card from '../../global/placeholders/card.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Teasers/Horizontal Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    // image: {
    //   src: {
    //     control: 'text'
    //   },
    //   url: {
    //     control: 'text'
    //   }
    // },
    // summary: {
    //   control: 'text'
    // },
    // heading: {
    //   level: {
    //     control: 'number'
    //   },
    //   text: {
    //     control: 'text'
    //   },
    //   url: {
    //     control: 'text'
    //   }
    // },
    // link: {
    //   text: {
    //     control: 'text'
    //   },
    //   url: {
    //     control: 'text'
    //   }
    // }

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
  ...card
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;


