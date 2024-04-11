- [Front end](#front-end)
  - [Hygen](#hygen)
    - [Installation](#installation)
    - [Commands](#commands)
      - [Create a new component](#create-a-new-component)
        - [Optional parameters](#optional-parameters)
      - [Javascript](#javascript)
        - [Create new plugin](#create-new-plugin)
        - [Create new main app javascript function](#create-new-main-app-javascript-function)
  - [Icons](#icons)

# Front end

## Hygen
The following hygen commands require hygen to be installed.
### Installation
Run `npm i -g hygen`

See https://www.npmjs.com/package/hygen for more installation options
### Commands

These commands are run in the project root

#### Create a new component
Creates the twig file in the Storybook components folder in a [type] subfolder
- Run `npm run component` 
  - Can also run `hygen foundation component --name=[NAME] --type=[FOLDER]`
##### Optional parameters
- Include SCSS (Boolean, default is off/0) `--scss=1`: If enabled, creates a `scss/components/_[name].scss` file and corresponding import in the `app.scss` file


#### Javascript

##### Create new plugin
- Creates a class in the app.js with default init and bindEvents functions
- Adds init functions
- Initializes in document ready

- Run `npm run js-plugin` 
  - Can also run `hygen foundation javascript-plugin --name=[NAME]`

##### Create new main app javascript function
- Same as above but as a plugin that can be enabled/disabled in the project's `plugins.json` file
- Run `npm run js` 
  - Can also run `hygen foundation javascript --name=[NAME]`

---
## Icons

Run `npm run icons` 

See [Icomoon page in Teamwork Spaces for more information](https://mightycitizen.teamwork.com/spaces/dev-docs/page/3190-icomoon)
