import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons'
export function TimerControls({ reset, startStop, isRunning }) {
  return (
    <div id="controls" className="container-fluid">
      <div className="row justify-content-center"><div id="start_stop" onClick={startStop}>
      {isRunning ? (
      <FontAwesomeIcon icon={faPause} size="2x" className="p-1" />
      ) : (
      <FontAwesomeIcon icon={faPlay} size="2x" className="p-1" />
      )}
      </div>
      <div id="reset" onClick={reset}>
      <FontAwesomeIcon icon={faRedo} size="2x" className="p-1" />
      </div></div>
    </div>
  )
}
TimerControls.propTypes = {
  reset: PropTypes.func.isRequired,
  startStop: PropTypes.func.isRequired,
  // isRunning: PropTypes.bool.isRequired
}
export default TimerControls
