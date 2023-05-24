import styled from "styled-components";

export const TabItem = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  height: 100%;
  font-size: 14px;
  color: #ddd;
  transition: all 0.2s ease;
  @media only screen and (max-width: 359px) {
    font-size: 12px;
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

  .tab-icon {
    margin-right: 5px;
  }
`;
