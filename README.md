No fancy generators, just clone this repo and build your app on top of it.

### Package

- Uses AngularJS, Gulp, Jade, Sass (with sourcemaps), browserSync.
- Respects [angularjs-styleguide](https://github.com/johnpapa/angularjs-styleguide).

### Update dependencies

To update dependencies in package.json:

- `$ npm install -g npm-check-updates`
- `$ ncu -u`

### Setup

- `$ git clone https://github.com/lucasb/jags`
- Find and replace `jags` to `yourappname` in `./`
- `$ npm install`
- `$ npm install -g gulp`
- `$ gulp`

### Deployment

Run `$ gulp dist` for the production ready code in `build`.
