import twig from './accordion.twig';
import { accordion } from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Containers/Accordion',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  //   modifier: {
  //     control: 'text'
  //   },
  //   items: [
  //     {
  //       heading: {
  //         control: 'text'
  //       },
  //       content: {
  //         control: 'text'
  //       },
  //       icon: {
  //         control: 'text'
  //       }
  //     }
  //   ]
    // backgroundColor: { control: 'color' },
    // label: { control: 'text' },
    // onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {
  ...accordion,
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Numbers = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args

const numberArgs = Object.assign({...defaultArgs},{
  accordion_id: 'accordion_numbers',
  modifier: 'steps',
});

Numbers.args =  numberArgs;


export const Icons = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args

Icons.args =  Object.assign({...defaultArgs},{
  accordion_id: 'accordion_icons',
  items: [
    {
      heading: 'Heading',
      content: 'Content',
      icon: 'icon-bell'
    },
    {
      heading: 'Heading',
      content: 'Content',
      icon: 'icon-search'
    }
  ]
});
