import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
export function SessionLabel({ len, increment, decrement }) {
  return (
    <div id="session-label" className="container">
      <div className="row justify-content-center">
        <p className="col-sm-auto font-weight-bold text-center h3">
          Session Length
        </p>
      </div>
      <div className="row justify-content-center">
        <div id="session-increment" onClick={increment} className="p-1">
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </div>
        <p
          id="session-length"
          className="p-1 number text-center font-weight-bold h2"
        >
          {len}
        </p>
        <div id="session-decrement" onClick={decrement} className="p-1">
          <FontAwesomeIcon icon={faArrowDown} size="2x" />
        </div>
      </div>
    </div>
  )
}
SessionLabel.propTypes = {
  len: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
export default SessionLabel
