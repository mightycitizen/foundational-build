
- [Setup](#setup)
  - [<a name="continue"></a>Existing site setup](#existing-site-setup)
    - [DDEV and Back end installation (Composer, Database)](#ddev-and-back-end-installation-composer-database)
    - [Front end](#front-end)
      - [Installation](#installation)
  - [<a name="initial"></a>New site setup](#new-site-setup)
    - [Create project](#create-project)
    - [DDEV and Back end installation (Composer, Craft)](#ddev-and-back-end-installation-composer-craft)
      - [DDEV and Composer](#ddev-and-composer)
      - [Craft setup](#craft-setup)
      - [Craft installation](#craft-installation)
    - [Front end setup](#front-end-setup)
      - [Installation](#installation-1)
    - [Symbolic link template setup](#symbolic-link-template-setup)
- [Development](#development)

---
# Setup

- [Is this site already set up?](#continue)
- [Are you setting up this site for the first time?](#initial)

___
## <a name="continue"></a>Existing site setup
### DDEV and Back end installation (Composer, Database)
Run in terminal, assumes you have Docker desktop installed
- Run `ddev config` - default values should be fine
- Run `ddev start` - this will spin up the DDEV site
- Run `ddev exec composer install`
- Run `ddev sequelace` and import database
- Run `ddev launch` to see site

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

### DDEV and Back end installation (Composer, Craft)

#### DDEV and Composer
- If running ddev:
  - Run `ddev config`
    - Defaults should work, but may want to update `Project name` (This is what determines the DDEV url e.g. (https://[PROJECT_NAME].ddev.site:8443)
  - Run `ddev start`
  - Can launch site with `ddev launch` (will get an error since Craft isn't setup but you'll be able to see the site url)
- Install composer dependencies: `composer install` (or maybe `ddev exec composer install` if you're running ddev)

#### Craft setup
Can go through these steps while composer is installing. It would probably be beneficial to open this project in your IDE at this point.
- Create `.env` file from template (`cp .env.example .env`) and update with database credentials
  - if ddev, the example has the values already set up (`db` for host, username, password, port)
  - Update `DEFAULT_SITE_URL` based off the project name field from the previous DDEV and Composer section (https://[PROJECT_NAME].ddev.site:8443)
  - Generate security key
    - If ddev is started, run `php ./craft setup/security-key` (or `ddev exec php ./craft setup/security-key` for DDEV)
    - Or generate a security key manually
      - Through generate secure password functionality via LastPass
      - Or through other methods recommended here: https://craftcms.com/docs/4.x/installation.html#step-3-set-a-security-key
  - Add security key to SECURITY_KEY section in `.env`

#### Craft installation
These steps will need composer installation to be completed
  - Go to `/admin` to trigger installation screen
    - can run `ddev launch` and then append `/admin` to get the correct url
  - Setup admin account using `developers@mightycitizen.com` email and generate secure password
  - Add these credentials to LastPass
  - Installation will take a few minutes as it creates the configuration from the project config files


### Front end setup
Can go through these steps while composer is installing or before composer installation:

#### Installation
- Go to `storybook` folder
- Run `nvm use` to ensure proper node version
- If you are using existing foundational build front end files, replace the `src` directory from the files you want to use
- Ready to develop? Go to the [development section](#development)


### Symbolic link template setup
Can go through these steps while composer is installing or before composer installation:
- Symbolic links should already be created - if not, create symbolic links for storybook dist and template files by running the following from the project root
```
ln -sf ../storybook/dist ./web/dist
ln -sf ../storybook/src/stories/layout ./templates/@layout
ln -sf ../storybook/src/stories/components ./templates/@components
```

# Development

- Run `npm start` from the `storybook` folder to develop storybook (this runs just storybook e.g. if you just want to work on front end development)
  - If you'd like to run browsersync through the Craft site, run `npm start` from the project root
- Go to the [front end standards](../quickstart/front-end-standards.md) documentation for clarity on naming, file/folder, conventions
