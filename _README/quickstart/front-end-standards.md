- [Front End](#front-end)
  - [SASS](#sass)
  - [JS](#js)
  - [Twig](#twig)
  - [More front end info](#more-front-end-info)
    - [Setup & Development](#setup--development)
    - [Resources](#resources)

# Front End

## SASS
- Hyphens (-) are used in Foundation classes
- Underscore (_) are used to distinguish component pieces that are custom MC
- Use one-word names or camelCase for component names and pieces e.g. `cardSpecial` - hyphens and underscores should only be used for the above usage
- Double-hypen are used for modifiers (--) e.g. `.card--special`
- If styling is based on the existence of a piece of the component, can use `has` e.g. `.has-image`
- If styling is based on a state, use `is` e.g. `.is-active`
-
## JS
- For selectors that are used to initialize javascript, use either `.js-NAME` or `[data-name]` in order to easily tell that it's being used with js
-

## Twig
- Underscore (_) used for spaces in a variable name to differentiate between developer-defined variables and Craft variables e.g. `card_heading`


## More front end info

### Setup & Development
- [Setup](./local-development#front-end-setup)
- [Development](./local-development#development)

### Resources
- [Deeper dive into recommendations for front end development](https://mightycitizen.teamwork.com/spaces/dev-docs/page/5701-front-end)
- [Automation commands](../deep-dive/automation.md#front-end)