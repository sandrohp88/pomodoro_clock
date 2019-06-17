import React from 'react'
import PropTypes from 'prop-types'

export function SessionLabel({ len, increment, decrement }) {
  return (
    <div id="session-label">
      <h2 >Session Length</h2>
      <h6 id="session-length">{len}</h6>
      <button id="session-decrement" onClick={decrement}>
        <i>-</i>
      </button>
      <button id="session-increment" onClick={increment}>
        <i>+</i>
      </button>
    </div>
  )
}
SessionLabel.propTypes = {
  len: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
export default SessionLabel
