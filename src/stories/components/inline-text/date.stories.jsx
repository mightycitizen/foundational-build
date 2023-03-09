import twig from './date.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Inline Text/Date',
  // argTypes: {
  //   day: {
  //     control: {
  //       type: 'text'
  //     }
  //   },
  //   month_short: {
  //     control: {
  //       type: 'text'
  //     }
  //   },
  //   unformatted: {
  //     control: {
  //       type: 'text'
  //     }
  //   }

  // }

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const Date = Template.bind({});
Date.args = {
  day: '1',
  month_short: 'Jan',
  unformatted: '2020-01-01'
};
//
