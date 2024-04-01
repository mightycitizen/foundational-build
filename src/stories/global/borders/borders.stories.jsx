import twig from './borders.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Global/Utilities/Borders'

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {  
  return twig({ label, ...args });
};

export const Borders = Template.bind({});
Borders.args = {
  
};


