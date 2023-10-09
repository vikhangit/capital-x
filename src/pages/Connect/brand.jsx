import React from 'react'

export default function Brand() {
  return (
    <div className="px-36 mt-20">
      <h1 className="text-[54px] font-medium">THƯƠNG HIỆU TIÊU BIỂU</h1>
      <div className="grid grid-cols-4 mt-10 gap-x-4 gap-y-4">
        <div className="h-[260px] bg-black flex justify-center items-center">
          <img src="/images/connect/brand1.png" alt="" />
        </div>
        <div className="h-[260px] bg-[#FA421A] flex justify-center items-center">
          <img src="/images/connect/brand2.png" alt="" />
        </div>
        <div className="h-[260px] bg-[#E90000] flex justify-center items-center">
          <img src="/images/connect/brand3.png" alt="" />
        </div>
        <div className="h-[260px] bg-black flex justify-center items-center">
          <img src="/images/connect/brand4.png" alt="" />
        </div>
        <div className="h-[260px] flex justify-center items-center">
          <img
            src="/images/connect/brand5.png"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div className="h-[260px] flex bg-[#002F7C] justify-center items-center">
          <img
            src="/images/connect/brand6.png"
            className="w-full h-full"
            alt=""
          />
        </div>
        <div className="h-[260px] flex justify-center items-center">
          <img
            src="/images/connect/brand7.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="h-[260px] flex bg-[#1A68FA] justify-center items-center">
          <img src="/images/connect/brand8.png" alt="" />
        </div>
      </div>
    </div>
  );
}
