import FlipCountdown from "@rumess/react-flip-countdown";
import './timer.css';

export function Timer() {
  const date = '2021-09-25 18:00:00';
  return (
    <div className="timer-container">
      <div className="time-to-start-text">Do rozpoczęcia turnieju pozostało:</div>
      <FlipCountdown endAt={date}
                     titlePosition='bottom'
                     hideYear
                     hideMonth
                     dayTitle='dni'
                     hourTitle='godzin'
                     minuteTitle='minut'
                     secondTitle='sekund'/>
    </div>
  );
}