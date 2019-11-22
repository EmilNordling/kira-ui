import React, { useRef, useState } from 'react';
import style from './BaseButton.style';
import { BaseButtonComponent } from './BaseButton.types';
import { focusContext } from '../../helpers/focusContext';

export const BaseButton: React.FC<BaseButtonComponent.Props> = props => {
	const {
		// Takes out these values to be used as variables here.
		children,
		className,
		disabled,
		// Takes out focus events for override.
		onBlur,
		onFocus,
		// Takes out mouse events for override.
		onClick,
		onMouseDown,
		onMouseUp,
		onMouseLeave,
		// Takes out keyboard events for override.
		onKeyUp,
		onKeyDown,
		// Takes out touch events for override.
		onTouchEnd,
		onTouchMove,
		onTouchStart,
		// defaults.
		tabIndex = 0,
		type = 'button',
		// Spreads anything else.
		...rest
	} = props;

	const buttonRef = useRef<HTMLButtonElement>(null);
	const [isFocused, setIsFocus] = useState(false);

	if (disabled && isFocused) setIsFocus(false);

	const downRef = useRef(false);

	// Focus events
	const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
		setIsFocus(false);

		focusContext.current = null;

		if (onBlur) onBlur(event);
	};
	const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
		setIsFocus(true);

		focusContext.current = buttonRef.current;

		if (onFocus) onFocus(event);
	};

	// Mouse events
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (onClick) onClick(event);
	};
	const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!downRef) {
		}

		if (onMouseDown) onMouseDown(event);
	};
	const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (onMouseUp) onMouseUp(event);
	};
	const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (onMouseLeave) onMouseLeave(event);
	};

	// Keyboard events
	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (isFocused && event.key === 'Escape' && focusContext.current) {
			focusContext.current.blur();
		}
	};
	const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {};

	// Touch events
	const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
		if (onTouchStart) onTouchStart(event);
	};
	const handleTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
		if (onTouchEnd) onTouchEnd(event);
	};
	const handleTouchMove = (event: React.TouchEvent<HTMLButtonElement>) => {
		if (onTouchMove) onTouchMove(event);
	};

	const isToggle = false;

	return (
		<style.BaseButton
			data-testid='baseButton'
			aria-pressed={isToggle}
			ref={buttonRef}
			className={className}
			disabled={disabled}
			tabIndex={disabled ? -1 : tabIndex}
			onBlur={handleBlur}
			onClick={handleClick}
			onFocus={handleFocus}
			onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeave}
			onMouseUp={handleMouseUp}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
			onTouchStart={handleTouchStart}
			type={type}
			{...rest}
		>
			{children}
		</style.BaseButton>
	);
};
