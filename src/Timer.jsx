import React from 'react'
import PropTypes from 'prop-types'

export function Timer({ time, text, paused }) {
  // local functions
  let style = 'text-center border rounded-pill timer'
  const lastMinute = time.split(':')[0] === '00'
  if (lastMinute) {
    style = style.concat(' text-danger')
  }
  if (paused) {
    style = style.concat(' blink')
  }
  return (
    <div className={style}>
      <div className="row justify-content-center">
        <p id="timer-label" className="h3 font-weight-bold pt-2">
          {text}
        </p>
      </div>
     
      <div id="time-left" className="number h1">
        {time}
      </div>
    </div>
  )
}
Timer.propTypes = {
  time: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Timer
