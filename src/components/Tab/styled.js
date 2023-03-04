import styled from "styled-components";

export const TabWrap = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 78px;
  padding: 0 80px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  background: #fff;
`;

export const TabItem = styled.button`
  width: auto;
  height: 100%;
  margin-right: 20px;
  font-size: 14px;
  color: #ddd;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #000;
    border-bottom: 2px solid #ddd;
  }
`;
