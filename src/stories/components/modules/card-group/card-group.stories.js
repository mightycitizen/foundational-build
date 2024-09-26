import twig from './card-group.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Cards/Card Group',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};


const cards = [...Array(3)].map((_, i) => ( {
  heading: {
    text: 'Heading',
    url: '#',
    level: 3
  },
  image: {
    src: 'https://placehold.co/430x230',
    alt: 'Alt Text'
  },
  link: {
    text: 'Link',
    url: '#'
  },
}));


const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  cards: cards
}
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

const Events = Template.bind({});

const eventCards =  cards.map((card, i) => Object.assign({...card}, {
  date: {
    unformatted: '2020-01-01',
    full: 'January 1, 2020',
    day: 1,
    month_short: 'Jan',
    year: 2020
  },
  type: {
    handle: 'events',
    label: 'Events'
  }
}))

Events.args = {
  ...defaultArgs,
  cards: eventCards
}


export { Default, Events }
