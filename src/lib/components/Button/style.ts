import styled from 'styled-components';
import { BaseButtonComponent } from '../BaseButton/BaseButton.types';
import { BaseButton } from '../BaseButton';

const Button = styled(BaseButton)<BaseButtonComponent.Style>`
	position: relative;
	font-size: 0.875rem;
	padding: 0 8px 0 8px;
	display: inline-flex;
	position: relative;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	min-width: 64px;
	height: 36px;
	line-height: inherit;
	user-select: none;
	overflow: hidden;
	vertical-align: middle;
	border-radius: 4px;

	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		transition: opacity ease 200ms;
		background: #d4d4d48a;
		opacity: 0;
	}

	&:hover {
		&:after {
			opacity: 1;
		}
	}
`;

export default {
	Button,
};
