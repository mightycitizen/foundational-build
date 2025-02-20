import twig from './card-horizontal.twig';
import { card } from '../../../global/placeholders/components.json';
import { sizes } from '../../../global/placeholders/images.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Teasers/Horizontal Card'
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const imageDimensions = sizes.landscapeCroppedMedium;
const defaultArgs = {
  ...card,
  image: {
    src: `https://placehold.co/${imageDimensions.width}x${imageDimensions.height}`,
    alt: 'Alt Text'
  }
};
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

const NoImage = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
NoImage.args = {
  ...defaultArgs,
  image: null
};

const FlushImage = Template.bind({});

FlushImage.args = {
  ...defaultArgs,
  image_position: 'flush'
};
export { Default, NoImage, FlushImage };
