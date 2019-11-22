import React, { useState } from 'react';
import style from './BaseInput.style';
import { BaseInputComponent } from './BaseInput.types';

export const BaseInput: React.FC<BaseInputComponent.Props> = props => {
	const {
		// Takes out these values to be used as variables here.
		children,
		className,
		disabled,
		type,
		// defaults.
		tabIndex = 0,
		// Spreads anything else.
		...rest
	} = props;

	if (!type && process.env.NODE_ENV === 'development') throw new Error('input is missing type');

	const [isFocused, setIsFocus] = useState(false);

	if (disabled && isFocused) setIsFocus(false);

	return (
		<style.BaseInput
			aria-invalid={true}
			aria-describedby={''}
			className={className}
			disabled={disabled}
			tabIndex={disabled ? -1 : tabIndex}
			type={type}
			{...rest}
		>
			{children}
		</style.BaseInput>
	);
};
