import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function Customer() {
     const [swiper, setSwiper] = useState(null);
     const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="px-36" id="connect">
      <h1 className="text-[54px] font-medium max-w-[500px]">
        CUSTOMER ALSO PURCHASE
      </h1>
      <div className="relative mt-10 z-10">
        <Swiper
          slidesPerView={4}
          //   loop={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination]}
          className="w-full h-full"
          style={{
            paddingBottom: 80,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiper(swiper)}
          onActiveIndexChange={(s) => setActiveSlide(s.realIndex)}
        >
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer1.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Nuvi Sữa thạch lúa mạch (thùng 48 hộp)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">323.000 đ</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer2.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Nuvi sữa chua dâu ép túi (thùng 24 túi)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">103.000 đ</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer3.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Sữa bột varma complete (Lon 850g)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">645.000 đ</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer4.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Sữa bột varma diabetes (lon 850g)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">645.000 đ</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer1.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Nuvi Sữa thạch lúa mạch (thùng 48 hộp)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">323.000 đ</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer2.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Nuvi sữa chua dâu ép túi (thùng 24 túi)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">103.000 đ</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer3.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Sữa bột varma complete (Lon 850g)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">645.000 đ</h2>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-100 flex justify-center items-center min-h-[400px]">
              <img
                src="/images/connect/customer4.png"
                alt=""
                
              />
            </div>
            <h3 className="text-2xl font-light mt-4">
              Sữa bột varma diabetes (lon 850g)
            </h3>
            <h2 className="text-3xl font-semibold mt-2">645.000 đ</h2>
          </SwiperSlide>
        </Swiper>
        <div>
          <button
            className="absolute top-1/2 -left-12 z-20 -translate-y-1/2"
            onClick={() => swiper.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 -right-12 -translate-y-1/2 z-40"
            onClick={() => swiper.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
