import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
export function BreakLength({ len, increment, decrement }) {
  return (
    <div id="break-label" className="container">
      <div className="row justify-content-center">
        <p className="col-sm-12 text-center h3 font-weight-bold">
          Break Length
        </p>
      </div>
      <div className="row justify-content-center ">
        <div id="break-increment" onClick={increment} className="p-1">
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </div>
        <p
          id="break-length"
          className="p-1 text-center  font-weight-bold h2 number"
        >
          {len}
        </p>
        <div id="break-decrement" onClick={decrement} className="p-1">
          <FontAwesomeIcon icon={faArrowDown} size="2x" />
        </div>
      </div>
    </div>
  )
}
BreakLength.propTypes = {
  len: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
export default BreakLength
