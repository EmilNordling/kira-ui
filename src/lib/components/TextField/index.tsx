import React from 'react';
import { TextFieldComponent } from './types';
import style from './style';
import shortid from 'shortid';

export function TextField({
	icon,
	helperText,
	required,
	variant,
	placeholder,
	example,
	type,
	readOnly,
	disabled,
	fixedWidth,
	...props
}: TextFieldComponent.Props) {
	const hash = shortid();

	return (
		<style.TextFieldStyle fixedWidth={fixedWidth}>
			<style.InputWrapper>
				<style.InputStyle
					placeholder={placeholder && example}
					type={type || 'text'}
					required={required}
					id={hash}
					readOnly={readOnly || disabled}
					{...props}
				/>

				{placeholder && (
					<style.Label htmlFor={hash}>
						<p>
							{required && '*'}
							{placeholder}
						</p>
					</style.Label>
				)}
			</style.InputWrapper>

			{helperText && <style.HelperText>{helperText}</style.HelperText>}
		</style.TextFieldStyle>
	);
}
