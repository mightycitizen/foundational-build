import twig from './programs-detail.twig';

import { placeholder, sizes } from '../../global/placeholders/images.json';

import {
  accordion,
  tabs,
  breadcrumbs,
  hero_primary,
  card,
  contact,
  testimonial,
  wysiwyg,
  video,
  steps,
  statistic,
  links
} from '../../global/placeholders/components.json';

import { menu, social, logo, address, utility_menu, cta_menu, header_dropdown, menu_column, anchor_nav, local_nav, links_bar_menu, footer_links, site_name } from '../../global/placeholders/global.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Programs/Program Detail'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  return twig(args);
};

const hero_secondary = {
  image: {
    "src": "/images/hero-secondary.jpg",
    "alt": "University view"
  },
  heading: "Program title goes here lorem ipsum dolor",
  tagline: 'Online MBA Program for Working Adults',
  summary: "[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum. ",
  hero_button: {
    text: "Primary Button",
    url: "#"
  },
  readmore_link: {
    text: "Optional Link",
    url: "#"
  }
}

const Default = Template.bind({});
const defaultArgs = {
  breadcrumbs,
  menu,
  utility_menu,
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
  hero: hero_secondary,
  anchor_items: [
    {
      text: 'Anchor #1',
      anchor: '#section-1'
    },
    {
      text: 'Anchor #2',
      anchor: '#section-2'
    },
    {
      text: 'Anchor #3',
      anchor: '#section-2'
    },
    {
      text: 'Anchor #4',
      anchor: '#section-2'
    },
    {
      text: 'Anchor #5',
      anchor: '#section-2'
    },
    {
      text: 'Anchor #6',
      anchor: '#section-2'
    }
  ],
  anchor_button: {
    text: 'CTA Primary',
    url: '#'
  },
  anchor_button_two: {
    text: 'CTA Primary',
    url: '#'
  },
  modules: [
    {
      module_type: 'glance_list',
      section_class: 'bg-primary-800 text-white',
      heading: 'Program at a Glance',
      items: [
        {
          label: 'College/School',
          content: '<a href="#">College of Arts & Sciences, College of Business</a>'
        },
        {
          label: 'Program Type',
          content: "Undergraduate - Bachelor's"
        },
        {
          label: 'Credential',
          content: "Bachelor of Science (BS) or Bachelor of Arts (BA)"
        },
        {
          label: 'Formats',
          content: "Online, Campus, *format caveat goes here if applied"
        },
        {
          label: 'Campus / Location',
          content: "Campus value goes here"
        },
        {
          label: 'Accelerated',
          content: "Yes"
        },
        {
          label: 'Specializations',
          content: '<a href="#">Specialization name</a>, <a href="#">Specialization name</a>,<br/><a href="#">Specialization name</a>, <a href="#">Specialization name</a>'
        },
        {
          label: 'Est. time to completion',
          content: "4 semesters"
        },
        {
          label: 'Next start date',
          content: "Date goes here"
        },
        {
          label: 'Application Deadline',
          content: "Deadline goes here"
        },
        {
          label: 'Cost per credit',
          content: "$120"
        },
        {
          label: 'Total Credits',
          content: "24"
        },
        {
          label: 'Estimated total cost',
          content: "$2880"
        },
      ]
    },
    {
      module_type: 'split_content',
      section_id: 'section-1',
      intro_class: 'text-left',
      section_heading: '[h2, optional] Modular Component Intro, Label type',
      section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      column_left: '<ul><li>Vestibulum condimentum lectus in convallis feugiat.</li><li>Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam.</li><li>Mauris placerat congue dui sit amet blandit.</li><li>Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.</li></ul><ol><li>Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros.</li><li>Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.</li><li>Aliquam ut arcu et dui feugiat scelerisque eu quis diam.</li></ol>',
      column_right: '<ul><li>Vestibulum condimentum lectus in convallis feugiat.</li><li>Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam.</li><li>Mauris placerat congue dui sit amet blandit.</li><li>Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.</li></ul><ol><li>Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros.</li><li>Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis.</li><li>Aliquam ut arcu et dui feugiat scelerisque eu quis diam.</li></ol>',
    },
    {
      module_type: 'step-list',
      exclude_container: false,
      section_heading: 'Step List',
      section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      section_link: {
        url: '#',
        text: 'Optional Link'
      },
      divider: true,
      steps
    }
  ]
};

const parameters = {
  layout: 'fullscreen'
};

const hero_secondary_background = {
  background_color: true,
  image: {
    src: "/images/hero-secondary.jpg",
    alt: "University view"
  },
  heading: "Hero title goes here",
  summary: "[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum. ",
  hero_button: {
    text: "Primary Button",
    url: "#"
  },
  readmore_link: {
    text: "Optional Link",
    url: "#"
  }
};

// console.log(defaultArgs);
Default.args = defaultArgs;
Default.parameters = parameters;

const Cookies = Template.bind({});
Cookies.args = {
  ...defaultArgs,
  cookie: 'Cookie Lorem ipsum'
};
Cookies.parameters = parameters;

const AnchorMenu = Template.bind({});
AnchorMenu.args = {
  ...defaultArgs,
  anchor_items: [
    {
      text: 'Test',
      anchor: '#section-1'
    },
    {
      text: 'Test 2',
      anchor: '#section-2'
    }
  ]
};

AnchorMenu.parameters = parameters;

export { Default, Cookies, AnchorMenu };


