import styled from "styled-components";

export const TabBox = styled.div`
  position: fixed;
  top: 80px; // header 높이
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 78px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  background: #fff;
  @media only screen and (max-width: 359px) {
    top: 50px; // header 높이
    height: 50px;
  }

  .tab-swiper {
    width: 100%;
    height: 100%;
    padding: 0 80px;
    @media only screen and (max-width: 767px) {
      padding: 0 40px;
    }
    @media only screen and (max-width: 359px) {
      padding: 0 20px;
    }

    .swiper-slide {
      width: auto !important;
      @media only screen and (max-width: 359px) {
        margin-right: 6px !important;
      }
    }
  }
`;

export const CardBox = styled.section`
  margin: 0 -15px;
  padding-top: 80px; // tab 높이
  padding-bottom: 150px;
  @media only screen and (max-width: 767px) {
    margin: 0 -10px;
  }
  @media only screen and (max-width: 359px) {
    margin: 0;
    padding-top: 50px; // tab 높이
  }
`;
