import Countdown from 'react-countdown';
import './App.css';

function App() {
  interface CountdownProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownProps) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="countdown-wrapper is-completed">
          <div className="countdown-card is-completed">
            <div className="check-icon">✓</div>
            <h2 className="completed-title">This countdown has ended!</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="countdown-wrapper">
          <div className="countdown-card">
            <h2 className="countdown-title">Countdown</h2>
            <div className="countdown-grid">
              <div className="time-box">
                <span className="number">{days}</span>
                <span className="label">Days</span>
              </div>
              <div className="time-box">
                <span className="number">{hours}</span>
                <span className="label">Hours</span>
              </div>
              <div className="time-box">
                <span className="number">{minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <div className="time-box">
                <span className="number">{seconds}</span>
                <span className="label">Seconds</span>
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
