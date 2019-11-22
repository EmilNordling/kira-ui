import { useState, useEffect } from 'react';
import { FormPrimitiveValue, FormControl, FormValidator, FormSpec, FormElementLike, FormEquals } from './types';
import { createFormGroup, FormGroup } from './FormGroup';

export function formControl(defaultValue: FormPrimitiveValue, ...validators: FormValidator[]): FormControl {
	return {
		initialValue: defaultValue,
		value: defaultValue,
		valid: false,
		touched: false,
		validators: [...validators],
	};
}

const formStates = new WeakMap<FormSpec<any>, FormGroup<any>>();

/**
 * @description
 * Form hook
 *
 * @param control Form inputs
 */
export function useForm<T extends FormSpec<any>>(control: T) {
	const [formState] = useState<T>(control);

	let formGroup: FormGroup<T>;
	if (formStates.has(formState)) {
		formGroup = formStates.get(formState)!;
	} else {
		formGroup = createFormGroup(formState);

		formStates.set(formState, formGroup);
	}

	function handleInputChange(event: HTMLElementEventMap[keyof HTMLElementEventMap]): void {
		if (!(event && event.srcElement)) return;

		const { value, name } = event.srcElement as HTMLInputElement;

		formState[name].value = value;
	}

	/**
	 * @description
	 * Binds an input to this hook.
	 *
	 * @param ref Will bind to an inputs "name" attribute
	 */
	function set<K extends HTMLInputElement>(
		ref: FormElementLike<FormEquals<K['name'], keyof T> extends true ? K['name'] : string> | null,
	) {
		if (ref) {
			if (typeof formState[ref.name] === 'undefined') throw new Error(`"${ref.name}" is not a valid form group`);

			ref.value = formState[ref.name].value;

			if (!formGroup.refs[ref.name]) {
				ref.addEventListener('input', handleInputChange);

				formGroup.refs[ref.name] = ref;
			}
		}
	}

	/**
	 * @description
	 * Wrapper for the a submit callback.
	 *
	 * @param callback The onSubmit function
	 */
	const forward = (callback: (data: { [key in keyof T]: T[key]['value'] }) => void) => (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.persist();

		callback(formGroup.state());
	};

	useEffect(() => {
		return () => {
			Object.values(formGroup.refs).forEach(ref => {
				ref.removeEventListener('input', handleInputChange);
			});
		};
	}, []);

	return {
		set,
		forward,
		formGroup,
	};
}
