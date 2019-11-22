import React, { forwardRef, ForwardRefExoticComponent, RefAttributes, FormHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ElementComponent } from './types';
import style from './style';
import { withDynamicTag } from '../../hoc/withDynamicTag';

type WrappedExoticElement<T, K = {}> = React.ForwardRefExoticComponent<K & ElementComponent.Props & React.RefAttributes<T> & K>;

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

export const Element = forwardRef<any, ElementComponent.Props>(({ children, ...rest }, ref) => {
	return (
		<style.Element ref={ref} {...rest}>
			{children}
		</style.Element>
	);
}) as FunctionalElementComponent;

const Reset: React.FC = ({ children }) => {
	return <style.Reset>{children}</style.Reset>;
};

const Scroll: React.FC = ({ children }) => {
	return (
		<Element.reset>
			<style.Scrollable>{children}</style.Scrollable>
		</Element.reset>
	);
};

Element.div = withDynamicTag<any>(Element, 'div');
Element.nav = withDynamicTag<any>(Element, 'nav');
Element.section = withDynamicTag<any>(Element, 'section');
Element.main = withDynamicTag<any>(Element, 'main');
Element.article = withDynamicTag<any>(Element, 'article');
Element.ul = withDynamicTag<any>(Element, 'ul');
Element.li = withDynamicTag<any>(Element, 'li');
Element.header = withDynamicTag<any>(Element, 'header');
Element.footer = withDynamicTag<any>(Element, 'footer');
Element.figure = withDynamicTag<any>(Element, 'figure');
Element.aside = withDynamicTag<any>(Element, 'aside');
Element.form = withDynamicTag<any>(Element, 'form');
Element.reset = Reset;
Element.scroll = Scroll;
