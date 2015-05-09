# Ember Off Canvas Components

A micro library packaged as and Ember CLI Addon - a group of [Ember.js Components] that interact to create an Off-Canvas
user interface.

[![Build Status](https://travis-ci.org/pixelhandler/ember-off-canvas-components.svg)](https://travis-ci.org/pixelhandler/ember-off-canvas-components)

[Ember.js Components]: http://emberjs.com/guides/components/ 

## Installation

### As an Ember CLI addon

Use this addon in you ember-cli application...

    npm install --save-dev pixelhandler/ember-off-canvas-components

### As a Standalone Library

Download a [release][releases].

[releases]: https://github.com/pixelhandler/ember-off-canvas-components/releases

Copy to your vendor directory and link up the .js and .css files


## [View a demo][demo]

* An off-canvas area is positioned outside of the viewport and slides into view when activated. 
* (Off-canvas is a UI pattern, and not associated with the html `canvas` element.)


[demo]: http://pixelhandler.github.io/ember-off-canvas-components/


# Contributing

## Installation

    git clone git@github.com:pixelhandler/ember-off-canvas-components.git
    cd ember-off-canvas-components
    npm install
    bower install
    npm run sass

## Running

1. `ember server`
2. Visit your app at <http://localhost:4200>.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

Also see the [packaging] readme file for a non Ember CLI release.

[packaging]: https://github.com/pixelhandler/ember-off-canvas-components/blob/master/packaging/README-packaging.md


## Test the addon as a dependency

The dummy app is used for the demo on the gh-pages branch. Test out the
addon in an ember-cli by copying some of the source code of the dummy app. 

Test with local clone of this repo using `npm link`

    cd ember-off-canvas-components
    npm link
    cd ../
    ember new test-app
    cd test-app
    npm link ember-off-canvas-components

Or, test with a github repo

    ember new test-app
    cd test-app
    npm install pixelhandler/ember-off-canvas-components --save-dev

Copy the dummy app files and run the test-app

    cp node_modules/ember-off-canvas-components/tests/dummy/app/templates/application.hbs app/templates/application.hbs
    cp node_modules/ember-off-canvas-components/tests/dummy/app/templates/index.hbs app/templates/index.hbs
    cp node_modules/ember-off-canvas-components/tests/dummy/app/templates/off-canvas.hbs app/templates/off-canvas.hbs
    cp node_modules/ember-off-canvas-components/tests/dummy/app/controllers/index.js app/controllers/index.js
    cp node_modules/ember-off-canvas-components/tests/dummy/app/routes/index.js app/routes/index.js
    cp node_modules/ember-off-canvas-components/tests/dummy/app/styles/app.css app/styles/app.css
    ember server

