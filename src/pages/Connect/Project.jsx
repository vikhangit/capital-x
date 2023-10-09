import { Tabs } from "flowbite-react";
import React, { useState } from "react";

export default function Project() {
  const [activeParent, setActiveParent] = useState(0);
  const customTheme = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        pills:
          "flex justify-between font-semibold text-xl text-gray-500 dark:text-gray-400 gap-x-6 px-36 mt-5",
      },
      tabitem: {
        base: "flex items-center p-4 px-8 rounded-t-lg font-bold",
        styles: {
          pills: {
            base: "basis-1/4",
            active: {
              on: "rounded-lg bg-blue-700 text-white bg-gradient-to-b from-blue-700 to-blue-400",
              off: "rounded-lg bg-blue-700 bg-opacity-10 text-black hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
      styles: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: "",
      },
    },
    tabpanel: "mt-10",
  };
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
      <h1 className="text-[54px] font-medium text-blue-700 text-center mb-8">
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

      <div className="mb-4">
        <Tabs.Group aria-label="Pills" style="pills" theme={customTheme}>
          <Tabs.Item active title="TÊN DỰ ÁN">
            <div
              className="relative"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <img src="/images/connect/ing.png" alt="" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10">
                <button class="px-4 uppercase bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-xl py-2 !px-10">
                  XEM THÔNG TIN
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="TÊN DỰ ÁN">
            <div
              className="relative"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <img src="/images/connect/ing.png" alt="" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10">
                <button class="px-4 uppercase bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-xl py-2 !px-10">
                  XEM THÔNG TIN
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="TÊN DỰ ÁN">
            <div
              className="relative"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <img src="/images/connect/ing.png" alt="" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10">
                <button class="px-4 uppercase bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-xl py-2 !px-10">
                  XEM THÔNG TIN
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="TÊN DỰ ÁN">
            <div
              className="relative"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <img src="/images/connect/ing.png" alt="" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10">
                <button class="px-4 uppercase bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-xl py-2 !px-10">
                  XEM THÔNG TIN
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="TÊN DỰ ÁN">
            <div
              className="relative"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <img src="/images/connect/ing.png" alt="" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10">
                <button class="px-4 uppercase bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-xl py-2 !px-10">
                  XEM THÔNG TIN
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="TÊN DỰ ÁN">
            <div
              className="relative"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <img src="/images/connect/ing.png" alt="" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10">
                <button class="px-4 uppercase bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-xl py-2 !px-10">
                  XEM THÔNG TIN
                </button>
              </div>
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
