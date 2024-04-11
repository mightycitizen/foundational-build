
- [Setup](#setup)
  - [Existing site setup](#existing-site-setup)
    - [Front end](#front-end)
      - [Installation](#installation)
  - [New site setup](#new-site-setup)
    - [Create project](#create-project)
    - [Front end setup](#front-end-setup)
      - [Installation](#installation-1)
- [Development](#development)

---
# Setup

- [Is this site already set up?](#continue)
- [Are you setting up this site for the first time?](#initial)

___
## <a name="continue"></a>Existing site setup

### Front end

#### Installation
- Go to `storybook` folder
- Run `nvm use` to ensure proper node version
- Run `npm install`
- Ready to develop? Go to the [development section](#development)


___

## <a name="initial"></a>New site setup

### Create project
- Clone this repo: `git clone git@github.com:mightycitizen/foundational-build.git [PROJECT_FOLDER]`
- Go into project folder `cd [PROJECT_FOLDER]` and run `git submodule init && git submodule update` to pull from the foundational build repo
- Remove `.git` folder to detach from this repo using `rm -rf .git`
- Remove `.gitmodules` to detach foundational build submodule


### Front end setup
Can go through these steps while composer is installing or before composer installation:

#### Installation
- In project root
- Run `nvm use` to ensure proper node version
- If you are using existing foundational build front end files, replace the `src` directory from the files you want to use
- Ready to develop? Go to the [development section](#development)

# Development

- Run `npm start` to develop storybook (this runs just storybook e.g. if you just want to work on front end development)
- Go to the [front end standards](../quickstart/front-end-standards.md) documentation for clarity on naming, file/folder, conventions
