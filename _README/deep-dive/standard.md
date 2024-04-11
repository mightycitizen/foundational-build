- [Front End/Storybook](#front-endstorybook)
  - [Storybook Helpful links](#storybook-helpful-links)
- [Environments/Deployment Processes](#environmentsdeployment-processes)
  - [Repo + Deployment](#repo--deployment)
    - [Git workflow](#git-workflow)
    - [Deployment](#deployment)

# Front End/Storybook
See [front end standards page](../quickstart/front-end-standards.md)

## Storybook Helpful links
- Foundational Build in the Teamwork Spaces documentation: https://mightycitizen.teamwork.com/spaces/dev-docs/page/3955-standard-build-overview
- Storybook Documentation: https://storybook.js.org/docs


# Environments/Deployment Processes

## Repo + Deployment

Buddy.Works is used for code repository and deployment, which uses standard Git workflow/syntax. You will need access to Buddy.works in order to make changes.
### Git workflow
- Run a `git pull` to ensure you have latest code.
- Use a `feature/` or `bugfix/` branch created off of `main`
- Make changes to the new branch you just created
- Push this new branch to the repository to ensure we have code changes saved.
- Merge new branch with dev when ready for review, then deploy to dev environment (if relevant, run any post-deployment processes per [Craft back end changes section](#deploying-a-plugin-installationupgrade-andor-craft-upgrade))
- When changes have been reviewed and confirmed that they can be pushed live, merge new branch with `main` and deploy to production (again, if relevant, run any post-deployment processes).

### Deployment
In Buddy.works, the `dev` branch + environment is set to automatically deploy, while `main` branch + `production` environment is set up to manually deploy.

