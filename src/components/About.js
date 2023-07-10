import myPicture from '../images/myPicture.jpg';

export default function About() {
  return (
    <div className="about">
      <img className="about__picture" alt="мое фото!" src={myPicture}></img>
      <div className="about__info">
        <ul className="about__items">
          <li className="about__item">
            <span className="about__item_span">Имя:</span>Майкл
          </li>
          <li className="about__item">
            <span className="about__item_span">Возраст:</span>25
          </li>
          <li className="about__item">
            <span className="about__item_span">Навыки:</span>JavaScript, HTML,
            CSS(По этой страничке уже должно быть понятно😃), React, Webpack,
            API
          </li>
        </ul>
      </div>
    </div>
  );
}
