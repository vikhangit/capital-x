import React from "react";

export default function Mentor() {
  return (
    <div className="px-36">
      <div className="flex justify-between items-center">
        <h1 className="text-[54px] font-bold text-blue-700">
          TRỢ GIÚP TỪ CHUYÊN GIA
        </h1>
        <a href="/" className="flex items-center">
          <span className="text-2xl font-medium">Xem toàn bộ</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mt-1 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
      <div class="flex gap-x-10 mt-10">
        <div class="basis-1/3 flex flex-col pr-11">
          <img src="/images/advise/1.png" class="l" alt="" />
        </div>
        <div className="basis-2/3">
          <h3 className="text-6xl font-bold">ĐẶT LỊCH TƯ VẤN</h3>
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-x-6">
              <img
                src="/images/advise/icon-calendar.png"
                className="w-9 h-9"
                alt=""
              />
              <h4 className="text-4xl font-bold text-blue-700">THÁNG 3</h4>
            </div>
            <div className="flex items-center gap-x-10">
              <div className="flex items-center gap-x-2">
                <div className="bg-blue-700 text-white bg-gradient-to-b from-blue-700 to-blue-400 w-7 h-7 rounded"></div>
                <h4 className="text-base">Còn trống</h4>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="bg-gray-400 w-7 h-7 rounded"></div>
                <h4 className="text-base">Đã đặt</h4>
              </div>
            </div>
          </div>
          <div className="flex pl-16 mt-6">
            <div className="basis-1/4 flex flex-col gap-y-4">
              <div>
                <p className="text-2xl font-bold">Thứ 2</p>
                <h2 className="text-6xl font-bold">25</h2>
              </div>
              <div>
                <p className="text-2xl font-bold">Thứ 3</p>
                <h2 className="text-6xl font-bold">26</h2>
              </div>
              <div>
                <p className="text-2xl font-bold">Thứ 4</p>
                <h2 className="text-6xl font-bold">27</h2>
              </div>
              <div>
                <p className="text-2xl font-bold">Thứ 5</p>
                <h2 className="text-6xl font-bold">28</h2>
              </div>
              <button className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="flex basis-3/4 pt-4 gap-x-10 text-xl font-bold text-white text-center">
              <div className="basis-1/4 flex flex-col gap-y-14">
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg">
                  08:00 AM
                </div>
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg">
                  08:30 AM
                </div>
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg">
                  09:00 AM
                </div>
                <div className="bg-blue-700 bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg">
                  09:30 AM
                </div>
              </div>
              <div className="basis-1/4 flex flex-col gap-y-14">
                <div className="bg-blue-700 bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg">
                  10:00 AM
                </div>
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg">
                  10:30 AM
                </div>
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg">
                  11:00 AM
                </div>
                <div className="bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg">
                  11:30 AM
                </div>
              </div>
              <div className="basis-1/4 flex flex-col gap-y-14">
                <div className=" bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg">
                  01:30 PM
                </div>
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg">
                  02:00 PM
                </div>
                <div className=" bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg">
                  02:30 PM
                </div>
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg text-xl">
                  03:00 AM
                </div>
              </div>
              <div className="basis-1/4 flex flex-col gap-y-14">
                <div className="bg-gray-400 px-3 py-3.5 rounded-lg text-xl">
                  03:30 PM
                </div>
                <div className=" bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg text-xl">
                  04:00 PM
                </div>
                <div className=" bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg text-xl">
                  04:30 PM
                </div>
                <div className=" bg-gradient-to-b from-blue-700 to-blue-400 px-3 py-3.5 rounded-lg text-xl">
                  05:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-end gap-8">
        <div class="flex flex-col gap-1 basis-1/3 pr-11">
          <div class="mt-3">
            <p class="uppercase text-5xl font-bold"> Đậu MINH NHẬT </p>
            <p class="font-light text-2xl mt-2"> LOREM IPSUM </p>
          </div>
          <div class="text-base mt-5">
            dolor sit amet, consectetur adipiscing elit. Fusce finibus urna in
            sapien dignissim, nec efficitur orci interdum. Praesent elementum
            mauris vitae purus efficitur, iaculis aliquet risus semper. Sapien
            dignissim, nec efficitur orci interdum.{" "}
          </div>
          <button class="text-base font-light text-blue-700 flex items-center">
            <p class="">View more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="basis-2/3 pl-16 flex justify-between items-end">
          <div class="flex flex-col">
            <div class="text-4xl font-medium"> ACHIEVEMENTS </div>
            <div class="mt-5 text-base leading-loose">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="">
            <p className="text-4xl font-medium">999.00$/hrs</p>
            <button className="mt-8 bg-gradient-to-b from-blue-700 to-blue-400 w-full text-white text-3xl font-bold py-3.5 rounded-lg">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
