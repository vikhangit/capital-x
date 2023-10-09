import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="relative w-full">
      <img src="/images/banner/controlpanel.png" alt="" />
      <div className="absolute w-7/12 h-auto top-1 left-14 translate-x-1/3 translate-y-28">
        <img src="/images/banner/built.png" alt="" />
      </div>
      <div className="absolute bottom-10 right-10">
        <img src="/images/banner/man.png" alt="" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-9/12">
        <div className="relative">
          <img src="/images/banner/Vector.png" alt="" />
        </div>
        <div className="">
          <Link to={"/dao-tao"}>
            <div className="absolute top-0 left-0 translate-y-14 translate-x-36 w-52">
              <img src="/images/banner/ellipse.png" alt="" />
              <p className="text-3xl font-medium mt-14 ml-3">Đào tạo</p>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="absolute top-0 left-1/3 translate-x-20 translate-y-60 w-52">
              <img src="/images/banner/ellipse.png" alt="" />
              <p className="text-3xl font-medium mt-14 ml-3">
                Quản lý doanh nghiệp
              </p>
            </div>
          </Link>
          <Link to={"/ket-noi"}>
            <div className="absolute top-1/2 right-1/3 translate-y-24 translate-x-32 w-40">
              <img src="/images/banner/ellipse.png" alt="" />

              <p className="text-3xl font-medium mt-12">Kết nối cộng đồng</p>
            </div>
          </Link>
          <Link to={"/tu-van"}>
            <div className="absolute top-0 right-0 translate-y-16 -translate-x-36 w-40">
              <div className="rounded-full bg-[#2970F5] w-32 h-32 flex justify-center items-center">
                <img
                  src="/images/banner/business.png"
                  alt=""
                  className="w-16 h-16"
                />
              </div>
              <p className="text-3xl font-medium mt-4 ml-8">Tư vấn</p>
            </div>
          </Link>
          <Link to="/thu-vien-luat">
            <div className="absolute top-0 right-0 -translate-y-6 translate-x-28 w-32">
              <img src="/images/banner/ellipse.png" alt="" />
              <p className="text-3xl font-medium mt-4">Thư viện luật</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-40 gap-x-4 flex">
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
      </div>
    </div>
  );
}
