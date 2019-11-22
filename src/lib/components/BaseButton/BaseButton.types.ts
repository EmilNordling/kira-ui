import { ButtonHTMLAttributes } from 'react';

export namespace BaseButtonComponent {
	export interface Props extends Style, ButtonHTMLAttributes<HTMLButtonElement> {}

	export interface Style {}
}
