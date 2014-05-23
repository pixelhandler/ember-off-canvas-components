# Load task config from "tasks" directory
recipe = (name) -> require('./tasks/grunt/' + name)

module.exports = (grunt) ->

  # Find and load grunt plugins listed in package.json as dependencies
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  # Setup task config
  grunt.initConfig
    pkg: grunt.file.readJSON('bower.json')

    broccoli:       recipe 'broccoli'
    clean:          recipe 'clean'
    testem:         recipe 'testem'

  # Load local tasks
  grunt.task.loadTasks('./tasks')

  # Task: broccoli_production_test
  # Builds for a production environment, runs tests
  grunt.registerTask('broccoli_production_test', [
    'clean:build'
    'broccoli:production_test:build'
  ])

  # Task: broccoli_dist
  # Builds for a production environment into the dist directory
  grunt.registerTask('broccoli_dist', [
    'clean:dist'
    'broccoli:dist:build'
  ])

  # Task: test
  # Setup production build, test it, cleanup
  grunt.registerTask('test', [
    'broccoli_production_test'
    'testem:ci:build'
    'clean:build'
  ])

  # Task: dist
  # Test and build
  grunt.registerTask('dist', [
    'test'
    'broccoli_dist'
  ])

  # Task: default
  # Grunt's default task, currently "dist"
  grunt.registerTask('default', [
    'dist'
  ])
