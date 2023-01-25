import twig from './lead.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Inline Text/Lead',
  argTypes: {
    class: {
      control: {
        type: 'text'
      }
    },
    text: {
      control: {
        type: 'text'
      }
    },

  }

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  text: 'Lead'
};
//
