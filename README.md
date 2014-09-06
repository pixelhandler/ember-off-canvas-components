# Ember Off Canvas Components

A micro library containing a group of [Ember.js Components] that interact to create an Off-Canvas
user interface.

[![Build Status](https://travis-ci.org/pixelhandler/ember-off-canvas-components.svg?branch=v0.1.0)](https://travis-ci.org/pixelhandler/ember-off-canvas-components)

## [View a demo][demo]

* An off-canvas area is positioned outside of the viewport and slides into view when activated. 
* (Off-canvas is a UI pattern, and not associated with the html `canvas` element.)

[Ember.js Components]: http://emberjs.com/guides/components/ 
[demo]: http://pixelhandler.github.io/ember-off-canvas-components/


## Get Started

1. Clone this repository
1. Install all dependencies with [npm] and [bower] using `npm install`
1. Build and choose a module format to use the components in project

[bower]: http://bower.io "Bower"
[npm]: https://www.npmjs.org "NPM"


## Build / Dist

This micro library uses ES6 modules, which can be built for distribution in
various module formats: AMD, CJS, globals, etc.

**[Download a built module][dist]**

[dist]: https://github.com/pixelhandler/ember-off-canvas-components/tree/gh-pages/dist

To build execute:

```
$ ./grunt
```

* The default [grunt] task will build to a `dist` directory
* [Broccoli] is used to build AMD, CJS, and global modules

[grunt]: http://gruntjs.com "Grunt"
[Broccoli]: https://github.com/broccolijs/broccoli


## Testing / Development

To begin development and testing:

```
$ ./testem
```

The [testem] command launches a watcher for both the lib and test directories. 
Any browsers listed in the [testem.json] file will launch.

The tests and [example page] will reload automatically when you save 
changes to the code, see http://localhost:4200/examples/

The CSS is included in a template using [ic-styled], and [grunt] /
[grunt-cli] are used to execute the build task

* Library code is in the `lib` directory  
* SCSS styles are in the `styles` directory  
* Unit and acceptance tests in the `tests` directory  
  * Files with the suffix `spec.js` are executed in the test runner  
* Test setup and helpers are in the `tests/support/setup.js` directory  
* Testem is used for the test runner (local and ci)  
  * Testem config is setup to use the named-amd file in the dist directory

[testem]: https://github.com/airportyh/testem
[example page]: http://localhost:4200/examples/
[ic-styled]: https://github.com/instructure/ic-styled
[grunt]: http://gruntjs.com/
[grunt-cli]: https://github.com/gruntjs/grunt-cli


## Thanks

* Dana Franklin [emberella-component-blueprint] - The example this lib
  is based on
* [Jo Liss][joliss] - [broccoli]
* [Ryan Florence][rpflorence] - [broccoli-dist-es6-module] 

[emberella-component-blueprint]: https://github.com/realityendshere/emberella-component-blueprint
[joliss]: https://github.com/joliss "Jo Liss on GitHub"
[rpflorence]: https://github.com/rpflorence "Ryan Florence on GitHub"
[broccoli-dist-es6-module]: https://github.com/rpflorence/broccoli-dist-es6-module "broccoli-dist-es6-module"
