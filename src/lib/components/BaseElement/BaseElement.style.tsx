import styled from 'styled-components';
import { BaseElementComponent } from './BaseElement.types';
import { motion } from 'framer-motion';

function normalizeAlignment(type?: BaseElementComponent.AlignmentTypes): string | null {
	if (type === 'center') return 'center';

	if (type === 'start') return 'flex-start';

	if (type === 'end') return 'flex-end';

	return null;
}

function justifyContent(
	align: BaseElementComponent.Alignment | 'center' | undefined,
	direction: BaseElementComponent.Direction | undefined,
): string | null {
	if (align === 'center') {
		return 'center';
	}

	if (align instanceof Object) {
		if (direction === 'column') {
			return normalizeAlignment(align.x);
		}

		return normalizeAlignment(align.y);
	}

	return 'flex-start';
}

function alignItems(
	align: BaseElementComponent.Alignment | 'center' | undefined,
	direction: BaseElementComponent.Direction | undefined,
): string | null {
	if (align === 'center') {
		return 'center';
	}

	if (align instanceof Object) {
		if (direction === 'row') {
			return normalizeAlignment(align.y);
		}

		return normalizeAlignment(align.x);
	}

	return 'flex-start';
}

function direction(direction: BaseElementComponent.Direction | undefined): string | null {
	if (!direction) return null;

	if (typeof direction === 'string') {
		return direction;
	}

	return direction === 'row' ? 'row' : 'column';
}

function height(propHeight: BaseElementComponent.Height | undefined): string | null {
	if (propHeight === null) return null;

	if (typeof propHeight === 'number') {
		return `height: ${propHeight}px;`;
	}

	if (typeof propHeight === 'string') {
		return `height: ${propHeight};`;
	}

	if (typeof propHeight === 'object') {
		const { min, max } = propHeight;

		let str = '';

		if (min) {
			str += `min-height: ${min}px;`;
		}

		if (max) {
			str += `max-height: ${max}px;`;
		}

		return str;
	}

	return null;
}

function width(propWidth: BaseElementComponent.Width | undefined): string | null {
	if (propWidth === null) return null;

	if (typeof propWidth === 'number') {
		return `width: ${propWidth}px;`;
	}

	if (typeof propWidth === 'string') {
		return `width: ${propWidth};`;
	}

	if (typeof propWidth === 'object') {
		const { min, max } = propWidth;

		let str = '';

		if (min) {
			str += `min-width: ${min}px;`;
		}

		if (max) {
			str += `max-width: ${max}px;`;
		}

		return str;
	}

	return null;
}

function background(color: string | undefined): string {
	return color ? color : 'transparent';
}

function fill(propFill: BaseElementComponent.Fill | undefined): string | null {
	if (propFill === true) {
		return 'flex 1;';
	}

	if (typeof propFill === 'string') {
		return `flex: ${propFill};`;
	}

	return null;
}

function useCursor(cursor: BaseElementComponent.CursorTypes | undefined): string | null {
	if (!cursor) return null;

	return `cursor: ${cursor};`;
}

function border(propBorder: BaseElementComponent.Border | undefined): string | null {
	if (!propBorder) return null;

	let borderStyle = '';

	Object.entries(propBorder).forEach(([key, value]) => {
		if (value) {
			borderStyle = `${borderStyle}\n border-${key}: 1px solid ${value};`;
		}
	});

	return borderStyle;
}

function radius(propRadius: string | undefined): string | null {
	if (!propRadius) return null;

	return `border-radius: ${propRadius};`;
}

function padding(propPadding: string | undefined): string | null {
	if (!propPadding) return null;

	return `padding: ${propPadding};`;
}

function margin(propMargin: string | undefined): string | null {
	if (!propMargin) return null;

	return `margin: ${propMargin};`;
}

const BaseElement = styled.div<BaseElementComponent.Style & BaseElementComponent.StyleInternal>`
	position: relative;
	display: flex;
	justify-content: ${({ align, direction }) => justifyContent(align, direction)};
	align-items: ${({ align, direction }) => alignItems(align, direction)};
	background-color: ${({ propColor }) => background(propColor)};
	flex-direction: ${({ propDirection }) => direction(propDirection)};
	flex-shrink: 0;

	${({ cursor }) => useCursor(cursor)}
	${({ propFill }) => fill(propFill)}
	${({ propWidth }) => width(propWidth)}
	${({ propHeight }) => height(propHeight)}
	${({ propBorder }) => border(propBorder)}
	${({ propRadius }) => radius(propRadius)}
	${({ propPadding }) => padding(propPadding)}
	${({ propMargin }) => margin(propMargin)}
`;

const BaseMotionWrapper = styled.div<BaseElementComponent.Style & BaseElementComponent.StyleInternal>`
	${({ propWidth }) => width(propWidth)}
	${({ propHeight }) => height(propHeight)}
	${({ propMargin }) => margin(propMargin)}
`;

const BaseMotionElement = styled(motion.div)<BaseElementComponent.Style & BaseElementComponent.StyleInternal>`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-shrink: 0;
	justify-content: ${({ align, direction }) => justifyContent(align, direction)};
	align-items: ${({ align, direction }) => alignItems(align, direction)};
	background-color: ${({ propColor }) => background(propColor)};
	flex-direction: ${({ propDirection }) => direction(propDirection)};

	${({ cursor }) => useCursor(cursor)}
	${({ propFill }) => fill(propFill)}
	${({ propBorder }) => border(propBorder)}
	${({ propRadius }) => radius(propRadius)}
	${({ propPadding }) => padding(propPadding)}
	${({ propMargin }) => margin(propMargin)}
`;

export default {
	BaseElement,
	BaseMotionWrapper,
	BaseMotionElement,
};
