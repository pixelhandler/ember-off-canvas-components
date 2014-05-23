module.exports =
  dist:
    env: 'production'
    dest: 'dist'
    config: '/Brocfile.js'

  production_test:
    env: 'production'
    dest: 'tmp/build'
    config: '/Brocfile.js'

  develop:
    env: 'development'
    dest: 'tmp/build'
    config: '/Brocfile.js'
