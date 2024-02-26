import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const CarouselMain = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} dots"></span>`;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="container !px-4 md:!mx-0 mt-8 mb-16 lg:mb-36"
      breakpoints={{
        slidesPerView: 1,
        spaceBetween: 8,
        640: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 8,
          slidesPerGroup: 2,
        },
      }}
    >
      {items &&
        items.map((e, index) => (
          <SwiperSlide key={index} className="">
            <img
              className="rounded-lg mb-4 h-52 object-cover w-full"
              src={e.img.src}
              alt="carousel images"
            />

            <h3 className="font-sans font-medium text-center text-primary-500 text-base pb-12 px-4">
              {e.title}
            </h3>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CarouselMain;
