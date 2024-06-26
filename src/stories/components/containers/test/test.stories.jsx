import twig from './test.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Containers/Test'

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {  
  return twig({ label, ...args });
};

export const Test = Template.bind({});
Test.args = {
  
};


