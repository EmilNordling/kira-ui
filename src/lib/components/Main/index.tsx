import React from 'react';
import style from './style';
import { MainComponent } from './types';

const Main: React.FC<MainComponent.Props> = ({ direction = 'column', children, ...rest }) => {
	return (
		<style.Main direction={direction} {...rest}>
			{children}
		</style.Main>
	);
};

export { Main };
