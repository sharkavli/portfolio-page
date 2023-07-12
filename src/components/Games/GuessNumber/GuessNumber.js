import { GuessNumberGameplay } from './GuessNumberGameplay';
import React from 'react';

export default function GuessNumber() {
  const [isStart, setStart] = React.useState(false);

  function startGame() {
    setStart(true);
  }

  return (
    <div className="guess-number">
      {isStart ? (
        <GuessNumberGameplay />
      ) : (
        <div className="guess-number__start-menu">
          <div className="guess-number_strip"></div>
          <div className="guess-number_strip2"></div>
          <h1 className="guess-number__text">Guess the number!</h1>
          <button onClick={startGame} className="guess-number__start">
            Start
          </button>
        </div>
      )}
    </div>
  );
}
