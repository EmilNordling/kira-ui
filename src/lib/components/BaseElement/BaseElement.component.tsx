import React, { forwardRef, ComponentType, FC, Fragment } from 'react';
import style from './BaseElement.style';
import { BaseElementComponent } from './BaseElement.types';
import { MotionValue, MotionStyle } from 'framer-motion';
import { CSSProperties } from 'styled-components';

const EMPTY_OBJECT = {};

export const BaseElement = forwardRef<ComponentType<FC>, BaseElementComponent.Props & BaseElementComponent.PropsInternal>(
	(props, ref) => {
		const {
			animation,
			children,
			className,
			color,
			cursor,
			size,
			tag = 'div',
			center = false,
			fill = false,
			direction = 'column',
			width = null,
			height = null,
			border,
			radius,
			padding,
			margin,
			...rest
		} = props;

		const styleForMotion: Partial<MotionStyle> = {};
		const bundleStyle: Partial<CSSProperties> = {};

		// Can't destruct "style" due to "Cannot read property '__reactstandin__key' of undefined"
		for (const key in props.style) {
			if ((props.style as any)[key] instanceof MotionValue) {
				(styleForMotion as any)[key] = (props.style as any)[key];
			} else {
				(bundleStyle as any)[key] = (props.style as any)[key];
			}
		}

		// Returns Static Element if no framer-motion attributes are presence.
		if (!animation) {
			return (
				<style.BaseElement
					// @ts-ignore
					ref={ref}
					as={tag}
					propFill={fill}
					className={className}
					center={center}
					cursor={cursor}
					propDirection={direction}
					propWidth={width || size || undefined}
					propHeight={height || size || undefined}
					propColor={color}
					propBorder={border}
					propRadius={radius}
					propPadding={padding}
					propMargin={margin}
					{...rest}
					style={{ ...bundleStyle }}
					data-testid='baseElement'
				>
					{children}
				</style.BaseElement>
			);
		}

		return (
			<style.BaseMotionWrapper
				ref={ref as any}
				as={tag}
				className={className}
				propWidth={width || size || undefined}
				propHeight={height || size || undefined}
				propMargin={margin}
				{...rest}
				style={EMPTY_OBJECT}
				data-testid='baseElement'
			>
				<style.BaseMotionElement
					propFill={fill}
					center={center}
					cursor={undefined}
					propDirection={direction}
					propColor={color}
					propBorder={border}
					propRadius={radius}
					propPadding={padding}
					propMargin={margin}
					style={{
						...styleForMotion,
						...bundleStyle,
					}}
					{...animation}
				>
					{children}
				</style.BaseMotionElement>
			</style.BaseMotionWrapper>
		);
	},
);
