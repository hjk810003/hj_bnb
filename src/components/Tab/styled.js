import styled from 'styled-components';
import { color } from 'styles/color';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TabSwiper = styled(Swiper)`
	position: relative;
	list-style: none;
	padding: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	&.swiper-horizontal {
		touch-action: pan-y;
	}

	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		align-items: center;
		transition-property: transform;
		box-sizing: content-box;
		transform: translate3d(0px, 0, 0);
		transition-timing-function: ease-out;
		margin: 0 auto;
	}
`;

export const TabItem = styled(SwiperSlide)`
	flex-shrink: 0;
	height: 100%;
	position: relative;
	transition-property: transform;
	display: flex;
	align-items: center;
	width: auto;
	padding: 0;
	font-size: 16px;
	transition: all 0.2s ease;
	margin-right: 30px;
	cursor: pointer;
	color: ${({ $selected }) => ($selected ? color.black : color.gray)};
	&:last-child {
		margin-right: 0;
	}

	&::before {
		content: '';
		width: 100%;
		height: 2px;
		position: absolute;
		bottom: 0;
		left: 0;
		background: ${({ $selected }) => $selected && color.black};
	}

	&:hover {
		color: ${color.black};

		&::before {
			background: ${color.gray};
		}
	}

	.tab-icon {
		margin: -2px 5px 0 0;
	}

	@media only screen and (max-width: 359px) {
		margin-right: 15px !important;
		font-size: 12px;
	}
`;
