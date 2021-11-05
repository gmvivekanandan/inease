import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="h-96"
    >
      <SwiperSlide>
        <Image src="/michael-dolejs-hAVPg-JLGfo-unsplash.jpg" layout="fill" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/legalhelp-bg-compressor.jpg" layout="fill" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/parallax_bridge1.jpg" layout="fill" />
      </SwiperSlide>
    </Swiper>
  );
}
