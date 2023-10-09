import React from "react";
import Question from "./table";

export default function STitle() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/library/court.png)",
          backgroundSize: "100%",
        }}
      >
        <img
          src="/images/library/s1_title 1.png"
          alt=""
          class="mx-auto py-20"
        />
        <div class="px-40 xl:block w-full bg-white py-10 lg:py-30">
          <div class="w-95% lg: mx-auto relative z-2 rounded-md main flex justify-center">
            <img
              alt=""
              src="/images/library/can.png"
              class="w-full h-full sm:h-745px rounded-md"
            />
            <div class="bg-white flex gap-2 sm:gap-x-6 z-3 justify-center font-bold text-white w-full px-12 sm:w-full h-1/2 pb-1 sm:px-20 sm:pb-5 sm:flex-row absolute top-0">
              <div class="child bg1 z-3 flex flex-col gap-1 lg:gap-4 items-center justify-center w-full lg:w-2/5 rounded-md relative">
                <div class="w-[120px] h-[120px]">
                  <img src="/images/library/home.png" alt="" />
                </div>
                <label class="text-3xl font-bold uppercase flex flex-col text-center z-3">
                  LUẬT CHUNG <span>(KA-META)</span>
                </label>
              </div>
              <div class="child bg2 flex flex-col gap-1 lg:gap-4 items-center justify-center w-full lg:w-2/5 z-3 rounded-md relative">
                <div class="w-[120px] h-[120px]">
                  <img src="/images/library/crown.png" alt="" />
                </div>
                <label class="text-3xl font-bold uppercase flex flex-col text-center z-2">
                  LUẬT CHUYÊN NGÀNH<span>(KA-BLOCKCHAIN)</span>
                </label>
              </div>
            </div>
            <div class="bg-white grid grid-cols-3 gap-2 sm:gap-x-6 text-white z-2 h-1/2 uppercase font-bold pt-1 lg:pt-0 absolute w-full bottom-0">
              <div class="child bg3 flex flex-col gap-1 lg:gap-4 w-full items-center rounded-md justify-center">
                <div class="w-[120px] h-[120px]">
                  <img src="/images/library/law1.png" alt="" />
                </div>
                <label class="text-3xl font-bold uppercase flex flex-col text-center z-1">
                  ĐƯƠNG SỰ<span>(KA-TECH)</span>
                </label>
              </div>
              <div class="child bg4 justify-center flex flex-col gap-1 lg:gap-4 w-full items-center rounded-md bg-auto">
                <div class="w-[120px] h-[120px]">
                  <img src="/images/library/law2.png" alt="" />
                </div>
                <label class="text-3xl font-bold uppercase flex flex-col text-center z-1">
                  HÀNH PHÁP<span> (KA-ACADEMY)</span>
                </label>
              </div>
              <div class="child bg5 flex justify-center flex-col gap-1 lg:gap-4 w-full items-center rounded-md bg-auto">
                <div class="w-[120px] h-[120px]">
                  <img src="/images/library/law3.png" alt="" />
                </div>
                <label class="text-3xl font-bold uppercase flex flex-col text-center z-1">
                  TỐ TỤNG<span>(KA-FUNDGATES)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="px-40 gap-5 mx-auto flex flex-col lg:flex-row items-center py-10 sm:py-20 justify-between">
          <div class="pr-32 basis-1/2 flex flex-col gap-10 w-full lg:w-auto">
            <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-300 w-full py-5 sm:px-20 text-center flex flex-col gap-5">
              <div class="p-6 bg-white rounded-full mx-auto">
                <img
                  src="/images/library/np_question.png"
                  className="w-28 h-28"
                  alt=""
                />
              </div>
              <label class="text-3xl font-bold whitespace-nowrap uppercase text-white">
                ĐẶT CÂU HỎI CỦA BẠN
              </label>
            </div>
            <div class="rounded-xl bg-gradient-to-b from-blue-600 to-blue-300 w-full py-5 sm:px-20 text-center flex flex-col gap-5">
              <div class="p-6 bg-white rounded-full mx-auto">
                <img
                  src="/images/library/np_settings.png"
                  className="w-28 h-28"
                  alt=""
                />
              </div>
              <label class="text-3xl font-bold uppercase whitespace-nowrap text-white">
                TÌNH HUỐNG LUẬT
              </label>
            </div>
          </div>
          <div class="pl-32 basis-1/2 flex flex-col gap-5 w-full lg:w-2/5">
            <label class="text-5xl uppercase text-white font-bold">
              ĐẶT CÂU HỎI CỦA BẠN
            </label>
            <input
              type="text"
              placeholder="Họ và tên"
              class="outline-none rounded-md px-4 py-3.5 border-0 text-2xl"
            />
            <input
              type="email"
              placeholder="Email"
              class="outline-none rounded-md px-4 py-3.5 border-0 text-2xl"
            />
            <textarea
              rows="15"
              placeholder="Câu hỏi"
              class="rounded-md outline-none px-4 py-3.5 border-0 text-2xl"
            ></textarea>
            <button class="uppercase text-6 text-white px-20 py-2 bg-blue-500 rounded-md mr-auto text-2xl font-medium">
              GỬI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
