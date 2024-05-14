---
to: "src/stories/pages/<%= folder ? `${folder.toLowerCase().replaceAll(' ','-')}/` : '' %><%= name.toLowerCase().replaceAll(' ','-') %>/<%= name.toLowerCase().replaceAll(' ','-') %>.stories.jsx"
---
import twig from './<%= name.toLowerCase().replaceAll(' ','-') %>.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/<%= folder ? `${h.capitalize(folder)}/` %><%= h.capitalize(name) %>'

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {  
  return twig({ label, ...args });
};

export const <%= h.capitalize(name).replaceAll(' ','') %> = Template.bind({});
<%= h.capitalize(name).replaceAll(' ','') %>.args = {
  
};


