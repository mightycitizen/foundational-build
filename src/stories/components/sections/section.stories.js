import twig from './section.twig';
import './section.css';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Sections',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    intro_class: {
      control: 'text'
    },
    section_style: {
      control: {
        type: 'select'
      },
      options: ['side', '']
    },
    section_image: {
      src: {
        control: 'text'
      },
      alt: {
        control: 'text'
      }
    }
  }
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args

const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  section_button: {
    url: '#',
    text: 'Button'
  }
};

Default.args = defaultArgs;
//
const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  ...defaultArgs,
  section_heading: 'Background Primary',
  section_class: 'bg-primary color-white'
};

const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  section_heading: 'Background Secondary',
  section_class: 'bg-secondary-200'
};

export { Default, BackgroundColor, Secondary };
