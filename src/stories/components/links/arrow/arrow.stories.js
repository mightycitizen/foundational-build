import twig from './arrow.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Links/Arrow'

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {  
  return twig(args);
};

export const Arrow = Template.bind({});
Arrow.args = {
  
};


