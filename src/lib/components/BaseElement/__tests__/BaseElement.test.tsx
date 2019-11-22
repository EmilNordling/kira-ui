import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BaseElement } from '../BaseElement.component';

afterEach(cleanup);

describe('Base Element', () => {
	it('will render', () => {
		const { getByTestId } = render(<BaseElement />);

		expect(getByTestId('baseElement')).toBeInstanceOf(HTMLDivElement);
	});
});
