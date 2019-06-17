import React from 'react'
import PropTypes from 'prop-types'
export function TimerControls({ reset, startStop }) {
  return (
    <div id="controls">
      <button
        id="start_stop"
        onClick={startStop}
      >
        'start|stop'
      </button>
      <button id="reset" onClick={reset}>
        'reset'
      </button>
    </div>
  )
}
TimerControls.propTypes = {
  reset: PropTypes.func.isRequired
}
export default TimerControls
