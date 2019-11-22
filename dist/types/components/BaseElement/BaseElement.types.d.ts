import { MotionProps, MotionStyle } from 'framer-motion';
import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
export declare namespace BaseElementComponent {
    export type CursorTypes = '-moz-grab' | '-webkit-grab' | 'alias' | 'all-scroll' | 'auto' | 'cell' | 'col-resize' | 'context-menu' | 'copy' | 'crosshair' | 'default' | 'e-resize' | 'ew-resize' | 'grab' | 'grabbing' | 'help' | 'move' | 'n-resize' | 'ne-resize' | 'nesw-resize' | 'no-drop' | 'none' | 'not-allowed' | 'ns-resize' | 'nw-resize' | 'nwse-resize' | 'pointer' | 'progress' | 'row-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'text' | 'vertical-text' | 'w-resize' | 'wait' | 'zoom-in' | 'zoom-out';
    export type Alignment = {
        x?: AlignmentTypes;
        y?: AlignmentTypes;
    };
    type MinMax = {
        min?: number;
        max?: number;
    };
    export type Fill = boolean | string;
    export type Direction = 'column' | 'row';
    export type Width = number | string | MinMax | null;
    export type Height = number | string | MinMax | null;
    export type Border = {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    export type Radius = {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    export type AlignmentTypes = 'start' | 'center' | 'end';
    export interface Props extends Style {
        animation?: Omit<MotionProps, 'style'> | boolean;
        fill?: Fill;
        width?: Width;
        height?: Height;
        style?: CSSProperties & MotionStyle;
        children?: ReactNode;
        border?: Border;
        radius?: string;
        padding?: string;
        margin?: string;
        color?: string;
    }
    export interface PropsInternal {
        className?: string;
        tag?: keyof JSX.IntrinsicElements;
    }
    export interface Style {
        spacing?: number;
        center?: boolean | 'x' | 'y';
        size?: number;
        direction?: Direction;
        cursor?: CursorTypes;
        align?: Alignment | 'center';
    }
    export interface StyleInternal {
        propFill?: Fill;
        propDirection?: Direction;
        propWidth?: Width;
        propHeight?: Height;
        propBorder?: Border;
        propRadius?: string;
        propPadding?: string;
        propMargin?: string;
        propColor?: string;
    }
    export {};
}
