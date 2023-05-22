import styled from "styled-components";

export const Item = styled.div`
  display: inline-block;
  width: calc(25% - 30px);
  margin: 0 15px;
  padding-top: 30px;
  @media only screen and (max-width: 767px) {
    width: calc(50% - 20px);
    margin: 0 10px;
  }
  @media only screen and (max-width: 359px) {
    width: 100%;
    margin: 0;
    padding-top: 20px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.strong`
  display: block;
  margin-top: 7px;
  font-size: 16px;
  color: #000;
  font-weight: bold;
  @media only screen and (max-width: 359px) {
    font-size: 14px;
  }
`;

export const Info = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 14px;
  color: #000;
  @media only screen and (max-width: 359px) {
    font-size: 12px;
  }
`;
