import styled from "styled-components"

export const Wrap = styled.main`
  @media only screen and (max-width: 767px) {}
  @media only screen and (max-width: 359px) {}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 100px;
  padding: 0 80px;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
    padding: 0 40px;
  }
  @media only screen and (max-width: 359px) {
    padding: 0 20px;
    margin-bottom: 40px;
  }
`;