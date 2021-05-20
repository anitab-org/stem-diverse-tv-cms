[![project chat](https://img.shields.io/badge/zulip-join_chat-brightgreen.svg)](https://anitab-org.zulipchat.com/#narrow/stream/225705-STEM-diverse-tv)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/anitab-org/stem-diverse-tv-cms)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)
[![GitHub forks](https://img.shields.io/github/forks/anitab-org/stem-diverse-tv-cms)](https://github.com/anitab-org/stem-diverse-tv-cms/network/members)
[![GitHub stars](https://img.shields.io/github/stars/anitab-org/stem-diverse-tv-cms)](https://github.com/anitab-org/stem-diverse-tv-cms/stargazers)
![HTML](https://img.shields.io/badge/made%20with-HTML-red)
![CSS](https://img.shields.io/badge/made%20with-CSS-blue)
![TypeScript](https://img.shields.io/badge/made%20with-TypeScript-yellow)
![React](https://img.shields.io/badge/made%20with-React-lightgrey)
# About STEM Diverse TV Content Management System

Content Management System (CMS) for managing content of STEM Diverse TV backend. This repository is for frontend part for STEM Diverse TV [backend](https://github.com/anitab-org/stem-diverse-tv), so we could manage add/remove and edit content of our platform apps.

At the moment all content is coming from Youtube, however we are planning to extend that with other sources in future.

**Table of Contents**

- [About STEM Diverse TV Project](#about-stem-diverse-tv-project)
- [Technical Stack](#technical-stack)
- [Setup and run](#setup-and-run)
- [Contributing](#contributing)
- [Branches](#branches)
- [Contact](#contact)
- [License](#license)

## About STEM Diverse TV Project

STEM Diverse TV is a project which gather and provide inspiring, motivating, informative, educational and supportive videos about diversity in STEM. This is the frontend of the project.

## Technical Stack

- React JS.

## Setup and run

To setup the project locally follow the instructions:

#### Fork

_**Note**_: _This is only needed if you want to contribute to the project._

If you want to contribute to the project you will have to create your own copy of the project on GitHub. You can do this by clicking the Fork button that can be found on the top right corner of the [landing page](https://github.com/anitab-org/stem-diverse-tv) of the repository.

#### Clone

_**Note**_: _For this you need to install git on your machine. You can download the git tool from [here](https://git-scm.com/downloads)._

- If you have forked the project, run the following command -

  `git clone https://github.com/YOUR_GITHUB_USER_NAME/stem-diverse-tv-cms`

  where `YOUR_GITHUB_USER_NAME` is your GitHub handle.

- If you haven't forked the project, run the following command -

  `git clone https://github.com/anitab-org/stem-diverse-tv-cms`

- Now after you cloned the repository, get into the stem-diverse-tv-cms directory by -

  `cd stem-diverse-tv-cms`

#### Remote

_**Note**_: _This is only needed if you want to contribute to the project._

When a repository is cloned, it has a default remote named `origin` that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote named upstream. For this project it can be done by running the following command -

`git remote add upstream https://github.com/anitab-org/stem-diverse-tv-cms`

You can check that the previous command worked by running `git remote -v`. You should see the following output:

```
$ git remote -v
origin  https://github.com/YOUR_GITHUB_USER_NAME/stem-diverse-tv-cms (fetch)
origin  https://github.com/YOUR_GITHUB_USER_NAME/stem-diverse-tv-cms (push)
upstream        https://github.com/anitab-org/stem-diverse-tv-cms (fetch)
upstream        https://github.com/anitab-org/stem-diverse-tv-cms (push)
```

### Run app

Download the latest stable version of NodeJs [here](https://nodejs.org/en/download/) and install it.

##### For yarn users

Install `yarn`. Run `node --version` and `yarn --version` to verify successful installation.

To get the frontend running locally:


- Run `yarn` or `npm i` to install all required dependencies

- Setup the env file in the root directory of the project & copy the template from the sample env file 

  - If you are running it locally & want your credentials to be stored in your project that you made on firebase you need to set REACT_APP_ENVIRONMENT_CONFIG=local 

  - If you are running it & want your credentials to be stored on the hosted version of this project i.e, ` https://stem-diverse-tv.herokuapp.com/ ` ,you need to set REACT_APP_ENVIRONMENT_CONFIG=prod 

- Run `yarn start` or `npm run start` to start the local server

## Contributing

**This project is under active development**

Please read our [Contributing Guidelines](.github/CONTRIBUTING_GUIDELINES.md), [Code of Conduct](.github/CODE_OF_CONDUCT.md) and [Reporting Guidelines](.github/REPORTING_GUIDLINES.md) thoroughly.

### Contributors

Thanks goes to these people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/annabauza"><img src="https://avatars.githubusercontent.com/u/31966073?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anna Bauza</b></sub></a><br /><a href="https://github.com/anitab-org/stem-diverse-tv-cms/commits?author=annabauza" title="Code">💻</a> <a href="#maintenance-annabauza" title="Maintenance">🚧</a> <a href="https://github.com/anitab-org/stem-diverse-tv-cms/commits?author=annabauza" title="Tests">⚠️</a> <a href="https://github.com/anitab-org/stem-diverse-tv-cms/commits?author=annabauza" title="Documentation">📖</a> <a href="#design-annabauza" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
Contributions of any kind welcome!

## Branches

- master: This contains the latest code. All the contributing PRs must be sent to this branch.
- production: Merge to master will trigger deployment static github page and publish it on production branch.

## Contact

If you have any questions or want to discuss something about this repo, feel free to reach out to our team on our Zulip channel [#STEM-Diverse-TV](https://anitab-org.zulipchat.com/#narrow/stream/216323-design/topic/STEM.20Diverse.20TV). If you are a new contributor, head over to this [project's stream](https://anitab-org.zulipchat.com/#narrow/stream/225705-STEM-diverse-tv) on Zulip to see ongoing discussions.

## License

The project is licensed under the GNU General Public License v3.0. Learn more about it in the [LICENSE](LICENSE) file.
