import twig from './testimonial-carousel.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Cards/Testimonial/Carousel',
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


const cards = [...Array(5)].map((_, i) => ( {
  image: {
    src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
    alt: 'Alt Text'
  },
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
  attribution: {
    label: 'John Doe',
    info: 'CEO, Company'
  }

}));

const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  cards: cards
}
export const Carousel = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Carousel.args = defaultArgs;
