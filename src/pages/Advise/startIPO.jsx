import React, { useState } from 'react'

export default function StartIPO() {
  const [activeParent, setActiveParent] = useState(0);
  const tabPrarent = [
    {
      id: 1,
      title: "Việt nam",
    },
    {
      id: 2,
      title: "Thái lan",
    },
    {
      id: 3,
      title: "Hàn Quốc",
    },
    {
      id: 4,
      title: "Hoa kỳ",
    },
    {
      id: 5,
      title: "Anh",
    },
    {
      id: 6,
      title: "Hà Lan",
    },
  ];
  return (
    <div className="mt-10">
      <h1 className="text-[54px] font-bold text-blue-700 mb-16 px-36">
        DỰ ÁN TIÊU BIỂU
      </h1>
      <div className="flex justify-between mb-10 relative z-20 border-blue-700">
        <div className="pl-32 border-blue-700 border-b-4"></div>

        {tabPrarent.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full  border-blue-700 border-b-4 flex justify-center relative"
            >
              <button
                className={`border-blue-700 text-blue-700 ${
                  activeParent === index && "bg-white border-4 border-b-0"
                } absolute -bottom-1 rounded-t-lg text-3xl font-semibold px-10 py-4 uppercase`}
                onClick={() => setActiveParent(index)}
              >
                {item.title}
              </button>
            </div>
          );
        })}
        <button className="border-blue-700 text-blue-700 border-b-4 py-4">
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
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="pr-32 border-blue-700 border-b-4"></div>
      </div>
      <div className="px-36 py-10">
        <div className="flex items-center mt-16">
          <img src="/images/advise/ghtk.png" alt="" />
          <div className="pl-24 w-full grid grid-cols-9 gap-x-1">
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700 relative">
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-blue-700 font-bold">
                PE
              </div>
            </div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
          </div>
        </div>
        <div className="flex items-center mt-28">
          <img src="/images/advise/images1.png" alt="" />
          <div className="pl-24 w-full grid grid-cols-9 gap-x-1">
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700 relative">
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-blue-700 font-bold w-5/6 text-center">
                BUILD UP
              </div>
            </div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
          </div>
        </div>
        <div className="flex items-center mt-28">
          <img src="/images/advise/629eb1bcc4f5c8_342547341.png" alt="" />
          <div className="pl-24 w-full grid grid-cols-9 gap-x-1">
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700 relative">
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-blue-700 font-bold text-center">
                ANGLE
              </div>
            </div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
          </div>
        </div>
        <div className="flex items-center mt-28">
          <img src="/images/advise/mg4.png" alt="" />
          <div className="pl-24 w-full grid grid-cols-9 gap-x-1">
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700"></div>
            <div className="h-2 bg-blue-700 relative">
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-3xl text-blue-700 font-bold">
                CV
              </div>
            </div>
            <div className="h-2 bg-blue-400"></div>
            <div className="h-2 bg-gray-400"></div>
            <div className="h-2 bg-gray-400"></div>
          </div>
        </div>
        <div className="flex gap-x-4 text-xl mt-20 text-black font-medium">
          <button className="text-blue-700 font-bold">1</button>
          <button>2</button>
          <button>3</button>
          ...
          <button>12</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}
