
import sidebarTwig from './content-with-sidebar.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Layout/Structure/Content',
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
const NarrowTwigTemplate = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return narrowTwig({ label, ...args });
};

const NarrowerTwigTemplate = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return narrowerTwig({ label, ...args });
};

const SidebarTwigTemplate = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return sidebarTwig({ label, ...args });
};

const defaultArgs = {
  wrapper_class: 'grid-container',
  content: '<div class="pl-placeholder">Content</div>'
}

const Sidebar = SidebarTwigTemplate.bind({});

Sidebar.args = {
  ...defaultArgs,

  sidebar: '<div class="pl-placeholder">Sidebar</div>'
};

export { Sidebar };
