import twig from './default.twig';
import hero from '../../global/placeholders/hero.json';
import contact from '../../global/placeholders/contact.json';
import images from '../../global/placeholders/images.json';
import video from '../../global/placeholders/video.json';
import accordion from '../../global/placeholders/accordion.json';
import imageSizes from '../../global/placeholders/image-sizes.json';
import card from '../../global/placeholders/card.json';
import testimonial from '../../global/placeholders/testimonial.json';
import menu from '../../global/placeholders/menu.json';
import social from '../../global/placeholders/social-media.json';
//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Pages/General/Default',

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  return twig({ label, ...args });
};

const Default = Template.bind({});
const defaultArgs = {
  hero: hero,
  contact: contact,
  image_placeholder: images.default,
  video: video,
  accordion: accordion,
  menu: menu,
  image_sizes: imageSizes,
  card: card,
  testimonial: testimonial,
  social: social
};
Default.args = defaultArgs

const Cookies = Template.bind({});
Cookies.args = {
  ...defaultArgs,
  cookie: 'Cookie Lorem ipsum'
}

const AnchorMenu = Template.bind({});
AnchorMenu.args = {
  ...defaultArgs,
  anchor_items: [
    {
      text: "Test",
      anchor: "#section-1"
    },
    {
      text: "Test 2",
      anchor: "#section-2"
    }
  ]
}

export { Default, Cookies, AnchorMenu }