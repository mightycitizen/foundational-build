import twig from './hero.twig';
import { hero, breadcrumbs } from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Containers/Hero',
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {...hero, breadcrumbs};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Image.args = Object.assign({...defaultArgs}, {
  image: {
    src: 'https://via.placeholder.com/1600x900',
    alt: 'Placeholder Image',
  }
});
