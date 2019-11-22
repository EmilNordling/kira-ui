import { FormSpec, FormElementLike } from './types';
export interface FormGroup<T> {
    refs: {
        [key: string]: FormElementLike<any>;
    };
    controllers: T;
    isValid(): void;
    state(): {
        [key in keyof T]: string;
    };
    reset(): void;
}
export declare function createFormGroup<T extends FormSpec<any>>(controllers: T): FormGroup<T>;
