import twig from './horizontal-card.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Horizontal Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  return twig({ label, ...args });
};


const defaultArgs = {
  heading: 'Heading',
  summary: 'Summary',
  // image: {
  //   src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
  //   alt: 'Alt Text'
  // },
  link: {
    text: 'Link',
    url: '#'
  },
}
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

const Image = Template.bind({});
Image.args = {
  ...defaultArgs,
  image: {
    src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
    alt: 'Alt Text'
  },
}

export { Default, Image }
