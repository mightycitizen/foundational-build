import twig from './statistics.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Statistics',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    section_style: {
      control: {
        type: 'select',
        options: ['default', 'side']
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


// const cards = [...Array(5)].map((_, i) => ( {
//   heading: {
//     text: 'Heading',
//     url: '#',
//     level: 3
//   },
//   image: {
//     src: 'https://placehold.co/430x230',
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
  statistics: [
    {
      value: 200,
      text: "Lorem ipsum dolor sit amet",
      link: "test"
    },
    {
      value: 200,
      text: "Lorem ipsum dolor sit amet",
      statistic_link: "test"
    },
    {
      value: 200,
      text: "Lorem ipsum dolor sit amet",
      statistic_link: "test"
    },
  ]
}
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

const Sidebar = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Sidebar.args = {
  ...defaultArgs,
  section_style: 'side'
};

export { Default, Sidebar}
