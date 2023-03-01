import twig from './sidebar.twig';
import hero from '../../global/placeholders/hero.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/General/Sidebar',
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  hero: hero,
}