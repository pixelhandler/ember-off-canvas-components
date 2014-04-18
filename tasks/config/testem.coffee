dependencies = [
  "bower_components/jquery/dist/jquery.js"
  "bower_components/handlebars/handlebars.js"
  "bower_components/ember/ember.js"
  "bower_components/jquery-simulate/index.js"
  "bower_components/ember-qunit/dist/globals/main.js"
]

tests = [
  "test/support/setup.js"
  "test/**/*.spec.*"
]

dist_src = [].concat(dependencies, "dist/globals/main.js", tests)

build_src = [].concat(dependencies, "tmp/build/globals/main.js", tests)

module.exports =
  dist:
    src: dist_src
    options:
      parallel: 8
      launch_in_ci: ['PhantomJS', 'Chrome', 'Firefox', 'Safari', 'IE7', 'IE8', 'IE9']
      launch_in_dev: ['PhantomJS']

  build:
    src: build_src
    options:
      parallel: 8
      launch_in_ci: ['PhantomJS', 'Chrome', 'Firefox', 'Safari', 'IE7', 'IE8', 'IE9']
      launch_in_dev: ['PhantomJS']
