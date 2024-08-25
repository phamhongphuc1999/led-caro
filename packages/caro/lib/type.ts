import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type CaroBoardMode = 'square' | 'normal';
export type SquareIndexType = 'odd' | 'even' | number;

export interface RootCaroProps extends DivProps {
  rows: number;
  columns: number;
  mode?: CaroBoardMode;
}
export interface BasicCaroProps extends RootCaroProps {
  stickSize?: number;
  stickColor?: string;
}
export interface GridCaroProps extends BasicCaroProps {
  borderMode?: 'normal' | 'equal';
  squares?: Partial<{ [key in `${SquareIndexType}-${SquareIndexType}`]: DivProps }>;
  gridProps?: DivProps;
}
