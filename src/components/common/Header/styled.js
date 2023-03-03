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
  padding: 0 80px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
`;

export const Logo = styled.h1`
  color: #000;
`;

export const Comments = styled.ul`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  box-sizing: border-box;
  border-radius: 40px;

  li {
    padding: 5px 10px;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
    color: #000;
    font-size: 14px;
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
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    transition: box-shadow 0.2s;
  }
`;
