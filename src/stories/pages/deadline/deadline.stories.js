import twig from './deadline.twig';
import { placeholder, sizes } from '../../global/placeholders/images.json';
import {
  pagination,
  breadcrumbs,
  wysiwyg,
  card,
  accordion
} from '../../global/placeholders/components.json';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Deadline'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  breadcrumbs,
  logo,
  menu,
  utility_menu,
  links_bar_menu,
  anchor_nav,
  local_nav,
  cta_menu,
  header_dropdown,
  social,
  address,
  footer_links,
  site_name,
  menu_column,
  wysiwyg,
  page_type: 'Dates & Deadlines',
  page_title: 'Undergraduate Admissions - Fall 2026 Application Deadline',
  page_subheading: '[Subheading] For first-time freshmen and transfer students',
  page_date: 'May 9, 2025',
  page_time: '11:59 PM (CST)',
  page_location_url: '#',
  below_hero: 'deadline',
  page_status: {
    upcoming: true,
    approaching: true,
    expired_past: true
  },
  page_view_more_info_url: '#',
  page_image: {
    src: '/images/news-detail-featured.jpg',
    alt: 'group of students'
  },
  page_sidebar: {
    register_button: {
      text: 'Register now',
      url: '#'
    },
    event_website: {
      text: 'Event Website',
      url: '#'
    },
    date: 'March 4, 2025',
    time: '4:30am - 5:30pm CT',
    location: 'Address line 1 goes here</br>Address line 2 goes here</br>Address line 3 goes here',
    directions_url: {
      text: 'Get Directions',
      url: '#',
    },
    topics: [
      {
        text: 'Alumni',
        url: '#'
      },
      {
        text: 'Topic name here',
        url: '#'
      },
      {
        text: 'Topic name here',
        url: '#'
      },
      {
        text: 'Topic name here',
        url: '#'
      },
    ],
    who_its_for: [
      {
        text: 'Current Students',
        url: '#'
      },
      {
        text: 'Alumni',
        url: '#'
      }
    ],
    event_series: {
      text: 'Portuguese Literature Speaker Series',
      url: '#'
    },
    media_name: 'Firstname Lastname',
    media_email: 'email@mightyu.edu',
    media_phone: '512-555-1234'
  },
  modules: [
    {
      module_type: 'short-list-horizontal',
      section_label: {
        icon: {
          name: 'ph ph-[buildings]',
        },
        text: 'Example label goes here'
      },
      section_heading: 'Related Events',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      cards: [
        {
          no_outline: true,
          var: 'short',
          image: {
            src: 'https://placehold.co/120x120',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: null,
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          var: 'short',
          image: {
            src: 'https://placehold.co/120x120',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: null,
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        },
        {
          no_outline: true,
          var: 'short',
          image: {
            src: 'https://placehold.co/120x120',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          summary: null,
          date: 'Saturday, 10.6.2024 | 6pm CT',
          address: 'Address Goes Here, Austin, Texas, USA'
        }
      ]
    }
  ],
  narrow_modules: [
    {
      module_type: 'wysiwyg',
      wysiwyg: '<h2>WYSIWYG Event content - h2 Heading - Lorem ipsum dolor sit amet</h2><h3>h3 Heading - Lorem ipsum dolor sit amet</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.</p><h4>h4 Heading - Lorem ipsum dolor sit amet</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.</p><p><a class="read-more" href="#">Link Text</a></p><p><a class="button" href="#">Button</a></p><p><a class="button secondary" href="#">Button</a></p>'
    },
    {
      module_type: 'accordion',
      exclude_container: true,
      section_id: 'section-2',
      ...accordion
    }
  ],
  sidebar_modules: [
    {
      module_type: 'card',
      ...card
    }
  ],

};

const parameters = {
  layout: 'fullscreen'
};

const Default = Template.bind({});
Default.args = defaultArgs;
Default.parameters = parameters;

export { Default};
