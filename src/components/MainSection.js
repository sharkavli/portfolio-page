import iconReact from '../images/iconReact.png';
import iconHtml from '../images/iconHtml.png';
import iconJs from '../images/iconJavaScript.png';
import iconCss from '../images/iconCss.png';
import iconWebpack from '../images/iconWebpack.png';
import iconNode from '../images/iconNode.png';
import React from 'react';

export default function MainSection() {
  const [isReactClicked, setReactClicked] = React.useState(false);
  const [isJsClicked, setJsClicked] = React.useState(false);
  const [isHtmlClicked, setHtmlClicked] = React.useState(false);
  const [isCssClicked, setCssClicked] = React.useState(false);
  const [isWebpackClicked, setWebpackClicked] = React.useState(false);
  const [isNodeClicked, setNodeClicked] = React.useState(false);

  function flipReact() {
    isReactClicked ? setReactClicked(false) : setReactClicked(true);
  }

  function flipJs() {
    isJsClicked ? setJsClicked(false) : setJsClicked(true);
  }
  function flipHtml() {
    isHtmlClicked ? setHtmlClicked(false) : setHtmlClicked(true);
  }
  function flipCss() {
    isCssClicked ? setCssClicked(false) : setCssClicked(true);
  }
  function flipWebpack() {
    isWebpackClicked ? setWebpackClicked(false) : setWebpackClicked(true);
  }
  function flipNode() {
    isNodeClicked ? setNodeClicked(false) : setNodeClicked(true);
  }

  return (
    <div className="main-section">
      <h1 className="main-section__title">Технологии на этом сайте:</h1>
      <div className="main-section__steck-items">
        <div
          onClick={flipReact}
          className={`main-section__card ${
            isReactClicked ? `main-section__card_flip` : ''
          }`}
        >
          <img
            className="main-section__card-picture"
            alt="react icon"
            src={iconReact}
          />
          <p className="main-section__card-text">
            Реакт очень крутой инструмент, который позволяет писать очень крутые
            приложения. После моего знакомства я сразу в него влюбился. А рекат
            нейтив стал моим хобби❤️
          </p>
        </div>

        <div
          onClick={flipJs}
          className={`main-section__card ${
            isJsClicked ? `main-section__card_flip` : ''
          }`}
        >
          <img
            className="main-section__card-picture"
            alt="js icon"
            src={iconJs}
          />
          <p className="main-section__card-text">
            Мой самый первый язык программирования, который я когда-либо изучал.
            Его без конца ругают, и, разумеется, за дело. И все же я хочу
            спросить - кто написал четыре миллиона сайтов?
          </p>
        </div>

        <div
          onClick={flipHtml}
          className={`main-section__card ${
            isHtmlClicked ? `main-section__card_flip` : ''
          }`}
        >
          <img
            className="main-section__card-picture"
            alt="html icon"
            src={iconHtml}
          />
          <p className="main-section__card-text">
            Изучал его еще в школе, на уроках информатики. Тогда и полюбил
            программирование
          </p>
        </div>

        <div
          onClick={flipCss}
          className={`main-section__card ${
            isCssClicked ? `main-section__card_flip` : ''
          }`}
        >
          <img
            className="main-section__card-picture"
            alt="css icon"
            src={iconCss}
          />
          <p className="main-section__card-text">
            Никогда не мог его нормально охорактеризовать. Это не язык
            программирования, но что я делаю? Просто пишу? Звучит странно. Но
            инструмент полезный и крутой
          </p>
        </div>

        <div
          onClick={flipWebpack}
          className={`main-section__card ${
            isWebpackClicked ? `main-section__card_flip` : ''
          }`}
        >
          <img
            className="main-section__card-picture"
            alt="webpack icon"
            src={iconWebpack}
          />
          <p className="main-section__card-text">
            Полезная штука, которая позволила этой страничке загрузиться на пару
            сотых милисекунд загрузиться быстрее😄
          </p>
        </div>

        <div
          onClick={flipNode}
          className={`main-section__card ${
            isNodeClicked ? `main-section__card_flip` : ''
          }`}
        >
          <img
            className="main-section__card-picture"
            alt="node icon"
            src={iconNode}
          />
          <p className="main-section__card-text">
            Волшебная штука благодаря которой можно работать fullstack и не
            учить еще один язык
          </p>
        </div>
      </div>
    </div>
  );
}
