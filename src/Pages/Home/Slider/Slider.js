import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../../assets/logo/Screenshot (380).png'
import img2 from '../../../assets/logo/Screenshot (380).png'
import img3 from '../../../assets/logo/Screenshot (380).png'
import img4 from '../../../assets/logo/Screenshot (380).png'
import img5 from '../../../assets/logo/Screenshot (380).png'
import img6 from '../../../assets/logo/Screenshot (380).png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div className='mb-8 border-2 p-3 rounded-lg bg-slate-200'>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Slider;