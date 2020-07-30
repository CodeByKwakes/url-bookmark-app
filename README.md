# Url Bookmark App

Url Bookmark App is a web application that allows a user to save a list of website urls.

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


## Documentation

You can find the following list of documents to help know more about this repo:-

* [About Nx](./docs/nx.md)
* [Repo Tree Structure](./docs/repo-tree-structure.md)

## Contact

If you want to contact me you can reach me at kwakesproject@gmail.com.
