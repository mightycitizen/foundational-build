import twig from './home.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Home',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {

    label: {
      control: 'text'
    },
    link: {
      control: 'text'
    },
    closable: {
      control: 'boolean'
    }
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Home = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  label: "Alert"
}
// export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Home.args = defaultArgs;

export { Home }

