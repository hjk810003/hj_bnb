import styled from "styled-components";

export const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 80px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    background-color: #fff;
    box-sizing: border-box;

    li {
      height: 100%;
      line-height: 78px;
      text-align: center;
      transition: all .2 ease;
      box-sizing: border-box;
      cursor: pointer;

      a {
        font-size: 14px;
        font-weight: bold;
        color: #ddd;
      }

      &:hover {
        a {
          color: #000;
        }
      }
    }
  }
`;