What is the Emberella Component Blueprint?
==========================================

The goal of the Emberella Component Blueprint project is to streamline the
process of creating individual [Ember][ember] components, modules, or "micro-projects."

It is intended as a starting point (or project template) for developers to build
their own fully-tested, modular [Ember Components][ember-components].

**Please report any issues you encounter while using the instructions
provided here.**

Get Started
==========================================

#### Step 1: Clone this repository.

```
$ git clone git@github.com:realityendshere/emberella-component-blueprint.git
```

#### Step 2: Switch to the project directory

```
$ cd emberella-component-blueprint
```

#### Step 3: Install all dependencies with NPM

```
$ npm install
```

Project Setup
==========================================

#### Step 1: Start your own repo by removing the `.git` directory and
reinitializing Git.

```
$ rm -R .git; git init
```

#### Step 2: Configure NPM

```
$ npm init
```

Follow the prompts to setup your project for NPM. Default values are in (parentheses).

```
name: (emberella-component-blueprint)
version: (0.0.0)
git repository:
keywords:
author:
license: (ISC)
Is this ok? (yes)
```

#### Step 3: Configure Bower

```
$ bower init
```

Follow the prompts to setup your project for Bower. Default values are in (parentheses).

Notes:
+ You can probably leave "main file" blank.
+ For module types, select `amd` and `globals`.

```
[?] name: (emberella-component-blueprint)
[?] version: (0.0.0)
[?] description:
[?] main file:
[?] what types of modules does this package expose?
[?] keywords:
[?] authors:
[?] license: (MIT)
[?] homepage:
[?] set currently installed components as dependencies? (y/N)
[?] add commonly ignored files to ignore list? (Y/n)
[?] would you like to mark this package as private which prevents it from being accidentally published to the registry? (y/N)
[?] Looks good? (Y/n)
```

#### Step 4: Configure module output

Open the `output.js` file and provide your project with a global namespace and
a package name.

```
// Replace with your own global namespace.
var MY_JS_GLOBAL_NAMESPACE = 'GlobalNamespace';

// Replace with your own package name.
var MY_JS_PACKAGE_NAME = 'replace-me';
```

**Note: you will need to restart test'em (if it is running) for tests to pickup
any changes to the global namespace**

Get to Work
==========================================

To begin development and testing of your component:

```
$ ./testem
```

With the testing server running, [view the example component][example] to see
your component in a browser.

Your tests and component page will reload automatically when you save changes
to your code.

Release Your Component
==========================================

To prepare your module for distribution:

```
$ ./grunt dist
```

Project Goals (or Wait. What? Why?)
==========================================

My goal is ultimately to make Ember module and component development more
ergonomic, approachable, and fun. By suggesting some guidelines and best
practices for micro-project development, I hope the Ember community as a whole
benefits from a broader ecosystem of well-built modules and components.

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
* Test'em will run tests and automatically re-run the tests each time Broccoli attempts to build
* The component becomes available at http://localhost:7357/examples/index.html and will automatically reload each time Broccoli builds

Similarly, one command, `./grunt dist`, will build and test the component for
distribution. In this one command:

* Broccoli will build the component for testing
* Test'em will run tests in multiple browsers
* Broccoli will build the component for distribution in AMD, Named AMD, CJS, and Global module formats (thanks to [Ryan Florence's broccoli-dist-es6-module][es6-dist])

This strategy is all experimental. After all, Broccoli may change, ports may
clash, and errors may occur outside the golden path. Even so, I hope you find
this component template offers some inspiration in your own micro-projects.

Stay FIRST-y, My Friends
==========================================

[This article][firsty] by Addy Osmani provides some excellent advice on
building excellent web components.

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
[todos]: https://github.com/realityendshere/emberella-component-blueprint/blob/master/TODO.md "TODOS"
[firsty]: http://addyosmani.com/first/ "Components Should Be Focused, Independent, Reusable, Small, and Testable "
