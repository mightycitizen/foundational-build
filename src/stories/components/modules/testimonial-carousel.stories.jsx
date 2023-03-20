import twig from './testimonial-carousel.twig';

import { sizes, placeholder } from '../../global/placeholders/images.json';
import { testimonial } from '../../global/placeholders/components.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Testimonials/Carousel',
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




const cards = [...Array(5)].map((_, i) => Object.assign(testimonial, {
  image: {
    src: placeholder + sizes.square.width + 'x' + sizes.square.height,
    alt: 'Alt Text'
  }}));

const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  cards: cards
}
export const Carousel = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Carousel.args = defaultArgs;
