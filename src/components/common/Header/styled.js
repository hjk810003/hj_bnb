import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 80px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
  @media only screen and (max-width: 767px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 359px) {
    height: 50px;
    padding: 0 20px;
  }
`;

export const Logo = styled.h1`
  color: #000;
  max-width: 102px;
  @media only screen and (max-width: 767px) {}
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
    position: absolute;
    right: 80px;
    top: 50%;
    transform: translateY(-50%);
    height: auto;
    padding: 0;
    border: none;
    box-shadow: none;
  }
  @media only screen and (max-width: 359px) {
    right: 55px;
  }

  span {
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

  .ic-search {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgb(255, 56, 92);
    @media only screen and (max-width: 359px) {
    width: 30px;
    height: 30px;
  }

    span {
      font-size: 0;
      text-indent: -9999px;
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
