import twig from './card-carousel-center.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Cards/Card Carousel/Center',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};


const cards = [{
  heading: {
    text: 'Heading',
    url: '#',
    level: 3
  },
  summary: 'Summary Text Long here to show how it wraps lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consectetur ipsum. Nulla nec purus feugiat, molestie ipsum et, consectetur ipsum.',
  image: {
    src: '//via.placeholder.com/430x230',
    alt: 'Alt Text'
  },
  link: {
    text: 'Link',
    url: '#'
  },
}].concat([...Array(5)].map((_, i) => ( {
  heading: {
    text: 'Heading',
    url: '#',
    level: 3
  },
  summary: 'Summary',
  image: {
    src: '//via.placeholder.com/430x230',
    alt: 'Alt Text'
  },
  link: {
    text: 'Link',
    url: '#'
  },
})));

const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  cards: cards
}
export const Center = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Center.args = defaultArgs;

Center.parameters = {
  layout: 'fullscreen'
}
