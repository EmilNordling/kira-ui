import { FormSpec, FormElementLike } from './types';

export interface FormGroup<T> {
	refs: { [key: string]: FormElementLike<any> };
	controllers: T;
	isValid(): void;
	state(): { [key in keyof T]: string };
	reset(): void;
}

export function createFormGroup<T extends FormSpec<any>>(controllers: T): FormGroup<T> {
	return {
		controllers,
		refs: {},
		isValid() {},
		state(): { [key in keyof T]: string } {
			const builder: { [key: string]: any } = {};

			Object.entries(this.controllers).forEach(([key, value]) => {
				builder[key] = value;
			});

			return builder as { [key in keyof T]: string };
		},
		reset() {},
	};
}