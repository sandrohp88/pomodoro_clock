import React from 'react'
import PropTypes from 'prop-types'
export function Timer({ minutes, seconds, text }) {
  const parseTime = (minutes, seconds) => {
    const mm = minutes > 9 ? minutes : '0'.concat(minutes)
    const ss = seconds > 9 ? seconds : '0'.concat(seconds)
    return `${mm}:${ss}`
  }

  return (
    <div>
      <h2 id="timer-label">{text}</h2>
      <div id="time-left">{parseTime(minutes, seconds)}</div>
    </div>
  )
}
Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
}
export default Timer
