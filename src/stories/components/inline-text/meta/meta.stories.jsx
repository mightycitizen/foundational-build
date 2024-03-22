import twig from './meta.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Inline Text/Meta',
  // argTypes: {
  //   date: {
  //     unformatted: {
  //       control: {
  //         type: 'text'
  //       }
  //     },
  //     full: {
  //       control: {
  //         type: 'text'
  //       }
  //     }
  //   },
  //   categories: [
  //     {
  //       title: {
  //         control: {
  //           type: 'text'
  //         }
  //       },
  //       url: {
  //         control: {
  //           type: 'text'
  //         }
  //       }
  //     }
  //   ]

  // }

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const Meta = Template.bind({});
Meta.args = {
  date: {
    unformatted: "2021-08-12",
    full: "August 12, 2021"
  },
  categories: [
    {
      title: "Category A",
      url: "#"
    },
    {
      title: "Category B",
      url: "#"
    }
  ]
};
//
