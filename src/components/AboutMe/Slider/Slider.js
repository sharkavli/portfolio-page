import CardSlide from '../CardsSlide/CardsSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';

export default function Slider({ cards }) {
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
          <SwiperSlide key={card.image}>
            <CardSlide card={card} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
