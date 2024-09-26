---
to: "src/stories/pages/<%= folder ? `${folder.toLowerCase().replaceAll(' ','-')}/` : '' %><%= name.toLowerCase().replaceAll(' ','-') %>/<%= name.toLowerCase().replaceAll(' ','-') %>.stories.jsx"
---
import twig from './<%= name.toLowerCase().replaceAll(' ','-') %>.twig';
import { menu, header_button, social, logo, footer_links, footer_menu, site_name, address } from '../../../global/placeholders/global.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/<%= folder ? `${h.capitalize(folder)}/` : '' %><%= h.capitalize(name) %>'

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {  
  return twig(args);
};


const defaultArgs = {
  menu,
  header_button,
  social,
  logo,
  footer_links,
  footer_menu,
  site_name,
  address
}

export const <%= h.capitalize(name).replaceAll(' ','') %> = Template.bind({});
<%= h.capitalize(name).replaceAll(' ','') %>.args = {
  ...defaultArgs
};


