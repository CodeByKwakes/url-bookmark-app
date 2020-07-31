# Url Bookmark App

Url Bookmark App is a web application that allows a user to save a list of website urls.

## Demo

[Click to view demo](http://url-bookmark.app.s3-website.eu-west-2.amazonaws.com/overview)

## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* Node version 13 or higher
* NPM 6 or higher
* Angular CLI version 10.

## Installing Url Bookmark App

To install Url Bookmark App, follow these steps:

```
npm install or npm i
```

## Using Url Bookmark App

To use Url Bookmark App, follow these steps:

```
npm run bookmarkapp:serve
```

To make a dist build of Url Bookmark App, follow these steps:

```
npm run bookmarkapp:build /* add -- --prod to make a production build */
```
## Technologies Used
* [Angular (v10)](https://angular.io/)
* [nrwl/nx (v10)](https://github.com/nrwl/nx)
* [ngxs/store (v3.6)](https://github.com/ngxs/store)
* [jw-angular-pagination](https://github.com/cornflourblue/jw-angular-pagination)

## Monorep Structure

The project is set up in a monorepo architecture. This allows developers to build and develop multiple applications and libraries and re-use and share code many times throughout the code workspace instead of writing and duplicating code. It allows the developer to follow the separation of concerns rule

The main structure of the workspace is split into two parts



*   Apps
*   Libs


## Apps

The app takes libraries and is able to use the modules via the lazy loading strategy. this means the app can not only load one library but can have multiple parts for different situations i.e. mobile devices platforms, desktop applications etc


## Libs

Libs are multiple steprate modules that can be reused and shared within each other or in Apps. This means the library can be used not only inside of its own workspace but if published, can be used for other projects as a tool or module.


# Libraries can be set into different types for the workspace



*   Feature: implement smart components (or containers) for specific business use cases or pages in an application.
*   UI: contains only presentational ("dumb") components
*   Data-access: contains code for interacting with a back-end system or related to state management.
*   Utility: contains low-level utilities used by many libraries and applications

Workspace Structure Overview

Applications

bookmark-app: main application for which imports the feature shell library via lazy loading as well as other root modules


# Libraries

Data-access



*   **api**:  this libraries is responsible for two thing:
    *   pulling the list of urls from the local storage to allow persistence page reload
    *   Checking if a website url exists and retrieve the http url and image (if applicable)
*   **store**: state management library using NGXS to handle dispatching actions and obtaining observable data

Feature



*   **shell**: this library uses data-access libs (store & api) to deliver the relevant data sources to the smart Ui of the application. Its handles the routing of the Overview and Result pages and provides the input-form and bookmark-list containers the right data to be used

UI



*   **ui-kit**: this library contains the bookmark card presentational component, which is used in the feature shell library. Can be reused for in and component that requires a bookmark item

Util



*   **animations**: contains angular animation code to be shared throughout the workspace
*   **storage**: a reusable lib to handle local storage functions


## Workspace Structure

You can find the following list of documents to help know more about this repo:-

```
├── README.md
├── angular.json
├── apps
│   ├── bookmark-app
│   │   ├── jest.config.js
│   │   ├── src
│   │   │   ├── app
│   │   │   │   ├── app-routing.module.ts
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.scss
│   │   │   │   ├── app.component.spec.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   └── app.module.ts
│   │   │   ├── assets
│   │   │   ├── environments
│   │   │   │   ├── environment.prod.ts
│   │   │   │   └── environment.ts
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── polyfills.ts
│   │   │   ├── styles.scss
│   │   │   └── test-setup.ts
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.spec.json
│   │   └── tslint.json
│   └── bookmark-app-e2e
│       ├── cypress.json
│       ├── src
│       │   ├── fixtures
│       │   │   └── example.json
│       │   ├── integration
│       │   │   └── app.spec.ts
│       │   ├── plugins
│       │   │   └── index.js
│       │   └── support
│       │       ├── app.po.ts
│       │       ├── commands.ts
│       │       └── index.ts
│       ├── tsconfig.e2e.json
│       ├── tsconfig.json
│       └── tslint.json
├── decorate-angular-cli.js
├── dist
│   └── apps
│       └── bookmark-app
│           ├── 3rdpartylicenses.txt
│           ├── 5-es2015.1e804b23acf547f17836.js
│           ├── 5-es2015.1e804b23acf547f17836.js.map
│           ├── 5-es5.1e804b23acf547f17836.js
│           ├── 5-es5.1e804b23acf547f17836.js.map
│           ├── favicon.ico
│           ├── index.html
│           ├── main-es2015.0b4100956a8903660a28.js
│           ├── main-es2015.0b4100956a8903660a28.js.map
│           ├── main-es5.0b4100956a8903660a28.js
│           ├── main-es5.0b4100956a8903660a28.js.map
│           ├── polyfills-es2015.38c8711e627f4941d5df.js
│           ├── polyfills-es2015.38c8711e627f4941d5df.js.map
│           ├── polyfills-es5.aff21dd080656a783c07.js
│           ├── polyfills-es5.aff21dd080656a783c07.js.map
│           ├── runtime-es2015.f3d9eebfc00858c83452.js
│           ├── runtime-es2015.f3d9eebfc00858c83452.js.map
│           ├── runtime-es5.f3d9eebfc00858c83452.js
│           ├── runtime-es5.f3d9eebfc00858c83452.js.map
│           ├── styles.aec5170fc9ec8833d3a5.css
│           └── styles.aec5170fc9ec8833d3a5.css.map
├── docs
│   ├── nx.md
│   └── repo-tree-structure.md
├── jest.config.js
├── libs
│   ├── data-access
│   │   ├── api
│   │   │   ├── README.md
│   │   │   ├── jest.config.js
│   │   │   ├── ng-package.json
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── api.module.ts
│   │   │   │   │   ├── config
│   │   │   │   │   │   └── constant.ts
│   │   │   │   │   ├── model
│   │   │   │   │   │   └── bookmark.model.ts
│   │   │   │   │   └── services
│   │   │   │   │       └── api.service.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   ├── tsconfig.lib.prod.json
│   │   │   ├── tsconfig.spec.json
│   │   │   └── tslint.json
│   │   └── store
│   │       ├── README.md
│   │       ├── jest.config.js
│   │       ├── ng-package.json
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── state
│   │       │   │   │   ├── bookmark.actions.ts
│   │       │   │   │   └── bookmark.state.ts
│   │       │   │   └── store.module.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       ├── tsconfig.lib.prod.json
│   │       ├── tsconfig.spec.json
│   │       └── tslint.json
│   ├── feature
│   │   └── shell
│   │       ├── README.md
│   │       ├── jest.config.js
│   │       ├── ng-package.json
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── containers
│   │       │   │   │   ├── bookmark-list
│   │       │   │   │   │   ├── bookmark-list.container.html
│   │       │   │   │   │   ├── bookmark-list.container.scss
│   │       │   │   │   │   ├── bookmark-list.container.spec.ts
│   │       │   │   │   │   └── bookmark-list.container.ts
│   │       │   │   │   └── input-form
│   │       │   │   │       ├── input-form.container.html
│   │       │   │   │       ├── input-form.container.scss
│   │       │   │   │       ├── input-form.container.spec.ts
│   │       │   │   │       └── input-form.container.ts
│   │       │   │   ├── pages
│   │       │   │   │   ├── overview
│   │       │   │   │   │   ├── overview.page.html
│   │       │   │   │   │   ├── overview.page.scss
│   │       │   │   │   │   ├── overview.page.spec.ts
│   │       │   │   │   │   └── overview.page.ts
│   │       │   │   │   └── result
│   │       │   │   │       ├── result.page.html
│   │       │   │   │       ├── result.page.scss
│   │       │   │   │       ├── result.page.spec.ts
│   │       │   │   │       └── result.page.ts
│   │       │   │   └── shell.module.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       ├── tsconfig.lib.prod.json
│   │       ├── tsconfig.spec.json
│   │       └── tslint.json
│   ├── ui
│   │   └── ui-kit
│   │       ├── README.md
│   │       ├── jest.config.js
│   │       ├── ng-package.json
│   │       ├── package.json
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── components
│   │       │   │   │   └── bookmark-card
│   │       │   │   │       ├── bookmark-card.component.html
│   │       │   │   │       ├── bookmark-card.component.scss
│   │       │   │   │       ├── bookmark-card.component.spec.ts
│   │       │   │   │       └── bookmark-card.component.ts
│   │       │   │   └── ui-kit.module.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       ├── tsconfig.lib.prod.json
│   │       ├── tsconfig.spec.json
│   │       └── tslint.json
│   └── util
│       ├── animations
│       │   ├── README.md
│       │   ├── jest.config.js
│       │   ├── ng-package.json
│       │   ├── package.json
│       │   ├── src
│       │   │   ├── index.ts
│       │   │   ├── lib
│       │   │   │   ├── basic.animations.ts
│       │   │   │   └── routing.animations.ts
│       │   │   └── test-setup.ts
│       │   ├── tsconfig.json
│       │   ├── tsconfig.lib.json
│       │   ├── tsconfig.lib.prod.json
│       │   ├── tsconfig.spec.json
│       │   └── tslint.json
│       └── storage
│           ├── README.md
│           ├── jest.config.js
│           ├── ng-package.json
│           ├── package.json
│           ├── src
│           │   ├── index.ts
│           │   ├── lib
│           │   │   ├── services
│           │   │   │   └── storage.service.ts
│           │   │   ├── storage.module.spec.ts
│           │   │   └── storage.module.ts
│           │   └── test-setup.ts
│           ├── tsconfig.json
│           ├── tsconfig.lib.json
│           ├── tsconfig.lib.prod.json
│           ├── tsconfig.spec.json
│           └── tslint.json
├── nx.json
├── package-lock.json
├── package.json
├── tools
│   ├── schematics
│   └── tsconfig.tools.json
├── tsconfig.base.json
└── tslint.json
```

## Contact

If you want to contact me you can reach me at kwakesproject@gmail.com.
