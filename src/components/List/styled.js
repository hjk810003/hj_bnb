import styled from "styled-components";

export const Item = styled.li`
  display: block;
  padding: 24px 0;
  border-bottom: 1px solid #ddd;
  @media only screen and (max-width: 359px) {
    padding: 15px 0;
  }
`;

export const Strong = styled.strong`
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: rgb(34, 34, 34);
  font-weight: 400;
  @media only screen and (max-width: 359px) {
    font-size: 14px;
  }
`;

export const Span = styled.span`
  display: block;
  padding-top: 3px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(113, 113, 113);
  font-weight: 400;
  @media only screen and (max-width: 359px) {
    font-size: 12px;
  }
`;
