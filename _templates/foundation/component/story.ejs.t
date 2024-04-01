---
to: src/stories/components/<%= type.toLowerCase() %>/<%= name.toLowerCase() %>/<%= name.toLowerCase() %>.stories.jsx
---
import twig from './<%= name.toLowerCase() %>.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/<%= h.capitalize(type) %>/<%= h.capitalize(name) %>'

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {  
  return twig({ label, ...args });
};

export const <%= h.capitalize(name) %> = Template.bind({});
<%= h.capitalize(name) %>.args = {
  
};


