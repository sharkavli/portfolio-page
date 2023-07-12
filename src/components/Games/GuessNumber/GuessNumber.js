import { GuessNumberGameplay } from './GuessNumberGameplay';
import React from 'react';

export default function GuessNumber() {
  const [isStart, setStart] = React.useState(false);
  const [number, setNumber] = React.useState();
  const [answer, setAnswer] = React.useState('?');

  function startGame() {
    setStart(true);
    setNumber(Math.floor(Math.random() * 10 + 1));
    setAnswer('?');
  }

  return (
    <div className="guess-number">
      {isStart ? (
        <GuessNumberGameplay
          setAnswer={setAnswer}
          answer={answer}
          restart={startGame}
          number={number}
        />
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
