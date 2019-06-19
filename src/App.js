import React, { useState } from 'react'
import BreakLength from './BreakLength'
import SessionLabel from './SessionLabel'
import Timer from './Timer'
import TimerControls from './TimerControls'
import { useInterval } from './CustomHooks'
import beep from './sounds/beep.wav'
import { playSound, stopSound } from './audioHelper'
function App() {
  // constants
  const BREAK_LENGTH = 5
  const SESSION_LENGTH = 25
  const SESSION_TEXT = 'Session'
  const BREAK_TEXT = 'Break'
  // Hooks
  const [breakLen, setBreakLen] = useState(BREAK_LENGTH)
  const [sessionLen, setSessionLen] = useState(SESSION_LENGTH)
  // const [minutes, setMinutes] = useState(sessionLen)
  // const [seconds, setSecond] = useState(0)
  const [timerType, setTimerType] = useState(SESSION_TEXT)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [timer, setTimer] = useState(sessionLen * 60)
  const [paused, setPaused] = useState(false)
  const incrementBreakLen = () => {
    if (breakLen < 60) {
      setBreakLen(breakLen + 1)
    }
  }
  const decrementBreakLen = () => {
    if (breakLen > 1) {
      setBreakLen(breakLen - 1)
    }
  }
  const incrementSessionLen = () => {
    if (sessionLen < 60) {
      // setMinutes(sessionLen + 1)
      setSessionLen(sessionLen + 1)
      if (!isTimerRunning) setTimer(sessionLen * 60 + 60)
    }
  }
  const decrementSessionLen = () => {
    if (sessionLen > 1) {
      // setMinutes(sessionLen - 1)
      setSessionLen(sessionLen - 1)
      if (!isTimerRunning) setTimer(sessionLen * 60 - 60)
    }
  }

  const reset = () => {
    setIsTimerRunning(false)
    setPaused(false)
    setBreakLen(BREAK_LENGTH)
    setSessionLen(SESSION_LENGTH)
    setTimerType(SESSION_TEXT)
    stopSound('beep')
    setTimer(SESSION_LENGTH * 60)
  }

  const startStop = () => {
    if (isTimerRunning) {
      stopSound('beep')
      setPaused(true)
    } else setPaused(false)
    setIsTimerRunning(!isTimerRunning)
  }
  const tick = () => {
    // switch timer
    setTimer(timer - 1)
    if (timer === 0) {
      if (timerType === SESSION_TEXT) {
        setTimer(breakLen * 60)
        setTimerType(BREAK_TEXT)
      } else {
        setTimer(sessionLen * 60)
        setTimerType(SESSION_TEXT)
      }
    }
    if (timer < 10) {
      playSound('beep')
    }
  }
  const parseTime = () => {
    let minutes = Math.floor(timer / 60)
    let seconds = timer - minutes * 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    minutes = minutes < 10 ? '0' + minutes : minutes
    return minutes + ':' + seconds
  }
  useInterval(tick, isTimerRunning ? 1000 : null)

  return (
    <div className="container-fluid  bg-dark text-light">
      <div className="row justify-content-center">
        <p className="col-sm-auto text-center h1 font-weight-bold m-2 p-2">
          Pomodoro Clock
        </p>
      </div>
      <div className="row justify-content-center align-items-end">
        <div className="col-sm-auto">
          <BreakLength
            len={breakLen}
            increment={incrementBreakLen}
            decrement={decrementBreakLen}
          />
        </div>
        <div className="col-sm-auto">
          <Timer time={parseTime()} text={timerType} paused={paused} />
        </div>
        <div className="col-sm-auto">
          <SessionLabel
            len={sessionLen}
            increment={incrementSessionLen}
            decrement={decrementSessionLen}
          />
        </div>
      </div>
      <div className="row justify-content-center" />
      <div className="row justify-content-center p-2">
        <div className="col-sm-auto">
          <TimerControls
            reset={reset}
            startStop={startStop}
            isRunning={isTimerRunning}
          />
        </div>
      </div>
      <audio id="beep" src={beep} />
    </div>
  )
}

export default App
