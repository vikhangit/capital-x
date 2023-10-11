import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="relative w-full">
      <img src="/images/banner/controlpanel.png" alt="" />
      <div className="absolute w-7/12 h-auto top-0 left-0 translate-x-1/2  sm:translate-x-1/3 translate-y-1/4 sm:translate-y-14 lg:translate-y-16 xl:translate-y-20 2xl:translate-y-24">
        <img src="/images/banner/built.png" alt="" />
      </div>
      <div className="absolute bottom-4 right-4 sm:right-10 sm:bottom-10 hidden md:block">
        <img
          src="/images/banner/man.png"
          className="w-12 h-24 sm:w-28 sm:h-56 xl:w-2/3 2xl:w-full"
          alt=""
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-9/12">
        <div className="relative">
          <img src="/images/banner/Vector.png" alt="" />
        </div>
        <div className="">
          <Link to="/dao-tao">
            <div className="absolute top-0 left-0 translate-y-1 translate-x-4 sm:translate-y-4  sm:translate-x-14 2xl:translate-y-14 2xl:translate-x-36">
              <img
                src="/images/banner/ellipse.png"
                className="w-4 h-4 sm:h-6 sm:w-6 lg:w-auto lg:h-auto"
                alt=""
              />
              <p className="text-sm sm:text-md lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mt-4 lg:mt-6 xl:mt-10 2xl:mt-16">
                Đào tạo
              </p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="absolute top-0 left-0 translate-x-20 translate-y-6 sm:translate-x-52 sm:translate-y-20 lg:translate-x-72 lg:translate-y-28 xl:translate-x-96 xl:translate-y-32 w-16 sm:w-28 md:w-28 lg:w-36 xl:w-56">
              <div className="rounded-full bg-[#2970F5] w-8 h-8 sm:h-10 sm:w-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 flex justify-center items-center">
                <img
                  src="/images/banner/business.png"
                  alt=""
                  className="w-4 h-4 sm:h-6 sm:w-6 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                />
              </div>
              <p className="font-medium text-sm sm:text-md lg:text-xl xl:text-2xl 2xl:text-3xl  mt-4 ml-0 sm:ml-2 lg:mt-8">
                Quản lý doanh nghiệp
              </p>
            </div>
          </Link>
          <Link to={"/ket-noi"}>
            <div className="absolute top-0 right-0 translate-y-14 -translate-x-16 sm:translate-y-20 sm:-translate-x-20 md:translate-y-28 md:-translate-x-36 lg:translate-y-28 lg:-translate-x-24 xl:translate-y-44 xl:-translate-x-52 w-16 sm:w-20 md:w-20 lg:w-40">
              <img
                src="/images/banner/ellipse.png"
                className="w-4 h-4 sm:h-6 sm:w-6 lg:w-auto lg:h-auto"
                alt=""
              />
              <p className="text-sm sm:text-md lg:text-xl xl:text-2xl 2xl:text-3xl  font-medium mt-4 lg:mt-6 xl:mt-10 2xl:mt-12 font-medium">
                Kết nối cộng đồng
              </p>
            </div>
          </Link>
          <Link to="/tu-van">
            <div
              className="absolute top-0 right-0 -translate-x-7 translate-y-7 
            md:-translate-x-16 md:translate-y-12 lg:-translate-x-18 lg:translate-y-12 2xl:translate-y-28 2xl:-translate-x-36 2xl:translate-y-28 2xl:-translate-x-36"
            >
              <img
                src="/images/banner/ellipse.png"
                className="w-4 h-4 sm:h-6 sm:w-6 lg:w-auto lg:h-auto"
                alt=""
              />
              <p className="font-medium text-sm sm:text-md lg:text-xl xl:text-2xl 2xl:text-3xl  font-medium mt-2 sm:mt-4 font-medium">
                Tư vấn
              </p>
            </div>
          </Link>
          <Link to="/thu-vien-luat">
            <div
              className="absolute top-0 right-0 -translate-y-3 translate-x-12 sm:-translate-y-4 
            sm:translate-x-16
             md:-translate-y-3 
            md:translate-x-16 lg:-translate-y-6 lg:translate-x-28 w-14 sm:w-20 lg:w-32"
            >
              <img
                src="/images/banner/ellipse.png"
                className="w-4 h-4 sm:h-6 sm:w-6 lg:w-auto lg:h-auto"
                alt=""
              />
              <p className="font-medium text-sm sm:text-md lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mt-2 sm:mt-4">
                Thư viện luật
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="absolute bottom-10 left-40 gap-x-4 flex">
        <button className="text-[#2970F5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button className="text-[#2970F5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
