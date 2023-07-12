import Header from '../Header';
import React from 'react';
import Menu from './menu/menu';
import GuessNumber from './GuessNumber/GuessNumber';

export default function Games() {
  const [isHide, setHide] = React.useState(false);
  const [isShown, setIsShown] = React.useState(true);
  const [game, setGame] = React.useState('');

  function handleShowMenu() {
    isHide ? setHide(false) : setHide(true);
  }

  function handleHideHeader() {
    isShown ? setIsShown(false) : setIsShown(true);
  }

  function chooseGame(game) {
    setGame(game);
    handleShowMenu();
  }

  return (
    <div className="games">
      {isShown && <Header />}
      <div
        style={{ width: '100%', height: '100px' }}
        onMouseEnter={handleHideHeader}
      />
      {isHide ? (
        <Menu onGame={chooseGame} game={game} onHide={handleShowMenu} />
      ) : (
        <button onClick={handleShowMenu} className="games__return-menu">
          ⏭️
        </button>
      )}
      {game === 'GN' ? (
        <GuessNumber />
      ) : (
        <h1 style={{ color: 'white', fontSize: '24px', textAlign: 'center' }}>
          Выбери игру!
        </h1>
      )}
    </div>
  );
}
