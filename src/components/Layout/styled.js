import styled from 'styled-components';

export const Wrap = styled.div`
	position: relative;
`;

export const ContainerWrap = styled.main`
	position: relative;
	margin-top: 80px;
	width: 100%;
	overflow-y: scroll;
	box-sizing: border-box;
	@media only screen and (max-width: 767px) {
		padding: 0 40px;
	}
	@media only screen and (max-width: 359px) {
		height: calc(100vh - 50px); // header 높이
		padding: 0 20px;
	}
`;
