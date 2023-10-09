import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function MentorSwiper() {
  return (
    <div className="px-36 mt-20" id="mentor" >
      <div className="relative mt-10 z-10">
        <Swiper
          slidesPerView={4}
          //   loop={true}
          spaceBetween={20}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={true}
          modules={[Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div class="relative rounded-md">
              <img src="/images/advise/mt1.png" alt="" />
              <div class="absolute w-full -bottom-0">
                <img src="/images/advise/Rectangle.png" alt="" />
              </div>
              <div className="w-full absolute bottom-0 flex flex-col items-center">
                <h1 className="text-[54px] leading-none text-white text-center mb-8">
                  ĐẬU MINH NHẬT
                </h1>
                <div className="w-5 h-1 bg-white"></div>
                <p className="text-xl font-medium text-white mt-2">
                  Teaches Finance
                </p>
                <p className="text-xl font-medium text-white mb-3">
                  Management
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative rounded-md">
              <img src="/images/advise/mt2.png" alt="" />
              <div class="absolute w-full -bottom-0">
                <img src="/images/advise/Rectangle.png" alt="" />
              </div>
              <div className="w-full absolute bottom-0 flex flex-col items-center">
                <h1 className="text-[54px] leading-none text-white text-center mb-8">
                  LÊ BÁ TRUNG
                </h1>
                <div className="w-5 h-1 bg-white"></div>
                <p className="text-xl font-medium text-white mt-2">
                  Teaches Finance
                </p>
                <p className="text-xl font-medium text-white mb-3">
                  Management
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative rounded-md">
              <img src="/images/advise/mt3.png" alt="" />
              <div class="absolute w-full -bottom-0">
                <img src="/images/advise/Rectangle.png" alt="" />
              </div>
              <div className="absolute top-5 left-5 bg-white rounded-md text-blue-700 px-4 py-0.5 font-500">New</div>
              <div className="w-full absolute bottom-0 flex flex-col items-center">
                <h1 className="text-[54px] leading-none text-white text-center mb-8">
                  MARCUS LENG
                </h1>
                <div className="w-5 h-1 bg-white"></div>
                <p className="text-xl font-medium text-white mt-2">
                  Teaches Finance
                </p>
                <p className="text-xl font-medium text-white mb-3">
                  Management
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative rounded-md">
              <img src="/images/advise/mt4.png" alt="" />
              <div class="absolute w-full -bottom-0">
                <img src="/images/advise/Rectangle.png" alt="" />
              </div>
              <div className="w-full absolute bottom-0 flex flex-col items-center">
                <h1 className="text-[54px] leading-none text-white text-center mb-8">
                  NGUYỄN THỊ THU THẢO
                </h1>
                <div className="w-5 h-1 bg-white"></div>
                <p className="text-xl font-medium text-white mt-2">
                  Teaches Finance
                </p>
                <p className="text-xl font-medium text-white mb-3">
                  Management
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="relative rounded-md">
              <img src="/images/advise/mt1.png" alt="" />
              <div class="absolute w-full -bottom-0">
                <img src="/images/advise/Rectangle.png" alt="" />
              </div>
              <div className="w-full absolute bottom-0 flex flex-col items-center">
                <h1 className="text-[54px] leading-none text-white text-center mb-8">
                  ĐẬU MINH NHẬT
                </h1>
                <div className="w-5 h-1 bg-white"></div>
                <p className="text-xl font-medium text-white mt-2">
                  Teaches Finance
                </p>
                <p className="text-xl font-medium text-white mb-3">
                  Management
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
