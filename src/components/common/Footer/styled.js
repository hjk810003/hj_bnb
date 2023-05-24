import styled from "styled-components";

export const FooterWrap = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    padding: 0 80px;
    border-top: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    @media only screen and (max-width: 767px) {
        height: 60px;
        padding: 0 40px;
    }
    @media only screen and (max-width: 359px) {
        position: absolute;
        padding: 0 20px;
        font-size: 12px;
        background-color: rgb(247, 247, 247);
    }
`;