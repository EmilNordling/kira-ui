import styled from 'styled-components';
import { BaseInput } from '../BaseInput/BaseInput.component';

const TextFieldStyle = styled.div<{ fixedWidth?: number }>`
	min-width: 200px;
	width: 100%;
	max-width: ${({ fixedWidth }) => (fixedWidth ? `${fixedWidth}px` : '100%')};
	position: relative;
	display: inline-flex;
	flex-direction: column;
`;

const Border = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	border-bottom: 2px solid rgba(255, 255, 255, 0.3);
	-webkit-transition: border-color 300ms ease;
	transition: border-color 300ms ease;
`;

const Label = styled.label`
	transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
	transform-origin: top left;
	top: 0;
	left: 10px;
	position: absolute;
	transform: translate(0, 7px) scale(1);
	user-select: none;
`;

const InputWrapper = styled.div`
	position: relative;
	padding: 0px 10px;
	margin-top: 15px;
	border-radius: 4px;
	background: #222222;
	color: #ffffff;
	border: 1px solid #010101;
`;

const HelperText = styled.div`
	font-size: 14px;
	color: #a5a5a5;
	margin-top: 10px;
	padding: 0px 10px;
	text-align: right;
`;

const InputStyle = styled(BaseInput)<any>`
	&:focus ~ ${Label}, &:not([value='']) ~ ${Label} {
		transform: translate(0, -12px) scale(0.8);
	}

	&:invalid:not([value='']) {
		background: rgba(255, 28, 27, 0.1);
	}

	&::placeholder {
		opacity: 0;
	}

	&:focus::placeholder {
		opacity: 1;
	}
`;

export default {
	TextFieldStyle,
	Label,
	InputWrapper,
	HelperText,
	InputStyle,
	Border,
};
