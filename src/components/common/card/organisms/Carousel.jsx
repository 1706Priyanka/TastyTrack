import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Carousel = ({ items, renderItem, chunkSize }) => {
  const itemChunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    itemChunks.push(items.slice(i, i + chunkSize));
  }

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-full h-auto"
      slidesPerView='auto'
    >
      {itemChunks.map((chunk, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-evenly">
            {chunk.map((item, i) => (
              <div className="min-w-[20%] max-w-[22%]" key={i}>
                {renderItem(item)}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
