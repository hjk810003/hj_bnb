import styled from 'styled-components';
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
    transition-property: transform;
    box-sizing: content-box;
    transform: translate3d(0px,0,0);
    transition-timing-function: ease-out;
    margin: 0 auto;
  }

  .swiper-slide {
    flex-shrink: 0;
    /* width: 100%; */
    height: 100%;
    position: relative;
    transition-property: transform;
    /* display: block; */
  }
`;

export const TabItem = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0;
  font-size: 14px;
  color: #ddd;
  transition: all 0.2s ease;
  @media only screen and (max-width: 359px) {
    margin-right: 15px !important;
    font-size: 12px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover {
    color: #000;

    &::before {
      background: #ddd;
    }
  }

  &.selected {
    color: #000;

    &::before {
      background: #000;
    }
  }

  .tab-icon {
    margin-right: 5px;
  }
`;