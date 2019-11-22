import React, { FormHTMLAttributes } from 'react';
import { ElementComponent } from './types';
declare type WrappedExoticElement<T, K = {}> = React.ForwardRefExoticComponent<K & ElementComponent.Props & React.RefAttributes<T> & K>;
interface FunctionalElementComponent extends WrappedExoticElement<HTMLElement> {
    div: WrappedExoticElement<HTMLElement>;
    nav: WrappedExoticElement<HTMLElement>;
    section: WrappedExoticElement<HTMLElement>;
    main: WrappedExoticElement<HTMLElement>;
    article: WrappedExoticElement<HTMLElement>;
    ul: WrappedExoticElement<HTMLElement>;
    li: WrappedExoticElement<HTMLElement>;
    header: WrappedExoticElement<HTMLElement>;
    footer: WrappedExoticElement<HTMLElement>;
    figure: WrappedExoticElement<HTMLElement>;
    aside: WrappedExoticElement<HTMLElement>;
    form: WrappedExoticElement<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>>;
    reset: React.FC;
    scroll: React.FC;
}
export declare const Element: FunctionalElementComponent;
export {};
