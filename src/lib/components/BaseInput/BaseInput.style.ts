import styled from 'styled-components';
import { BaseInputComponent } from './BaseInput.types';

const BaseInput = styled.input<BaseInputComponent.Style>`
	display: block;
	font: inherit;
	color: currentColor;
	width: 100%;
	border: 0;
	margin: 0;
	padding: 6px 0 7px;
	display: block;
	min-width: 0;
	box-sizing: content-box;
	background: none;
	-webkit-tap-highlight-color: transparent;
	outline: none;
	font-size: 1rem;
`;

export default {
	BaseInput,
};
