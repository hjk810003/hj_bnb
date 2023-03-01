import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 16px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;

export const Logo = styled.h1`
  color: #000;
`;

export const IntroBox = styled.ul`
  min-width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 30px;

  li {
    display: inline-block;
    width: 33.333%;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    color: #000;
    font-size: 16px;
    text-align: center;

    &:last-child {
      border: none;
    }
  }
`;

export const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #000;
`;
