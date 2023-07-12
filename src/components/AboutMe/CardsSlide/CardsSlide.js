import React from 'react';

export default function CardSlide({ card }) {
  const [isClicked, setClicked] = React.useState(false);

  function handleFlip() {
    isClicked ? setClicked(false) : setClicked(true);
  }

  function flipText() {
    if (isClicked) {
      setClicked(false);
    }
  }

//   setTimeout(flipText, 5000);

  return (
    <div
      onClick={handleFlip}
      className={`swiper__card ${isClicked ? `swiper__card_fliped` : ''}`}
    >
      <img alt={card.title} className="swiper__picture" src={card.image} />
      <div className="swiper__text">
        <h2 className="swiper__title">{card.title}</h2>
        <p className="swiper__about">{card.about}</p>
      </div>
    </div>
  );
}
