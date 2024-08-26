import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type CaroBoardMode = 'square' | 'normal';
type Operator = '>' | '<' | '>=' | '<=';
export type SquareIndexType = 'odd' | 'even' | `${Operator}${number}` | number;

export interface RootCaroProps extends DivProps {
  rows: number;
  columns: number;
  mode?: CaroBoardMode;
}
export interface BasicCaroProps extends RootCaroProps {
  stickSize?: number;
  stickColor?: string;
}
export type SquareKeyType = `${SquareIndexType}-${SquareIndexType}`;
export type SquareStyleType = Partial<{
  [key in SquareKeyType]: DivProps;
}>;
export interface GridCaroProps extends BasicCaroProps {
  borderMode?: 'normal' | 'container' | 'none';
  squares?: SquareStyleType;
  gridProps?: DivProps;
}
