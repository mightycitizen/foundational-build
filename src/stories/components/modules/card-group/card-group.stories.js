import twig from './card-group-module.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/Cards/Card Group'
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

const cards = [...Array(3)].map((_, i) => ({
  image: {
    src: 'https://placehold.co/430x230',
    alt: 'Alt Text'
  },
  heading: {
    text: '[h3] Heading example lorem ipsum',
    url: '#',
    level: 3
  },
  summary: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
}));

const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  cards: [
    {
      equalize: true,
      image: {
        src: 'https://placehold.co/430x230',
        alt: 'Alt Text'
      },
      heading: {
        text: '[h3] Heading example lorem ipsum',
        url: '#',
        level: 3
      },
      summary: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      link: {
        text: 'Link',
        url: '#'
      }
    },
    {
      equalize: true,
      image: {
        src: 'https://placehold.co/430x230',
        alt: 'Alt Text'
      },
      heading: {
        text: '[h3] Heading example lorem ipsum',
        url: '#',
        level: 3
      },
      summary: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum. Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      link: {
        text: 'Link',
        url: '#'
      }
    },
    {
      equalize: true,
      image: {
        src: 'https://placehold.co/430x230',
        alt: 'Alt Text'
      },
      heading: {
        text: '[h3] Heading example lorem ipsum',
        url: '#',
        level: 3
      },
      summary: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
      link: {
        text: 'Link',
        url: '#'
      }
    }
  ]
};
const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

const Icons = Template.bind({});

const iconCards = cards.map((card, i) =>
  Object.assign(
    { ...card },
    {
      image: null,
      icon: {
        name: 'ph ph-[building]',
        background: 'primary-500',
      },
      link: null
    }
  )
);

Icons.args = {
  ...defaultArgs,
  section_label: {
    icon: 'buildings',
    text: 'Example label goes here'
  },
  section_heading: '[h2, optional] Modular Component Intro, Label type',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  section_link: {
    url: '#',
    text: 'Optional Link'
  },
  divider: true,
  cards: iconCards
};

const News = Template.bind({});

const newsCards = cards.map((card, i) =>
  Object.assign(
    { ...card },
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
      publish_date: 'PUBLISH DATE HERE',
      link: null
    }
  )
);

News.args = {
  ...defaultArgs,
  cards: newsCards
};

const Events = Template.bind({});

const eventCards = cards.map((card, i) =>
  Object.assign(
    { ...card },
    {
      badges: [
        {
          icon: 'icon-lightning-fill',
          text: 'Home Game'
        },
        {
          icon: 'icon-lightning-fill',
          text: 'Tickets Available'
        }
      ],
      image: {
        src: 'https://placehold.co/430x230',
        alt: 'Alt Text'
      },
      type: 'Events',
      heading: {
        text: '[h3] Heading example lorem ipsum',
        url: '#',
        level: 3
      },
      summary: '[150 char max dedicated description] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan.',
      date: 'Saturday, 10.6.2024 | 6pm CT',
      address: 'Address Goes Here, Austin, Texas, USA'
    }
  )
);

Events.args = {
  ...defaultArgs,
  cards: eventCards
};

const Person = Template.bind({});

const personCards = cards.map((card, i) =>
  Object.assign(
    { ...card },
    {
      summary: null,
      jobtitle: 'Job title lorem ipsum',
      contact_email: 'example@mightyu.edu',
      contact_phone: '123-456-7890',
      image_position: 'flush',
      department: {
        text: 'Primary Organization/Department',
        url: '#'
      },
      image: {
        src: "/images/directory-horizontal-card.jpg",
        alt: "Alt Text",
        alignment: 'right'
      },
      link: null
    }
  )
);

Person.args = {
  ...defaultArgs,
  cards: personCards
};

const Deadline = Template.bind({});

const deadlineCards = cards.map((card, i) =>
  Object.assign(
    { ...card },
    {
      no_outline: true,
      deadline_date: 'February 14, 2025',
      summary: '[Text and links allowed] Your final submission is due soon. Don\'t delay! Ensure all forms are complete by midnight. Last chance to meet the deadline.',
      hour: '11:59 PM (CST)',
      image: null,
      link: null
    }
  )
);

Deadline.args = {
  ...defaultArgs,
  section_heading: 'Academic Calendar: Upcoming Dates & Deadlines',
  section_description: '[WYSIWYG - text + links allowed] Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.',
  divider: true,
  cards: deadlineCards
};

const Programs = Template.bind({});

const programCards = cards.map((card, i) =>
  Object.assign(
    {
      heading: {
        text: "Biology (BS / BA)",
        url: "#",
        level: 3
      },
      subheading: 'Program type, Program type',
      specializations: 'Concentration title, Concentration title, Concentration title, Concentration title',
      summary: "*Format caveat here",
      image: {
        src: "https://placehold.co/430x230",
        alt: "Alt Text"
      },
      campus: true,
      online: true
    }
  )
);

Programs.args = {
  ...defaultArgs,
  cards: programCards
};

export { Default, News, Events, Programs, Icons, Person, Deadline };
