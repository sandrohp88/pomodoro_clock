import React, { useState } from 'react'
import BreakLength from './BreakLength'
import SessionLabel from './SessionLabel'
import Timer from './Timer'
import TimerControls from './TimerControls'
import { useInterval } from './CustomHooks'
import beep from './sounds/beep.wav'
import { playSound, stopSound } from './audioHelper'
function App() {
  const BREAK_LENGTH = 1
  const SESSION_LENGTH = 1
  const SESSION_TEXT = 'Session'
  const BREAK_TEXT = 'Break'
  const [breakLen, setBreakLen] = useState(BREAK_LENGTH)
  const [sessionLen, setSessionLen] = useState(SESSION_LENGTH)
  const [minutes, setMinutes] = useState(sessionLen)
  const [seconds, setSecond] = useState(0)
  const [timerType, setTimerType] = useState(SESSION_TEXT)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const incrementBreakLen = () => {
    if (breakLen < 60) {
      setBreakLen(breakLen + 1)
    }
  }
  const decrementBreakLen = () => {
    breakLen > 1 ? setBreakLen(breakLen - 1) : setBreakLen(1)
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
    } else {
      setSessionLen(1)
    }
  }

  const reset = () => {
    setBreakLen(BREAK_LENGTH)
    setSessionLen(SESSION_LENGTH)
    // currentTimer === SESSION_TEXT
    //   ? setMinutes(SESSION_LENGTH)
    //   : setMinutes(BREAK_LENGTH)
    setSecond(0)
    setIsTimerRunning(false)
    setTimerType(SESSION_TEXT)
    setMinutes(SESSION_LENGTH)
    stopSound('beep')
  }

  const startStop = () => {
    setIsTimerRunning(!isTimerRunning)
    // currentTimer === SESSION_TEXT
    //   ? setMinutes(sessionLen)
    //   : setMinutes(breakLen)
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
      setSecond(59)
      console.log(minutes)
      if (minutes > 0) {
        setMinutes(minutes - 1)
      }
    } else {
      setSecond(seconds - 1)
    }
  }
  useInterval(tick, isTimerRunning ? 100 : null)

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
