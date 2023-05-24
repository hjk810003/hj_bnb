import styled from "styled-components";

export const ContainerWrap = styled.main`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px); // header 높이
  overflow-y: scroll;
  padding: 0 80px;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 359px) {
    height: calc(100vh - 50px); // header 높이
    padding: 0 20px;
  }
`;