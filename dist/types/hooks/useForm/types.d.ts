export declare type FormPrimitiveValue = string | number | boolean;
export declare type FormValidator = (value: FormPrimitiveValue) => boolean;
export interface FormControl {
    initialValue: FormPrimitiveValue;
    value: FormPrimitiveValue;
    valid: boolean;
    touched: boolean;
    validators: FormValidator[];
}
export declare type FormSpec<T> = {
    [key in keyof T]: FormControl;
};
export declare type FormSubmitData<T extends FormSpec<T>> = {
    [key in keyof T]: Extract<FormPrimitiveValue, T[key]['value']>;
};
export declare type FormElementLike<T> = {
    name: T;
    type?: string;
    value?: string | number | boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
};
export declare type FormEquals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
