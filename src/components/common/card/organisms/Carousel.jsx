import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Thumbnail from "../atoms/Thumbnail";

const Carousel = () => {
    const resturantData ={
        image:  `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg`,
        name:'Pizza Hut',
        rating: 4.5,
        deliveryTime: '30-60 mins',
        address: 'Bengaluru, Karnataka',
        cuisine: 'Italian, Pizza,utyg o876ytuf 86ydtuyg 6rydty 87r6dtuy iuytdfhj'
      }
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="w-full h-[300px]"
    >
      <SwiperSlide >
      <div className="flex justify-evenly">
      <Thumbnail src={resturantData.image} alt={resturantData.name} className='rounded-md h-[170px] w-[200px]' />
      <Thumbnail src={resturantData.image} alt={resturantData.name} className='rounded-md h-[170px] w-[200px]' />
      <Thumbnail src={resturantData.image} alt={resturantData.name} className='rounded-md h-[170px] w-[200px]' />
      </div>

      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center">
      <div className="flex justify-evenly">
      <Thumbnail src={resturantData.image} alt={resturantData.name} className='rounded-md h-[170px] w-[200px]' />
      <Thumbnail src={resturantData.image} alt={resturantData.name} className='rounded-md h-[170px] w-[200px]' />
      <Thumbnail src={resturantData.image} alt={resturantData.name} className='rounded-md h-[170px] w-[200px]' />
      </div>
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Carousel;
