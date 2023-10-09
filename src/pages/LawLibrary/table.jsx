import React from "react";

export default function Table() {
  return (
    <div>
      <div class="w-full py-20 px-40">
        <div class="">
          <img alt="" src="/images/library/lawfirmLogo1.png" />
          <div class="flex flex-col xl:flex-row gap-4 text-center mt-20">
            <div class="flex flex-col justify-between gap-4 items-center border-4 rounded border-blue-500 px-4 py-4">
              <label class="text-blue-500 text-center text-2xl font-semibold xl:h-100px 2xl:h-60px">
                TRỢ GIÚP PHÁP LÝ (MIỄN PHÍ)
              </label>
              <div className="flex flex-col items-center gap-y-6">
                <p className="text-base">
                  Tư vấn miễn phí cho các đối tượng là cá nhân, doanh nghiệp yếu
                  thế đang gặp các vấn đề về pháp lý có liên quan
                </p>
                <img src="/images/library/np_support.png" alt="" />
                <button class="bg-blue-600 py-2 rounded-md text-white w-3/5 sm:w-full">
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div class="flex flex-col justify-between gap-4 items-center border-4 rounded border-blue-500 px-4 py-4">
              <label class="text-blue-500 text-center text-2xl font-semibold xl:h-100px 2xl:h-60px">
                DỊCH VỤ PHÁP LÝ
              </label>
              <div className="flex flex-col items-center gap-y-6">
                <p>
                  Cung cấp dịch vụ tư vấn pháp lý cho các khách hàng là cá nhân,
                  doanh nghiệp và nhà đầu tư nước ngoài
                </p>
                <img src="/images/library/np_service.png" alt="" />

                <button class="bg-blue-600 py-2 rounded-md text-white w-3/5 sm:w-full">
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div class="flex flex-col justify-between gap-4 items-center border-4 rounded border-blue-500 px-4 py-4">
              <label class="text-blue-500 text-center text-2xl font-semibold xl:h-100px 2xl:h-60px">
                GÓI THÀNH VIÊN KA
              </label>
              <div className="flex flex-col items-center gap-y-6">
                <p>
                  Tham gia thành viên để có quyền được tư vấn pháp luật, tham
                  gia khoá học đào tạo, chương trình từ thiện
                </p>
                <img src="/images/library/np_member.png" alt="" />
                <button class="bg-blue-600 py-2 rounded-md text-white w-3/5 sm:w-full">
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div class="flex flex-col justify-between gap-4 items-center border-4 rounded border-blue-500 px-4 py-4">
              <label class="text-blue-500 text-center text-2xl font-semibold xl:h-100px 2xl:h-60px">
                DỊCH VỤ HỖ TRỢ KHỞI NGHIỆP
              </label>
              <div className="flex flex-col items-center gap-y-6">
                <p>
                  Cung cấp dịch vụ pháp lý và tài chính hỗ trợ cho các start-up
                  có ý tưởng kinh doanh, sản phẩm sáng tạo, đột phá
                </p>
                <img src="/images/library/np_business.png" alt="" />
                <button class="bg-blue-600 py-2 rounded-md text-white w-3/5 sm:w-full">
                  Xem chi tiết
                </button>
              </div>
            </div>
            <div class="flex flex-col justify-between gap-4 items-center border-4 rounded border-blue-500 px-4 py-4">
              <label class="text-blue-500 text-center text-2xl font-semibold xl:h-100px 2xl:h-60px">
                DỊCH VỤ IPO &amp; ICO
              </label>
              <div className="flex flex-col items-center gap-y-6">
                <p>
                  Cung cấp dịch vụ IPO và ICO cho doanh nghiệp, start-up bởi đội
                  ngũ luật sư, chuyên gia IT, chuyên gia tài chính
                </p>
                <img src="/images/library/np_ipo.png" alt="" />
                <button class="bg-blue-600 py-2 rounded-md text-white w-3/5 sm:w-full">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
