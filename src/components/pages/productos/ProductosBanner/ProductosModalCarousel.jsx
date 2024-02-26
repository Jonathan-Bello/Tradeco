import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const BannerModalCarousel = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
      className="container max-h-96"
    >
      {items &&
        items.map((e, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            <img
              className="rounded-lg object-cover"
              src={e.src}
              alt="carousel images"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default BannerModalCarousel;
