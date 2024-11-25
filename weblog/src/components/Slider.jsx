import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Blog from './Blog';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return ( 
        
        <div id="container" className="bg-[#3F3F3F] w-[1020px] h-[400px] ml-[20px] rounded-[2rem]">

<Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide><Blog></Blog></SwiperSlide>
              <SwiperSlide><Blog></Blog></SwiperSlide>
              <SwiperSlide><Blog></Blog></SwiperSlide>
              <SwiperSlide><Blog></Blog></SwiperSlide>
            
</Swiper>

        </div>

     );
    }
 
export default Slider;
