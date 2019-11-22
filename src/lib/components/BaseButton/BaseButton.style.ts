import styled from 'styled-components';
import { BaseButtonComponent } from './BaseButton.types';

const BaseButton = styled.button<BaseButtonComponent.Style>`
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;
	background: transparent;
	color: inherit;
	font: inherit;
	line-height: normal;
	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;
	-webkit-appearance: none;
	cursor: pointer;
`;

export default {
	BaseButton,
};
