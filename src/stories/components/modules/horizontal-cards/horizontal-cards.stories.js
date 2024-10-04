import twig from './horizontal-cards.twig';
import { card } from '../../../global/placeholders/components.json';
import { sizes } from '../../../global/placeholders/images.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Cards/Horizontal Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  return twig(args);
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
    src: `https://placehold.co/${imageDimensions.width}x${imageDimensions.height}`,
    alt: 'Alt Text'
  },
}

const ImageFlush = Template.bind({});
ImageFlush.args = {
  ...Image.args,
  image_position: 'flush'
}



export { Default, Image, ImageFlush }
