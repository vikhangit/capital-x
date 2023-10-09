import { Tabs } from 'flowbite-react';
import React, { useRef, useState } from 'react'

export default function Solution() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const customTheme = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        pills:
          "flex justify-between font-semibold text-3xl text-gray-500 dark:text-gray-400 gap-x-6",
      },
      tabitem: {
        base: "flex items-center justify-center p-4 rounded-t-lg font-medium first:ml-0",
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
    tabpanel: "mt-20",
  };
  return (
    <div className="mt-10">
      <h1 className="text-[54px] font-medium text-blue-700 text-center mb-8">
        GIẢI PHÁP BÁN HÀNG TỪ ONLINE ĐẾN OFFLINE
      </h1>
      <div className="mb-4 px-40">
        <Tabs.Group
          aria-label="Pills"
          style='pills'
          theme={customTheme}
          ref={tabsRef}
          onActiveTabChange={(tab) => setActiveTab(tab)}
        >
          <Tabs.Item active title="BÁN HÀNG ĐA KÊNH">
            <div
              className=" flex"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="basis-1/2">
                <img src="/images/home/gp1.png" alt="" />
              </div>
              <div className="basis-1/2 pl-32">
                <h2 className="text-4xl font-medium text-black">
                  PHẦN MỀM QUẢN LÝ BÁN HÀNG ĐA KÊNH TẬP TRUNG
                </h2>
                <p className="text-lg font-light my-8">
                  Quản lý các hoat động bán hàng trực tuyến trên nhiều kênh khác
                  nhau một cách dễ dàng, hiệu quả và tiết kiệm thời gian, tăng
                  cường khả năng tiếp cận với khách hàng đồng thời tối ưu hóa
                  quy trình bán hàng và giảm thiểu sai sót, giúp bạn tăng doanh
                  số và nâng cao hiệu quà kinh doanh.
                </p>
                <button class="mt-2 px-3 uppercase sm:mt-4 bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-6 py-2 !px-10">
                  Dùng thử miễn phí
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="BÁN HÀNG TRÊN SOCIAL">
            <div
              className=" flex"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="basis-1/2 pr-32">
                <h2 className="text-4xl font-medium text-black">
                  PHẦN MỀM QUẢN LÝ BÁN HÀNG ĐA KÊNH TẬP TRUNG
                </h2>
                <p className="text-lg font-light my-8">
                  Quản lý các hoat động bán hàng trực tuyến trên nhiều kênh khác
                  nhau một cách dễ dàng, hiệu quả và tiết kiệm thời gian, tăng
                  cường khả năng tiếp cận với khách hàng đồng thời tối ưu hóa
                  quy trình bán hàng và giảm thiểu sai sót, giúp bạn tăng doanh
                  số và nâng cao hiệu quà kinh doanh.
                </p>
                <button class="mt-2 px-3 uppercase sm:mt-4 bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-6 py-2 !px-10">
                  Dùng thử miễn phí
                </button>
              </div>
              <div className="basis-1/2">
                <img src="/images/home/gp1.png" alt="" />
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="SÀN THƯƠNG MẠI ĐIỆN TỬ">
            <div
              className=" flex"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="basis-1/2">
                <img src="/images/home/gp1.png" alt="" />
              </div>
              <div className="basis-1/2 pl-32">
                <h2 className="text-4xl font-medium text-black">
                  PHẦN MỀM QUẢN LÝ BÁN HÀNG ĐA KÊNH TẬP TRUNG
                </h2>
                <p className="text-lg font-light my-8">
                  Quản lý các hoat động bán hàng trực tuyến trên nhiều kênh khác
                  nhau một cách dễ dàng, hiệu quả và tiết kiệm thời gian, tăng
                  cường khả năng tiếp cận với khách hàng đồng thời tối ưu hóa
                  quy trình bán hàng và giảm thiểu sai sót, giúp bạn tăng doanh
                  số và nâng cao hiệu quà kinh doanh.
                </p>
                <button class="mt-2 px-3 uppercase sm:mt-4 bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-6 py-2 !px-10">
                  Dùng thử miễn phí
                </button>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="BÁN TẠI CỬA HÀNG">
            <div
              className=" flex"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="basis-1/2 pr-32">
                <h2 className="text-4xl font-medium text-black">
                  PHẦN MỀM QUẢN LÝ BÁN HÀNG ĐA KÊNH TẬP TRUNG
                </h2>
                <p className="text-lg font-light my-8">
                  Quản lý các hoat động bán hàng trực tuyến trên nhiều kênh khác
                  nhau một cách dễ dàng, hiệu quả và tiết kiệm thời gian, tăng
                  cường khả năng tiếp cận với khách hàng đồng thời tối ưu hóa
                  quy trình bán hàng và giảm thiểu sai sót, giúp bạn tăng doanh
                  số và nâng cao hiệu quà kinh doanh.
                </p>
                <button class="mt-2 px-3 uppercase sm:mt-4 bg-gradient-to-b from-blue-700 to-blue-400 text-white rounded text-6 py-2 !px-10">
                  Dùng thử miễn phí
                </button>
              </div>
              <div className="basis-1/2">
                <img src="/images/home/gp1.png" alt="" />
              </div>
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
