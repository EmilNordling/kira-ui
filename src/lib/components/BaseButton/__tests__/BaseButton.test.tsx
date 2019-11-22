import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BaseButton } from '../';

afterEach(cleanup);

describe('Button component', () => {
	it('will be an button element', () => {
		const { getByTestId } = render(<BaseButton />);

		expect(getByTestId('baseButton')).toBeInstanceOf(HTMLButtonElement);
	});
});
