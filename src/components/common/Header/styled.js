import styled from 'styled-components';
import { Inner } from 'styles/common';

export const HeaderWrap = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px; // header 높이
	background: #fff;
	border-bottom: 1px solid #ddd;
	z-index: 1000;
	@media only screen and (max-width: 767px) {
		padding: 0 40px;
	}
	@media only screen and (max-width: 359px) {
		height: 50px; // header 높이
		padding: 0 20px;
	}
`;

export const HeaderInner = styled(Inner)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.h1`
	color: #000;
	max-width: 102px;
	@media only screen and (max-width: 767px) {
	}
	@media only screen and (max-width: 359px) {
		max-width: 70px;
	}
`;

export const MapArea = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 48px;
	padding: 10px;
	background-color: #fff;
	border: 1px solid #ddd;
	box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
	border-radius: 40px;
	@media only screen and (max-width: 767px) {
		position: fixed;
		bottom: 80px;
		left: 50%;
		transform: translateX(-50%);
		height: auto;
		padding: 0;
		border: none;
	}

	> span {
		padding: 5px 10px;
		border-right: 1px solid #ddd;
		color: #000;
		font-size: 14px;
		text-align: center;
		@media only screen and (max-width: 767px) {
			display: none;
		}

		&:last-of-type {
			border: none;
		}
	}

	.btn-map {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: rgb(255, 56, 92);
		@media only screen and (max-width: 767px) {
			width: auto;
			padding: 0 15px;
			border-radius: 40px;
		}

		span {
			font-size: 0;
			text-indent: -9999px;
			@media only screen and (max-width: 767px) {
				margin-right: 5px;
				font-size: 12px;
				color: #fff;
				text-indent: 0;
			}
		}

		.ic-map {
			font-size: 20px;
			color: #fff;
			@media only screen and (max-width: 767px) {
				font-size: 18px;
			}
		}
	}
`;

export const Profile = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 2px solid #ff5a5f;
	cursor: pointer;
	overflow: hidden;
	@media only screen and (max-width: 359px) {
		width: 28px;
		height: 28px;
	}

	&:hover {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
		transition: box-shadow 0.2s;
	}

	img {
		width: 34px;
		height: 34px;
		@media only screen and (max-width: 359px) {
			width: 30px;
			height: 30px;
		}
	}
`;
