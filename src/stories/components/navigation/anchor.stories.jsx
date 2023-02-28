import twig from './anchor.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation/Anchor',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};


const defaultArgs = {
  // section_heading: 'Heading',
  // section_description: 'Description',
  id: 'anchor_mobile',
  label_trigger: true,
  placeholder: 'Select a section',
  label_mobile: 'Jump to',
  anchor_items: [
    {
      anchor: 'anchor-1',
      text: 'Anchor 1'
    },
    {
      anchor: 'anchor-2',
      text: 'Anchor 2'
    },
  ]
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
