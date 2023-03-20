import twig from './events-detail.twig';
import { placeholder, sizes } from '../../global/placeholders/images.json';
import { pagination, breadcrumbs, wysiwyg } from '../../global/placeholders/components.json';
import { menu, social, logo } from '../../global/placeholders/global.json';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/Events/Events Detail',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {
  //   heading: {
  //     control: 'text'
  //   },
  //   subheading: {
  //     control: 'text'
  //   },
  //   description: {
  //     control: 'text'
  //   },
  //   intro_class: {
  //     control: 'text'
  //   },
  //   class: {
  //     control: 'text'
  //   },
  //   style: {
  //     control: {
  //       type: 'select',
  //     },
  //     options: [
  //       'side',
  //       ''
  //     ]
  //   },
  //   // backgroundColor: { control: 'color' },
  //   // label: { control: 'text' },
  //   // onClick: { action: 'onClick' },
  //   // primary: { control: 'boolean' },
  //   // size: {
  //   //   control: { type: 'select' },
  //   //   options: ['small', 'medium', 'large'],
  //   // },
  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

const defaultArgs = {
  breadcrumbs,
  logo,
  pagination,
  menu,
  social,
  wysiwyg
}

const parameters = {
  layout: 'fullscreen',
}

const Default = Template.bind({});
Default.args = defaultArgs;
Default.parameters = parameters;

const FeaturedImage = Template.bind({});
FeaturedImage.args = {
  ...defaultArgs,
  featured_image: {
    src: 'https://source.unsplash.com/9wg5jCEPBsw/430x230',
    alt: ''
  }
}

FeaturedImage.parameters = parameters;

export { Default, FeaturedImage }


