import twig from './card-testimonial.twig';
import { testimonial } from '../../../global/placeholders/components.json';
import { sizes, placeholder } from '../../../global/placeholders/images.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Teasers/Testimonial Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};


export const TestimonialCard = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
TestimonialCard.args = {
  ...Object.assign(testimonial, {
    image: {
      src: placeholder + sizes.square.width + 'x' + sizes.square.height,
      alt: 'Alt Text'
    }}
  )
};


