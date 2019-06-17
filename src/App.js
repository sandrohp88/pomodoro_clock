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
  const [minutes, setMinutes] = useState(sessionLen)
  const [seconds, setSecond] = useState(0)
  const [timerType, setTimerType] = useState(SESSION_TEXT)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  // local functions
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
      setMinutes(sessionLen + 1)
      setSessionLen(sessionLen + 1)
    }
  }
  const decrementSessionLen = () => {
    if (sessionLen > 1) {
      setMinutes(sessionLen - 1)
      setSessionLen(sessionLen - 1)
    }
  }

  const reset = () => {
    setBreakLen(BREAK_LENGTH)
    setSessionLen(SESSION_LENGTH)
    setSecond(0)
    setIsTimerRunning(false)
    setTimerType(SESSION_TEXT)
    setMinutes(SESSION_LENGTH)
    stopSound('beep')
  }

  const startStop = () => {
    setIsTimerRunning(!isTimerRunning)
  }
  const tick = () => {
    if (seconds === 0 && minutes === 0) {
      if (timerType === BREAK_TEXT) {
        setTimerType(SESSION_TEXT)
        setMinutes(sessionLen)
      } else {
        setTimerType(BREAK_TEXT)
        setMinutes(breakLen)
      }
    }
    // last 59 seconds
    if (minutes === 0) {
      playSound('beep')
    }
    if (seconds === 0) {
      if (minutes > 0) {
        setMinutes(minutes - 1)
      }
      setSecond(59)
    } else {
      setSecond(seconds - 1)
    }
  }
  useInterval(tick, isTimerRunning ? 1000 : null)

  return (
    <div className="container-fluid">
      <h1>Pomodoro Clock</h1>
      <BreakLength
        len={breakLen}
        increment={incrementBreakLen}
        decrement={decrementBreakLen}
      />
      <SessionLabel
        len={sessionLen}
        increment={incrementSessionLen}
        decrement={decrementSessionLen}
      />
      <Timer minutes={minutes} seconds={seconds} text={timerType} />
      <TimerControls reset={reset} startStop={startStop} />
      <audio id="beep" src={beep} />
    </div>
  )
}

export default App
