import styled from "styled-components";

export const TabWrap = styled.div`
  position: fixed;
  top: 80px; // header 높이
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 78px;
  padding: 0 80px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  background: #fff;
  @media only screen and (max-width: 767px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 359px) {
    top: 50px; // header 높이
    padding: 0 20px;
  }
`;

export const TabItem = styled.button`
  position: relative;
  width: auto;
  height: 100%;
  margin-right: 20px;
  font-size: 14px;
  color: #ddd;
  transition: all 0.2s ease;
  @media only screen and (max-width: 359px) {
    margin-right: 10px;
    font-size: 14px;
  }

  &:last-child {
    margin-right: 0;
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

  img {
    margin-right: 5px;
  }
`;
