import styled from 'styled-components';
import { color } from 'styles/color';

export const ContactForm = styled.form`
	width: 100%;
`;

export const Input = styled.input`
	display: block;
	width: 100%;
	margin-top: 20px;
	font-size: 20px;
	border: 1px solid ${color.lightGray};
	padding: 10px 15px;
	border-radius: 5px;
`;

export const ButtonBox = styled.div`
	text-align: right;
	margin-top: 30px;
`;

export const SubmitBtn = styled.button`
	display: inline-block;
	/* width: ; */
	padding: 12px 20px;
	font-size: 20px;
	background: ${color.primary};
	border-radius: 10px;
	color: ${color.white};
`;
