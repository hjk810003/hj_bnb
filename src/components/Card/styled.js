import styled from "styled-components";

export const Item = styled.div`
  display: inline-block;
  width: calc(25% - 30px);
  margin-right: 40px;
  margin-bottom: 20px;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.strong`
  display: block;
  margin-top: 5px;
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

export const Info = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 14px;
  color: #000;
`;
