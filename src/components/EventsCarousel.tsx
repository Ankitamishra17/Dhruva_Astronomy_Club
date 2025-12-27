import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Helper to handle the double space in specific filenames
const getSlideImage = (index: number) => {
    if (index === 1) return '/images/Slide Item 1.png';
    return `/images/Slide Item  ${index}.png`;
};

const EventsCarousel = () => {
    return (
        <section className="w-full my-10 md:py-24 px-0 flex flex-col items-center gap-16 relative z-10">
            <h2 className="text-lg md:text-xl font-bold tracking-[0.3em] font-montserrat uppercase text-center text-white">
                What’s it like when we have events
            </h2>

            <div className="w-full px-4 md:px-0">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper w-full max-w-[1600px] pb-20!"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            coverflowEffect: {
                                depth: 100,
                                modifier: 1,
                            },
                        },
                        1024: {
                            slidesPerView: 'auto',
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 250,
                                depth: 350,
                                modifier: 1,
                                slideShadows: false,
                            },
                        },
                    }}
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <SwiperSlide key={i} className="w-[300px]! md:w-[450px]! lg:w-[700px]! lg:h-[400px]! rounded-3xl overflow-hidden transition-all duration-500">
                            {({ isActive }) => (
                                <div className={`w-full h-full relative transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-90 scale-90'}`}>
                                    <img
                                        src={getSlideImage(i)}
                                        alt={`Event Slide ${i}`}
                                        className="w-full h-full object-cover rounded-3xl"
                                    />
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation & Pagination Container */}
                <div className="flex z-10 items-center justify-center gap-8 mt-4 absolute bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2">
                    <button className="custom-prev text-white hover:text-gray-300 transition-colors cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
                    </button>
                    <div className="custom-pagination flex gap-2 w-auto!"></div>
                    <button className="custom-next text-white hover:text-gray-300 transition-colors cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                    </button>
                </div>

                <style>{`
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.3;
                    width: 8px;
                    height: 8px;
                    margin: 0 4px !important;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #6D28D9; /* Purple accent */
                }
            `}</style>
            </div>
        </section >
    );
};

export default EventsCarousel;
