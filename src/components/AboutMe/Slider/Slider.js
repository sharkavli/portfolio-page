import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import 'swiper/css/effect-fade';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

export default function Slider({ cards }) {
  const [isClicked, setClicked] = React.useState(false);

  function flip() {
    isClicked ? setClicked(false) : setClicked(true);
  }

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={200}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
    >
      {cards.map((card) => {
        return (
          <SwiperSlide
            className={`swiper__card ${isClicked ? `swiper__card_fliped` : ''}`}
            key={card.image}
            onClick={flip}
          >
            <img
              alt={card.title}
              className="swiper__picture"
              src={card.image}
            />
            <div className="swiper__text">
              <h2 className="swiper__title">{card.title}</h2>
              <p className="swiper__about">{card.about}</p>
            </div>
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>
        <img alt={cards.title} className="swiper__picture" src={cards.image} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt={cards.title} className="swiper__picture" src={valorant} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="hta" className="swiper__picture" src={gta} />
      </SwiperSlide>
      <SwiperSlide>
        <img alt="rdr" className="swiper__picture" src={rdr} />
      </SwiperSlide> */}
    </Swiper>
  );
}
