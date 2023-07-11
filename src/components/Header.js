import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="header__routes">
        <ul className="header__items">
          <Link className="header__item" to="/portfolio-page">
            🏠
          </Link>
          <Link className="header__item" to="/about-me">
            Обо мне
          </Link>
          <Link className="header__item" to="/projects">
            Проекты
          </Link>
          <Link className="header__item" to="/cooperation">
            Сотрудничество
          </Link>
          <Link className="header__item" to="/social">
            Соц-сети
          </Link>
        </ul>
      </div>
    </div>
  );
}
