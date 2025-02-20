import twig from './news-detail.twig';
import { menu, social, logo } from '../../global/placeholders/global.json';

import { placeholder, sizes } from '../../global/placeholders/images.json';

import {
  wysiwyg,
  pagination,
  breadcrumbs
} from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/News/News Detail'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  logo,
  breadcrumbs,
  menu,
  social,
  image_sizes: sizes,
  image_placeholder: placeholder,
  wysiwyg,
  pagination
};
const parameters = {
  layout: 'fullscreen'
};

const Default = Template.bind({});
Default.args = defaultArgs;
Default.parameters = parameters;

const FeaturedImage = Template.bind({});
FeaturedImage.args = {
  ...defaultArgs,
  featured_image: {
    src: 'https://placehold.co/430x230',
    alt: ''
  }
};
FeaturedImage.parameters = parameters;

export { Default, FeaturedImage };
