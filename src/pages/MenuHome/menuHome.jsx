import React, { useState } from "react";
import "./menuHome.css";
import { MdBusinessCenter } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { ImLibrary } from "react-icons/im";
import { SiNginxproxymanager } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";

const MENU = [
	{
		id: 1,
		name: "Trang chủ",
		icon: (
			<AiFillHome
				className="w-12 h-12 max-sm:w-8 max-sm:h-8"
				color="#fff"
			/>
		),
		link: "/",
	},
	{
		id: 2,
		name: "Đào tạo",
		icon: (
			<FaUserAstronaut
				className="w-12 h-12 max-sm:w-8 max-sm:h-8"
				color="#fff"
			/>
		),
	},
	{
		id: 3,
		name: "Tư vấn IPO",
		icon: (
			<MdBusinessCenter
				className="w-12 h-12 max-sm:w-8 max-sm:h-8"
				color="#fff"
			/>
		),
		link: "https://admin-capitalx.vercel.app/",
	},
	{
		id: 4,
		name: "Thư viện luật",
		icon: (
			<ImLibrary
				className="w-12 h-12 max-sm:w-8 max-sm:h-8"
				color="#fff"
			/>
		),
	},
	{
		id: 5,
		name: "Kết nối",
		icon: (
			<PiUsersThreeFill
				className="w-12 h-12 max-sm:w-8 max-sm:h-8"
				color="#fff"
			/>
		),
	},
	{
		id: 6,
		name: "Quản lý doanh nghiệp",
		icon: (
			<SiNginxproxymanager
				className="w-12 h-12 max-sm:w-8 max-sm:h-8"
				color="#fff"
			/>
		),
	},
];

export default function MenuHome() {
	const [activeParent, setActiveParent] = useState(1);
	return (
		<section className="box_menu_home">
			<div className="box_background"></div>
			<div className="box_circle_menu">
				{MENU.map((item) => (
					<a
						className={`${
							item.id === activeParent
								? "box_circle_menu_item_active"
								: ""
						} box_circle_menu_item item_menu_${item.id}`}
						key={item.id}
						onClick={() => {
							setActiveParent(item.id);
						}}
						target="_blank"
						rel="noreferrer"
						href={item.link ? item.link : "#"}
					>
						{item.icon}
					</a>
				))}
			</div>
			<div className="box_circle_menu_small"></div>
			<div className="box_circle_content"></div>
		</section>
	);
}
