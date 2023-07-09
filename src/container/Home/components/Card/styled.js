import styled from 'styled-components';
import { color } from 'styles/color';

export const CardItem = styled.div`
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
	border-radius: 10px;
`;

export const Title = styled.strong`
	display: block;
	margin: 3px 0;
	font-size: 15px;
	line-height: 19px;
	color: ${color.black};
	font-weight: bold;
	@media only screen and (max-width: 359px) {
		font-size: 14px;
	}
`;

export const Info = styled.span`
	display: block;
	font-size: 15px;
	line-height: 19px;
	color: ${({ $date }) => ($date ? color.gray : color.black)};
	@media only screen and (max-width: 359px) {
		font-size: 14px;
	}
`;
