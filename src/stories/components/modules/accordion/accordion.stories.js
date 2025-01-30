import twig from './accordion-module.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Accordion',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   // accordion_id: {
  //   //   control: 'text'
  //   // },
  //   // heading: {
  //   //   control: 'text'
  //   // },
  //   // description: {
  //   //   control: 'text'
  //   // },
  //   // items: [
  //   //   {
  //   //     heading: {
  //   //       control: 'text'
  //   //     },
  //   //     content: {
  //   //       control: 'text'
  //   //     },
  //   //     icon: {
  //   //       control: 'text'
  //   //     }
  //   //   }
  //   // ]

  //   // backgroundColor: { control: 'color' },
  //   // label: { control: 'text' },
  //   // onClick: { action: 'onClick' },
  //   // primary: { control: 'boolean' },
  //   // size: {
  //   //   control: { type: 'select' },
  //   //   options: ['small', 'medium', 'large'],
  //   // },
  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};


const defaultArgs = {
  accordion_id: 'accordion_default',
  section_heading: 'Heading',
  section_description: 'Description',
  items: [
    {
      heading: 'Accordion Heading 1',
      content: 'Accordion Content 1'
    },
    {
      heading: 'Accordion Heading 2',
      content: 'Accordion Content 2'
    }
  ]
}
const Accordion = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Accordion.args = defaultArgs;

export { Accordion }
