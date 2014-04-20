What is the Emberella Component Blueprint?
==========================================

The goal of the Emberella Component Blueprint project is to streamline the
process of creating individual [Ember][ember] components, modules, or "micro-projects."

It is intended as a starting point (or project template) for developers to build
their own fully-tested, modular [Ember Components][ember-components].

Get Started
==========================================

Step 1: Clone this repository

```
$ git clone git@github.com:realityendshere/emberella-component-blueprint.git
```

Step 2: Switch to the project directory

```
$ cd emberella-component-blueprint
```

Step 3: Install all dependencies with NPM

```
$ npm install
```

Step 4: Start your test and development server

```
$ ./testem
```

Step 5: With the testing server now running, [view the example component][example]

Step 6 (optional): Make a change to `lib/components/ella-sample-component` in
your text editor of choice and watch the tests *and* the example page reload
automatically

Typical Usage
==========================================

To begin development and testing of your component:

```
$ ./testem
```

With the testing server running, [view the example component][example] to see
your component in a browser.

Your tests and component page will reload automatically when you save changes
to your code.

To prepare your module for distribution:

```
$ ./grunt dist
```

That's all there is to it. Pretty sweet, huh?

Project Goals (or Wait. What? Why?)
==========================================

Other projects, like [Ember CLI][ember-cli] exist to jumpstart app development.
If your goal is to create a reusable, fully-tested module for Ember, then a tool
like Ember CLI seems like overkill. Wrangling the newest build tools to work
together to develop, test, build, and release a small bit of code turned out to
be a bigger challenge than I anticipated. This project will help you and others
to get started building awesome components more rapidly.

[Ember Components][ember-components] appear poised to empower developers to
build modular, reusable bits of user interface. For example, [IC Tabs][ic-tabs]
provides WAI-ARIA accessible tabs for your Ember.js applications. It's
relatively easy to consume the ic-tabs component using [Bower][bower]
(`$ bower install ic-tabs`), but developing or contributing to open source
components like ic-tabs is slightly more challenging, often requiring multiple
terminal screens.

I intend (not promise) to convert much of my own Ember code library,
[Emberella][emberella], into smaller modules to be consumed individually as
desired by the Ember community. I want to use the latest build and testing tools
(e.g. [Grunt][grunt], [Broccoli][broccoli], and [Test'em][testem]). I also want
to make developing components as easy as possible for myself and anyone who
feels they can contribute.

To me, running a single command, `./testem`, to begin development work is the
ideal scenario. In this one command:

* A Broccoli server will start and rebuild when it detects code changes
* Test'em will run tests and automatically re-run the tests each time Broccoli builds
* The component becomes available at http://localhost:7357/examples/index.html and will automatically reload each time Broccoli builds

Similarly, one command, `./grunt dist`, will build and test the component for
distribution. In this one command:

* Broccoli will build the component for testing
* Test'em will run tests in multiple browsers
* Broccoli will build the component for distribution in AMD, Named AMD, CJS, and Global module formats (thanks to [Ryan Florence's broccoli-dist-es6-module][es6-dist])

(Soon, I hope to add support for automated releases.)

This strategy is all experimental. After all, Broccoli may change, ports may
clash, and errors may occur outside the golden path. Even so, I hope you find
this component template offers some inspiration in your own micro-projects.

Standing on the Shoulders of...
==========================================

[Jo Liss][joliss]

[Ryan Florence][rpflorence]

And all the folks who've built or contributed to the dependencies for this project.

[emberella]: https://github.com/realityendshere/emberella "Emberella"
[ember]: http://emberjs.com "Ember.js"
[ember-components]: http://emberjs.com/guides/components/ "Ember Component Guide"
[broccoli]: https://github.com/joliss/broccoli "Broccoli"
[testem]: https://github.com/airportyh/testem "Test'em 'Scripts!"
[grunt]: http://gruntjs.com "Grunt"
[bower]: http://bower.io "Bower"
[ember-cli]: http://iamstef.net/ember-cli/ "Ember CLI"
[ic-tabs]: https://github.com/instructure/ic-tabs "IC Tabs"
[npm]: https://www.npmjs.org "NPM"
[example]: http://localhost:7357/examples/index.html "Example Component"
[es6-dist]: https://github.com/rpflorence/broccoli-dist-es6-module "broccoli-dist-es6-module"
[joliss]: https://github.com/joliss "Jo Liss on GitHub"
[rpflorence]: https://github.com/rpflorence "Ryan Florence on GitHub"
