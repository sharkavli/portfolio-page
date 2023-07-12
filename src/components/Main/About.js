import myPicture from '../../images/myPicture.jpg';

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
          <li className="about__item">
            <span className="about__item_span">Не умею:</span>В дизайн. По этому
            сайту должно быть понятно, но я старался больше показать свои
            возможности кодинга. Дизайн странички разрабатывал я, как умею🤓
          </li>
          <li className="about__item">
            <span className="about__item_span">Контакты: </span>
          </li>
          <li className="about__item">
            <span className="about__item_span">Telegram: </span>
            @avli29
            <span className="about__item_span"> E-mail: </span>
            saidovavli@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
}
