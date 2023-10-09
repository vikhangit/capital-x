import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex justify-between items-center px-40 py-10">
      <Link to={"/"}>
        <img
          src="/images/header/logo.png"
          alt=""
          sizes="100vw"
          className="w-[210px] h-[60px]"
        />
      </Link>
      <div className="flex items-center gap-x-12">
        <Link to={"/"}>
          <span className="text-lg">TƯ VẤN IPO</span>
        </Link>
        <Link to={"/"}>
          <span className="text-lg">SÁCH</span>
        </Link>
        <Link to={"/"}>
          <span className="text-lg">VIDEO</span>
        </Link>
        <Link to={"/"}>
          <span className="text-lg">TÀI LIỆU</span>
        </Link>
        <Link to={"/"}>
          <span className="text-lg">NETWORK</span>
        </Link>
        <Link to={"/"}>
          <div className="flex bg-[#2970F5] rounded-lg font-normal font-bold text-white py-2 px-3.5 items-center">
            <div className="font-bold text-lg">USERNAME</div>
            <img
              src="/images/header/user-icon.png"
              alt=""
              className="ml-2.5 w-5 h-5"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
