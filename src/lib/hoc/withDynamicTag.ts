import { createElement, ForwardRefExoticComponent, ComponentType } from 'react';

export const withDynamicTag = <T extends ComponentType<any>>(Component: T, tag: keyof JSX.IntrinsicElements) => {
	const DynamicTag = <T>(props: T) => {
		const newProps = { ...props, tag };

		return createElement(Component, newProps);
	};

	return DynamicTag as T;
};
