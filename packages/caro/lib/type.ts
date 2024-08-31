import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type CaroBoardMode = 'square' | 'normal';
export type SimpleSquareStyleType = { [key: `${number}-${number}`]: DivProps | undefined };

export type CoreSquareStyleType = Partial<{
  $gt: number;
  $gte: number;
  $lt: number;
  $lte: number;
  $e: number;
  $regex: RegExp;
  odd: boolean;
  even: boolean;
}>;
type SquareStyleTypeAnd = CoreSquareStyleType;
type SquareStyleTypeOr = { $or?: Array<CoreSquareStyleType> };
export type BaseSquareStyleType = SquareStyleTypeAnd & SquareStyleTypeOr;
export type SquareStyleType = {
  xAxis?: BaseSquareStyleType;
  yAxis?: BaseSquareStyleType;
  props: DivProps;
};
export type AnimatedSquareStyleType = {
  span?: number;
  props?: Array<SquareStyleType>;
};
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
  borderMode?: 'normal' | 'container' | 'none';
  squares?: Array<SquareStyleType>;
  gridProps?: (row: number, column: number) => DivProps;
}

export interface AnimationCaroProps extends Omit<GridCaroProps, 'squares'> {
  squares?: Array<AnimatedSquareStyleType>;
  interval?: number;
}
