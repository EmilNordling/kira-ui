import styled from 'styled-components';
import { MainComponent } from './types';

const Main = styled.div<MainComponent.Style>`
	position: relative;
	display: flex;
	flex-direction: ${({ direction }) => direction && (direction === 'row' ? 'row' : 'column')};
	height: 100vh;
	min-width: fit-content;
	overflow-y: auto;
`;

export default {
	Main,
};
