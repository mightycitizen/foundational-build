import twig from './countdown.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Informational/Countdown',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  //   label: {
  //     control: 'text'
  //   },
  //   link: {
  //     control: 'text'
  //   },
  //   closable: {
  //     control: 'boolean'
  //   }
  // },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

// date 6 months in the future
const futureDate = new Date();
futureDate.setMonth(futureDate.getMonth() + 1);
futureDate.setHours(futureDate.getDate() + 1);
// get timestamp
const futureTimestamp = futureDate.getTime();
const defaultArgs = {
  date: futureTimestamp,
}
export const Countdown = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Countdown.args = defaultArgs;


// export const Link = Template.bind({});
// // More on args: https://storybook.js.org/docs/html/writing-stories/args
// Link.args = Object.assign({...defaultArgs}, {
//   link: '#'
// });
