export default function Menu({ onHide, onGame }) {
  function gnGame() {
    onGame('GN');
  }

  return (
    <div className="menu">
      <ul className="menu__items">
        <li onClick={gnGame} className="menu__item">
          ▶️ Guess the number!
        </li>
        <li onClick={onHide} className="menu__item">
          Hide the menu
        </li>
      </ul>
    </div>
  );
}
