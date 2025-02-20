import twig from './accordion.twig';
import { accordion } from '../../../global/placeholders/components.json';

export default {
  title: 'Components/Containers/Accordion'
};

const Template = (args) => {
  console.log(twig);
  return twig(args); // Pass the args as context to the template
};

const defaultArgs = {
  ...accordion
};

const Default = Template.bind({});
Default.args = defaultArgs;

const Numbers = Template.bind({});
const numberArgs = {
  ...defaultArgs,
  accordion_id: 'accordion_numbers',
  modifier: 'steps'
};
Numbers.args = numberArgs;

const Icons = Template.bind({});
Icons.args = {
  ...defaultArgs,
  accordion_id: 'accordion_icons',
  items: [
    { heading: 'Heading', content: 'Content', icon: 'icon-bell' },
    { heading: 'Heading', content: 'Content', icon: 'icon-search' }
  ]
};

export { Default, Icons, Numbers };
