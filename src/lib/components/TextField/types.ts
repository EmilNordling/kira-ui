export namespace TextFieldComponent {
	export type Variant = 'standard';

	export interface Props {
		helperText?: string;
		icon?: any;
		variant?: Variant;
		example?: string;
		multiline?: boolean;
		fixedWidth?: number;
		required?: boolean;
		placeholder?: string;
		type?: 'text';
		readOnly?: boolean;
		disabled?: boolean;
	}

	export interface State {
		error: string | null;
	}
}
