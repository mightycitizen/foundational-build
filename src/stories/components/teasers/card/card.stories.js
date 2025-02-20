import twig from './card.twig';
import { card } from '../../../global/placeholders/components.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Teasers/General Card'
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  ...card
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = defaultArgs;

export const Click = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Click.args = Object.assign({ ...defaultArgs }, { clickCard: true });

export const Event = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Event.args = Object.assign(
  { ...defaultArgs },
  {
    type: {
      handle: 'events'
    },
    date: {
      month_short: 'Mon',
      day: '08'
    }
  }
);
