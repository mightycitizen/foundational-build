import twig from './card-contact.twig';
import { contact } from '../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Teasers/Contact Card',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  //   heading:  {
  //     control: 'text'
  //   },
  //   subheading:  {
  //     control: 'text'
  //   },
  //   description:  {
  //     control: 'text'
  //   },
  //   link: {
  //     text: {
  //       control: 'text'
  //     },
  //     url: {
  //       control: 'text'
  //     }
  //   },
  //   items: [
  //     {
  //       label: {
  //         control: 'text'
  //       },
  //       value: {
  //         control: 'text'
  //       }
  //     },
  //   ]

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
  ...contact
}
export const ContactCard = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
ContactCard.args = defaultArgs;



