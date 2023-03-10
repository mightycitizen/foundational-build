import twig from './horizontal-card.twig';
import { card } from '../../global/placeholders/components.json';
import { sizes } from '../../global/placeholders/images.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Cards/Horizontal Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  return twig({ label, ...args });
};


const defaultArgs = {
  ...card,
  image: null
}
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;


const Image = Template.bind({});
const imageDimensions = sizes.landscapeCroppedMedium;
Image.args = {
  ...defaultArgs,
  image: {
    src: `https://source.unsplash.com/9wg5jCEPBsw/${imageDimensions.width}x${imageDimensions.height}`,
    alt: 'Alt Text'
  },
}

export { Default, Image }
