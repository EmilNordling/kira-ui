import styled from 'styled-components';
import { BaseElement } from '../BaseElement/BaseElement.component';
import { BaseElementComponent } from '../BaseElement/BaseElement.types';

const Element = styled(BaseElement)<BaseElementComponent.Style>`` as any;

const Reset = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Scrollable = styled.div`
	flex: 1;
	overflow-y: auto;
`;

export default {
	Scrollable,
	Reset,
	Element,
};
