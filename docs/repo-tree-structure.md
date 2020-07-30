

```bash

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
│   └── util
│       ├── animations
│       │   ├── README.md
│       │   ├── jest.config.js
│       │   ├── ng-package.json
│       │   ├── package.json
│       │   ├── src
│       │   │   ├── index.ts
│       │   │   ├── lib
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
