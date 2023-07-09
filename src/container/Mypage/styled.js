import styled from 'styled-components';
import { Inner } from 'styles/common';

export const MypageWrap = styled(Inner)`
	max-width: 600px;
	margin-top: 150px;
`;

export const Title = styled.strong`
	display: block;
	font-size: 28px;
	text-align: center;
`;

export const MypageTab = styled.div`
	position: fixed;
	top: 80px; // header 높이
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	width: auto;
	max-width: 600px;
	margin: auto;
	height: 78px;
	background: #fff;
	/* box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%); */
	@media only screen and (max-width: 359px) {
		top: 50px; // header 높이
		height: 50px;
	}
`;
