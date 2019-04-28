

# Echoes Player - Angular Version (2nd Generation)

Echoes is a great youtube player.
It's fun & easy to listen or watch videos from youtube with Echoes.
What if youtube was designed to be used as music player?
This repository is an implementation of Echoes Player with Angular (2nd genration)- It's still a work in progress aimed at learning and experimenting Angular (2nd generation).




## Included Technologies & Libraries

* [Angular +5.x](http://angular.io)
* [Angular CLI](https://cli.angular.io/)
* [@ngrx Platform v5](https://github.com/ngrx/platform)
* Bootstrap v3.x (SASS, selected modules)
* Typescript (latest)
* ECMAscript latest

# EchoesPlayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Build for Production

Run `npm run build:prod` to build the project minified for production with AOT.

## Configure api keys

Echoes use environment variables to integrate Google Analytics, youtube data api key and youtube client id for authorization.
These defiend as template variables, and are replaced after a successfull build with build-env.js.

### Youtube Keys

Generate your own keys via [google's console](https://console.cloud.google.com/apis/credentials)
Required Keys are:  
`API Key`  
`OAuth client ID`

### Analytics Key (Optional)

The key is the project ID usually can be retreived from the analytics Admin interface. it exist as part of the "script" to paste in your html file.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).  
Run `npm run test:ci` to execute the unit tests only **Once**

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Bundle analyze explorer

[look at issue](https://github.com/angular/angular-cli/issues/4172)

1.  make sure `npm i source-map-explorer -g`
1.  `ng build --prod --aot --sm` (the sourcemap is for later steps)
1.  `cd dist && source-map-explorer A-FILE-WITH-HASH.js`
