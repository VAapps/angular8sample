#### VAapps 
# MyVault

This Project was Built On
* Angular CLI 8.3.14
* Docker Multistage Build
* Nginx 1.17

## Installed NPM Packages
```
npm install bootstrap jquery popper --save

npm install @fortawesome/fontawesome-svg-core --save
npm install @fortawesome/free-solid-svg-icons --save
npm install @fortawesome/angular-fontawesome --save

npm install ngx-device-detector --save

ng add @angular/pwa
```


## Add bootstrap to the angular.json
```
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```

## Features Added
App Version Info
 \
Device Info
 \
PWA

## Upgrade To Latest Version Angular
Upgrade all your dependencies and dev dependencies in package.json that includes typeScript,RxJS etc
```
npm install -g @angular/cli@latest
ng update @angular/cli
``` 
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

