import twig from './hamburger.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Utils/Hamburger',
  toggle: {
    control: {
      type: 'text'
    }
  }
};

const defaultArgs = {
  is_demo: true,
  toggle: 'open'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const Hamburger = Template.bind({});

Hamburger.args = defaultArgs;

export { Hamburger };
