import twig from './events-listing.twig';
import { placeholder, sizes } from '../../global/placeholders/images.json';
import { pagination, breadcrumbs } from '../../global/placeholders/components.json';
import { menu, social, logo } from '../../global/placeholders/global.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Events/Events Listing',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   heading: {
  //     control: 'text'
  //   },
  //   subheading: {
  //     control: 'text'
  //   },
  //   description: {
  //     control: 'text'
  //   },
  //   intro_class: {
  //     control: 'text'
  //   },
  //   class: {
  //     control: 'text'
  //   },
  //   style: {
  //     control: {
  //       type: 'select',
  //     },
  //     options: [
  //       'side',
  //       ''
  //     ]
  //   },
  //   // backgroundColor: { control: 'color' },
  //   // label: { control: 'text' },
  //   // onClick: { action: 'onClick' },
  //   // primary: { control: 'boolean' },
  //   // size: {
  //   //   control: { type: 'select' },
  //   //   options: ['small', 'medium', 'large'],
  //   // },
  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const EventsListing = Template.bind({});

const type = {
  label: 'Event',
  handle: 'events'
};

const items = [
  {
   image: {
      src: placeholder + sizes.landscapeCroppedMedium.width + "x"+ sizes.landscapeCroppedMedium.height,
      alt: "Alt Text"
    },
    type: type,
    heading: "Item Title",
    summary: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    start_date: {
      month_short: "Dec",
      day: 20,
      unformatted: "2020-12-20",
      full: "December 20, 2020",
    },
    categories: [
      {
        url: "#",
        title: "Category"
      }
    ]
  },
  {
    type: type,
    heading: "Item Title",
    summary: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    start_date: {
      month_short: "Dec",
      day: 20,
      unformatted: "2020-12-20",
      full: "December 20, 2020",
    },
    categories: [
      {
        url: "#",
        title: "Category"
      }
    ]
  },
  {
    type: type,
    heading: "Item Title",
    summary: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    start_date: {
      month_short: "Dec",
      day: 20,
      unformatted: "2020-12-20",
      full: "December 20, 2020",
    },
    categories: [
      {
        url: "#",
        title: "Category"
      }
    ]
  },
  {
    type: type,
    heading: "Item Title",
    summary: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    start_date: {
      month_short: "Dec",
      day: 20,
      unformatted: "2020-12-20",
      full: "December 20, 2020",
    },
    categories: [
      {
        url: "#",
        title: "Category"
      }
    ]
  }
]

EventsListing.args = {
  breadcrumbs,
  logo,
  pagination,
  menu,
  social,
  items
}

EventsListing.parameters = {
  layout: 'fullscreen',
}