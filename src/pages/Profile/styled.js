import styled from "styled-components";

export const ProfileWrap = styled.section`
  padding-top: 40px;
  @media only screen and (max-width: 359px) {
    padding-top: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 32px;
  color: rgb(72, 72, 72);
  font-weight: bold;
  @media only screen and (max-width: 359px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

export const ProfileList = styled.ul`
  width: 100%;
`;
