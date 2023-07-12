import React from 'react';

export const GuessNumberGameplay = React.memo(
  ({ setAnswer, answer, number, restart }) => {
    console.log(number);
    const [res, setResponse] = React.useState('');
    const [wrong, setWrong] = React.useState(false);
    const [text, setText] = React.useState('Guess and press');

    function checkResponse() {
      if (number == res) {
        setAnswer(number);
        insertText('You won!');
        setTimeout(restart, 5000);
      } else if (res < number) {
        insertText('Take higher!');
        setWrong(true);
      } else if (res > number) {
        insertText('Take lower!');
        setWrong(true);
      }
    }

    function resetRed() {
      if (wrong) {
        setWrong(false);
      }
    }

    setTimeout(resetRed, 1000);

    function insertText(textRes) {
      setText(textRes);
    }

    return (
      <div className={`gn ${wrong ? `gn_wrong` : ''}`}>
        <h1 className="guess-number__text">Guess the number!</h1>
        <div className="gn__strip"></div>
        <h1 className="gn__random-number">{answer}</h1>
        <p className="gn__result">– {text} –</p>
        <div className="gn__strip2"></div>
        <input
          onChange={(evt) => setResponse(evt.target.value)}
          required
          maxLength={2}
          className="gn__answer"
        />
        <div className="gn__controls">
          <button
            onClick={() => {
              checkResponse();
              console.log(number);
            }}
            type="submit"
            className="gn__submit"
          >
            Check
          </button>
          <button className="gn__restart" onClick={restart}>
            Again
          </button>
        </div>
      </div>
    );
  }
);
