import React, { useRef } from "react";
import "./signIn.css";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
	const formRef = useRef(null);
	const navigate = useNavigate();
	const onFinish = (values) => {
		navigate("/homemenu");
		formRef.current?.resetFields();
	};
	return (
		<div className="box_signin">
			<div className="box_background"></div>
			<div className="box_signin_content">
				<div className="flex flex-col justify-center items-start gap-6 w-full max-sm:gap-3">
					<div className="p-6">
						<img
							src={"/images/menuhome/logo_capx.png"}
							alt="logo"
						/>
					</div>
					<span className="text-sm font-light text-white">
						Chưa có tài khoản? &nbsp;
						<b
							className="text-[#1A68FA] font-bold cursor-pointer"
							onClick={() => {
								// navigate("/sign-up");
							}}
						>
							{" "}
							Đăng ký
						</b>
					</span>
					<Form
						name="normal_login"
						className="login_form"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
					>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: "Vui lòng nhập tên đăng nhập!",
								},
							]}
						>
							<Input placeholder="Tên đăng nhập" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: "Vui lòng nhập mật khẩu!",
								},
							]}
						>
							<Input type="password" placeholder="Password" />
						</Form.Item>
						<div className="flex justify-between items-center mb-6">
							<Form.Item>
								<Form.Item
									name="remember"
									valuePropName="checked"
									noStyle
								>
									<Checkbox>
										<h4 className="text-sm font-light text-white">
											Nhớ tài khoản
										</h4>
									</Checkbox>
								</Form.Item>
							</Form.Item>
							<div
								className="mb-6 text-[#1A68FA] text-sm font-bold cursor-pointer z-10"
								onClick={() => {
									// navigate("/forgot-password");
								}}
							>
								Quên mật khẩu
							</div>
						</div>
						<Form.Item className="flex mt-3">
							<Button
								type="primary"
								htmlType="submit"
								className="!bg-[#1A68FA] hover:!bg-[#2d65cc] hover:!text-white text-white text-sm font-medium !border-none h-[32px] w-[120px] uppercase rounded-md"
							>
								Đăng nhập
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
}
