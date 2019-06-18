import React from 'react'
import PropTypes from 'prop-types'
export function Timer({ time, text }) {
  // local functions
  
  return (
    <div>
      <h2 id="timer-label">{text}</h2>
      <div id="time-left">{time}</div>
    </div>
  )
}
Timer.propTypes = {
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
export default Timer
