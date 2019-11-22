import styled, { css } from 'styled-components';
import { SelectionComponent } from './types';
import { BaseButton } from '../BaseButton';
import { BaseElement } from '../BaseElement/BaseElement.component';

const Wrapper = styled(BaseElement)`
	width: 200px;
	top: 200px;
	left: 400px;
	position: absolute;
	z-index: 1000;
`;

const Container = styled.div<SelectionComponent.Style>`
	overflow: auto;
	background: #ffffff;
	padding: 5px 0;
	transition: transform 300ms ease, opacity 200ms ease;
	will-change: transform;
	color: #1a202c;
	transform: scale(1) translateY(0);
	border-radius: 5px;
	width: 100%;
	box-shadow: 0 3px 10px 2px rgba(102, 119, 136, 0.16), 0 1px 2px 0px rgba(102, 119, 136, 0.34);

	${({ blocksUserInput }) =>
		blocksUserInput &&
		css`
			&:after {
				content: '';
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: 999;
			}
		`};
`;

const Item = styled(BaseButton)<{ isFocused: boolean }>`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 6px 10px;
	font-size: 0.8rem;
	cursor: pointer;
	text-transform: capitalize;
	user-select: none;

	${({ isFocused }) => isFocused && 'background: rgba(3, 3, 3, 0.05);'}

	&:hover {
		background-color: rgba(237, 242, 247, 0.43);
	}
`;

const ItemGroup = styled.div``;

const ItemIcon = styled.div`
	padding: 0 5px;
`;

const Separator = styled.div`
	display: flex;
	align-items: center;
	padding: 0 5px;
	width: 100%;
	height: 10px;

	&:after {
		content: '';
		width: 100%;
		border-top: 1px solid #9c9ea0;
	}
`;

export default {
	ItemGroup,
	Item,
	Container,
	Separator,
	ItemIcon,
	Wrapper,
};
