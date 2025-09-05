import twig from './news-detail.twig';
import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';

import { placeholder, sizes } from '../../global/placeholders/images.json';

import {
  accordion,
  tabs,
  breadcrumbs,
  hero_primary,
  hero_secondary,
  card,
  contact,
  testimonial,
  wysiwyg,
  video,
  steps,
  statistic,
  links
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
  breadcrumbs,
  menu,
  utility_menu,
  links_bar_menu,
  anchor_nav,
  local_nav,
  cta_menu,
  header_dropdown,
  logo,
  social,
  address,
  footer_links,
  site_name,
  menu_column,
  page_title: 'Article title / headline goes here - lorem ipsum dolor sit amet',
  page_subheading: 'Subtitle: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros.',
  page_date: 'May 9, 2025',
  page_author: 'Firstname Lastname',
  page_author_url: '#',
  page_image: {
    src: '/images/news-detail-featured.jpg',
    alt: 'group of students'
  },
  page_sidebar: {
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
    publication: {
      text: 'Orange Cape Newsletter',
      url: 'Orange Cape Newsletter'
    },
    authors: [
      {
        thumbnail: {
          src: '/images/author-thumb.jpg',
          alt: 'author'
        },
        name: 'Authorname Lastname',
        url: '#',
        org_name: 'Organization name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros... '
      },
      {
        thumbnail: {
          src: '/images/author-thumb.jpg',
          alt: 'author'
        },
        name: 'Authorname Lastname',
        url: '#',
        org_name: 'Organization name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros... '
      }
    ],
    media_name: 'Firstname Lastname',
    media_email: 'email@mightyu.edu',
    media_phone: '512-555-1234'
  },
  narrow_modules: [
    {
      module_type: 'wysiwyg',
      wysiwyg
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
  modules: [
    {
      module_type: 'cta',
      section_heading: 'Default CTA',
      section_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      section_button: {
        url: '#',
        text: 'Text'
      }
    },
    {
      module_type: 'card-group',
      intro_class: 'text-left',
      section_heading: 'Related Articles',
      section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      cards: [
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        },
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        },
        {
          badges: [
            {
              icon: 'icon-lightning-fill',
              text: 'Announcement'
            },
            {
              icon: 'icon-lightning-fill',
              text: 'Featured'
            }
          ],
          image: {
            src: 'https://placehold.co/430x230',
            alt: 'Alt Text'
          },
          heading: {
            text: '[h3] Heading example lorem ipsum',
            url: '#',
            level: 3
          },
          publish_date: 'PUBLISH DATE HERE',
          summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
        }
      ]
    }
  ]
};
const parameters = {
  layout: 'fullscreen'
};

const Default = Template.bind({});
Default.args = defaultArgs;
Default.parameters = parameters;

export { Default };
