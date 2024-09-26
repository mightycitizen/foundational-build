import twig from './testimonial.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Testimonials',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};




const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  image: {
    src: 'https://placehold.co/430x230',
    alt: 'Alt Text'
  },
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Nullam auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.',
  attribution: {
    label: 'John Doe',
    info: 'CEO, Company'
  }
}
export const Testimonial = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Testimonial.args = defaultArgs;
