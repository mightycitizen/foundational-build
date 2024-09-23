import twig from './cta.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Modules/CTA',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {


  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};


const defaultArgs = {
  section_heading: 'Heading',
  section_description: 'Description',
  section_button: {
    text: 'Link',
    url: '#'
  }
}
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Image.args = Object.assign({...defaultArgs}, {section_image: {
  src: 'https://placehold.co/632x400',
  alt: 'Image'}
});


export const BackgroundImage = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
BackgroundImage.args = Object.assign({...defaultArgs}, {section_background: {
    src: 'https://placehold.co/1200x500',
    alt: 'Image'}
});
