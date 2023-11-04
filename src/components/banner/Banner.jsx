import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className='pb-14'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='lg:h-[35rem] w-full rounded-sm' src="https://images.unsplash.com/photo-1504807959081-3dafd3871909?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[35rem] w-full rounded-sm' src="https://images.unsplash.com/photo-1524673035053-e260b98d2c82?auto=format&fit=crop&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[35rem] w-full rounded-sm' src="https://images.unsplash.com/photo-1635671297273-e0722e241cc0?auto=format&fit=crop&q=80&w=1878&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[35rem] w-full rounded-sm' src="https://images.unsplash.com/photo-1474992592323-229f1837e44f?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='lg:h-[35rem] w-full rounded-sm' src="https://images.unsplash.com/photo-1638289310618-927995194bfa?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="banner" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
