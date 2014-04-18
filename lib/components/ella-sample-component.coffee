`import { Component, get, set } from 'ember'`

###
@module emberella
@submodule emberella-components
###

EllaSampleComponent =
  tagName: 'ella-sample'

  classNameBindings: ['activated']

  click: ->
    set(@, 'activated', !get(@, 'activated'))
    @incrementProperty 'tests'

  activated: false

  tests: 0

`export default Component.extend(EllaSampleComponent)`
