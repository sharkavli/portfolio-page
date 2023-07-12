import React from 'react';

export const GuessNumberGameplay = React.memo(() => {
  const number = Math.random();

  return (
    <div className="gn">
      <h1 className="gn__random-number">{number}</h1>
    </div>
  );
});
