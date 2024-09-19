import twig from './templates.twig';

import { menu, social, logo, address, site_name, footer_links, utility_links, footer_menu } from '../../global/placeholders/global.json';

import { accordion, tabs, breadcrumbs,  hero, card, contact, testimonial, wysiwyg, video, steps, statistic, links } from '../../global/placeholders/components.json';

import homeStories, { Home } from '../home/home.stories';
import newsListingStories, { NewsListing } from '../news/news-listing.stories';
import newsDetailStories, { Default } from '../news/news-detail.stories';

export default {
  title: 'Pages/Templates',

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Templates = ({ label, ...args }) => {
// You can either use a function to create DOM elements or use a plain html string!
// return `<div>${label}</div>`;
  return twig({ label, ...args });
};




const getUrl = (template) => {
    console.log(template);
    const title = template.replace(/([A-Z])/g, " $1").trim();
    const urlParam = title.replace(/\s+/g, '-').replace(/([A-Za-z])([0-9])/g,'$1-$2').toLowerCase().replace(/\//g,'');

    const url = urlParam;
    return url;
}



//const templateUrl = '';
const templates = [
    {
        title: 'Home',        
        url: '/iframe.html?args=&id=pages-home--home&viewMode=story',
    },
    {
      title: 'General', 
      url: '/iframe.html?args=&id=pages-general--default&viewMode=story',

    },
    {
        title: 'News Listing',
        url: '/iframe.html?args=&id=pages-news-news-listing--news-listing&viewMode=story',
    },
    {
        title: 'News Detail',
        url: '/iframe.html?args=&id=pages-news-news-detail--default&viewMode=story',
    },
    {
      title: 'Events Listing',
      url: '/iframe.html?args=&id=pages-events-events-listing--events-listing&viewMode=story',
    },
    {
      title: 'Events Detail',
      url: '/iframe.html?args=&id=pages-events-events-detail--default&viewMode=story',
    }
];

// map(template => {
//     console.log(template.story);
//     const prefix = getUrl(template.parentStory.title);
//     const url = '/iframe.html?args=&id=' + prefix + '--' + getUrl(template.story.name);
//     return {
//         ...template,
//         url
//     }
// });
// console.log(templates);

const defaultArgs = {
  templates,
  hero,
  breadcrumbs,
  menu,
  logo,
  social,
  address,
  site_name,
  footer_links,
  utility_links,
  footer_menu,
}
// export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Templates.args = defaultArgs;
Templates.parameters = {
  layout: 'fullscreen'
}

export { Templates }

