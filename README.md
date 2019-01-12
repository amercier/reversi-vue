# reversi-vue

> [Vue CLI]-scaffolded project with Continuous Integration, and Continuous Delivery.

[![Greenkeeper](https://badges.greenkeeper.io/amercier/reversi-vue.svg)](https://github.com/amercier/reversi-vue/issues?q=label%3Agreenkeeper)
[![Dependency Status](https://img.shields.io/david/amercier/reversi-vue.svg)](https://david-dm.org/amercier/reversi-vue)
[![devDependency Status](https://img.shields.io/david/dev/amercier/reversi-vue.svg)](https://david-dm.org/amercier/reversi-vue#info=devDependencies)

## Vue CLI Settings

- **Features**
  - [x] Babel
  - [ ] TypeScript
  - [x] Progressive Web App (PWA) Support
  - [x] Router
  - [x] Vuex
  - [x] CSS Pre-processor
  - [x] Linter / Formatter
  - [x] Unit Testing
  - [x] E2E Testing
- **Linter / formatter config**
  - [x] ESLint + Prettier\*
- **Additional lint features**
  - [x] Lint on save\*
  - [ ] Lint and fix on commit
- **Place for configs?**
  - [x] In `package.json`

\*: See additional features below

## Additional feature

- **Prettier + Airbnb** are both enabled (see [23e6372]).
- **Prettier enabled for more files**: HTML, JSON, CSS/SCSS, Markdown, YAML (see [c7a81dd]).
- **Pre-commit hook**: linting and unit-testing committed files on commit (see [473dbc0]).

## Continuous Integration

[![Build Status](https://travis-ci.org/amercier/reversi-vue.svg?branch=master)](https://travis-ci.org/amercier/reversi-vue)
[![Test Coverage](https://img.shields.io/codecov/c/github/amercier/reversi-vue/master.svg)](https://codecov.io/github/amercier/reversi-vue?branch=master)

Each commit is automatically tested on [Travis CI], which runs:

- **Linting** using [ESLint] and [Prettier],
- **Unit tests** using [Jest] with code coverage reported to [Codecov],
- **End-to-end tests** using [Cypress].

## Continuous Delivery

[![Go to demo](https://img.shields.io/website-up-down-green-red/https/reversi.amercier.com.svg?label=website)](https://reversi.amercier.com/)

Each successful build on the `master` branch is automatically deployed by Travis CI on
[GitHub Pages]. See [GitHub Pages Deployment] for more information.

> **Note:** `GITHUB_TOKEN` and `CNAME` environment variables must be set in Travis CI project.

## Developers

See [Contributing Guide](CONTRIBUTING.md).

## License

[![License](https://img.shields.io/github/license/amercier/reversi-vue.svg)](LICENSE.md)

[vue cli]: https://cli.vuejs.org/
[travis ci]: https://travis-ci.org
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[jest]: http://jestjs.io/
[codecov]: https://codecov.io/
[cypress]: https://www.cypress.io/
[github pages]: https://pages.github.com/
[github pages deployment]: https://docs.travis-ci.com/user/deployment/pages/
[23e6372]: https://github.com/amercier/reversi-vue/commit/23e6372
[c7a81dd]: https://github.com/amercier/reversi-vue/commit/c7a81dd
[473dbc0]: https://github.com/amercier/reversi-vue/commit/473dbc0
