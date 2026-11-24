import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Countdown from 'react-countdown'
import './App.css';

function App() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <div class="countdown-wrapper is-completed">
          <div class="countdown-card is-completed">
            <div class="check-icon">✓</div>
            <h2 class="completed-title">This countdown has ended!</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div class="countdown-wrapper">
          <div class="countdown-card">
            <h2 class="countdown-title">Countdown</h2>
            <div class="countdown-grid">
              <div class="time-box">
                <span class="number">{days}</span>
                <span class="label">Days</span>
              </div>
              <div class="time-box">
                <span class="number">{hours}</span>
                <span class="label">Hours</span>
              </div>
              <div class="time-box">
                <span class="number">{minutes}</span>
                <span class="label">Minutes</span>
              </div>
              <div class="time-box">
                <span class="number">{seconds}</span>
                <span class="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Countdown
          date={new Date("2026-12-14T08:45:00+01:00")}
          renderer={renderer}
        />
    </>
  )
}

export default App
