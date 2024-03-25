import twig from './list.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export


export default {
  title: 'Components/Listing/List',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {


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


const list = [...Array(5)].map((_, i) => ( {
  heading: 'Event Title',
  url: '#',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam nisl, vel aliquam nisl nunc vel nisl. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam nisl, vel aliquam nisl nunc vel nisl.',
  image: {
    src: "https://source.unsplash.com/9wg5jCEPBsw/400x360",
    alt: 'Image alt text'
  },
  label: 'Label',
  categories: [
    {
      url: '#',
      title: 'Category'
    }
  ]
}));

const defaultArgs = {
  list
}
export const List = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
List.args = defaultArgs;
