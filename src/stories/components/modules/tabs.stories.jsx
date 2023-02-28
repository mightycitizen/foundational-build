import twig from './tabs.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Tabs',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};


// const cards = [...Array(5)].map((_, i) => ( {
//   heading: {
//     text: 'Heading',
//     url: '#',
//     level: 3
//   },
//   image: {
//     src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
//     alt: 'Alt Text'
//   },
//   link: {
//     text: 'Link',
//     url: '#'
//   },
// }));

const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  tabs_id: 'example-tabs-2',
  tabs: [
    {
      id: 'tab-1',
      text: 'Tab 1',
      content: '<p>Tab 1 content</p>'
    },
    {
      id: 'tab-2',
      text: 'Tab 2',
      content: '<p>Tab 2 content</p>'
    }
  ]
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;
