import twig from './menu.twig';

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Components/Navigation/Menu',
  // argTypes: {


  // }

};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  menu: [
    {
      text: "Menu Item",
      url: "#",
      children: [
        {
          text: "Item 1",
          url: "#"
        },
        {
          text: "Item 2",
          url: "#",
          children: [
            {
              text: "Item 1",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            }
          ]
        },
        {
          text: "Item 3",
          url: "#"
        },
        {
          text: "Item 4",
          url: "#"
        },
        {
          text: "Item 5",
          url: "#"
        },
        {
          text: "Item 6",
          url: "#"
        }
      ]
    },
    {
      text: "Menu Item",
      url: "#",
      children: [
        {
          text: "Item 1",
          url: "#"
        },
        {
          text: "Item 2",
          url: "#",
          children: [
            {
              text: "Item 1",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            }
          ]
        },
        {
          text: "Item 3",
          url: "#"
        },
        {
          text: "Item 4",
          url: "#"
        },
        {
          text: "Item 5",
          url: "#"
        },
        {
          text: "Item 6",
          url: "#"
        }
      ]
    },
    {
      text: "Menu Item",
      url: "#",
      children: [
        {
          text: "Item 1",
          url: "#"
        },
        {
          text: "Item 2",
          url: "#",
          children: [
            {
              text: "Item 1",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            }
          ]
        },
        {
          text: "Item 3",
          url: "#"
        },
        {
          text: "Item 4",
          url: "#"
        },
        {
          text: "Item 5",
          url: "#"
        },
        {
          text: "Item 6",
          url: "#"
        }
      ]
    },
    {
      text: "Menu Item",
      url: "#",
      children: [
        {
          text: "Item 1",
          url: "#"
        },
        {
          text: "Item 2",
          url: "#",
          children: [
            {
              text: "Item 1",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
          ]
        },
        {
          text: "Item 3",
          url: "#"
        },
        {
          text: "Item 4",
          url: "#"
        },
        {
          text: "Item 5",
          url: "#"
        },
        {
          text: "Item 6",
          url: "#"
        }
      ]
    },
    {
      text: "Menu Item",
      url: "#",
      children: [
        {
          text: "Item 1",
          url: "#"
        },
        {
          text: "Item 2",
          url: "#",
          children: [
            {
              text: "Item 1",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
          ]
        },
        {
          text: "Item 3",
          url: "#"
        },
        {
          text: "Item 4",
          url: "#"
        },
        {
          text: "Item 5",
          url: "#"
        },
        {
          text: "Item 6",
          url: "#"
        }
      ]
    },
    {
      text: "Menu Item",
      url: "#",
      children: [
        {
          text: "Item 1",
          url: "#"
        },
        {
          text: "Item 2",
          url: "#",
          children: [
            {
              text: "Item 1",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
          ]
        },
        {
          text: "Item 3",
          url: "#"
        },
        {
          text: "Item 4",
          url: "#"
        },
        {
          text: "Item 5",
          url: "#"
        },
        {
          text: "Item 6",
          url: "#"
        }
      ]
    },
    {
      text: "Menu Item",
      url: "#",
      children: [
        {
          text: "Item 1",
          url: "#"
        },
        {
          text: "Item 2",
          url: "#",
          children: [
            {
              text: "Item 1",
              url: "#"
            },
            {
              text: "Item 2",
              url: "#"
            },
            {
              text: "Item 3",
              url: "#"
            },
            {
              text: "Item 4",
              url: "#"
            },
          ]
        },
        {
          text: "Item 3",
          url: "#"
        },
        {
          text: "Item 4",
          url: "#"
        },
        {
          text: "Item 5",
          url: "#"
        },
        {
          text: "Item 6",
          url: "#"
        }
      ]
    }
  ]
};
//
