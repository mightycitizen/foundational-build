import twig from './spacers.twig';
import styles from '../../base/styles.json';

//console.log(styles['spacers-additional']);
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Global/Utilities/Spacers',
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

let spacers = Array.from({length: styles['spacers-range']}, (v, k) => ({
  key: k,
  value: k
}  
));

const spacersAdditional = styles['spacers-additional'];

// append each spacersAdditonal as an object to the spacers array
Object.keys(spacersAdditional).forEach((spacer, index) => {
  spacers.push({
    key: spacer,
    value: spacersAdditional[spacer]
  });
});




const Spacers = Template.bind({});

Spacers.args = {
  additional: styles['spacers-additional'],
  range: styles['spacers-range'],
  spacers
}

export { Spacers };
