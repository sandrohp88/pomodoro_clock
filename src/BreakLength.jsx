import React from 'react'
import PropTypes from 'prop-types'
export function BreakLength({ len, increment, decrement }) {
  return (
    <div id="break-label">
      <h1>Break Length</h1>
      <h6 id="break-length">{len}</h6>
      <button id="break-decrement" onClick={decrement}>
        <i>-</i>
      </button>

      <button id="break-increment" onClick={increment}>
        <i>+</i>
      </button>
    </div>
  )
}
BreakLength.propTypes = {
  len: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
export default BreakLength
