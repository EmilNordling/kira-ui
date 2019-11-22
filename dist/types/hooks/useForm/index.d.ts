/// <reference types="react" />
import { FormPrimitiveValue, FormControl, FormValidator, FormSpec, FormElementLike, FormEquals } from './types';
import { FormGroup } from './FormGroup';
export declare function formControl(defaultValue: FormPrimitiveValue, ...validators: FormValidator[]): FormControl;
/**
 * @description
 * Form hook
 *
 * @param control Form inputs
 */
export declare function useForm<T extends FormSpec<any>>(control: T): {
    set: <K extends HTMLInputElement>(ref: FormElementLike<FormEquals<K["name"], keyof T> extends true ? K["name"] : string> | null) => void;
    forward: (callback: (data: { [key in keyof T]: T[key]["value"]; }) => void) => (event: import("react").FormEvent<HTMLFormElement>) => void;
    formGroup: FormGroup<T>;
};
