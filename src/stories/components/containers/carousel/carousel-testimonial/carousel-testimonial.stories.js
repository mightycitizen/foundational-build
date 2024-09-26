import twig from './carousel-testimonial.twig';

import { sizes, placeholder } from '../../../../global/placeholders/images.json';
import { testimonial } from '../../../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export


export default {
  title: 'Components/Containers/Card Group/Testimonial Cards',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    // modifier: {
    //   control: 'text'
    // },
    // cards: {

    //   image: {
    //     src: {
    //       control: 'text'
    //     },
    //     url: {
    //       control: 'text'
    //     }
    //   },
    //   quote: {
    //     control: 'text'
    //   },
    //   attribution: {
    //     label: {
    //       control: 'text'
    //     },
    //     info: {
    //       control: 'text'
    //     }
    //   }
    // }
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
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const cards = [...Array(5)].map((_, i) => Object.assign(testimonial, {
  image: {
    src: placeholder + sizes.square.width + 'x' + sizes.square.height,
    alt: 'Alt Text'
  }}));


const defaultArgs = {
  cards
}
export const TestimonialCards = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
TestimonialCards.args = defaultArgs;
