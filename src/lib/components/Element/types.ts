import { BaseElementComponent } from '../BaseElement/BaseElement.types';

export namespace ElementComponent {
	export interface Props extends Style, BaseElementComponent.Props {}

	export interface Style {}
}
