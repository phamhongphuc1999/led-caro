import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type CounterType = { tick: number; span: number; index: number };
export type CaroBoardMode = 'square' | 'normal';
export type SimpleSquareStyleType = { [key: `${number}-${number}`]: DivProps | undefined };
export type SimpleAnimatedSquareStyleType = {
  span: number;
  props: SimpleSquareStyleType;
};

export type CoreSquareStyleType = Partial<{
  $gt: number;
  $gte: number;
  $lt: number;
  $lte: number;
  $eq: number;
  $in: Array<number>;
  $regex: RegExp;
  $mod: [divisor: number, remainder: number];
}>;
type SquareStyleTypeAnd = CoreSquareStyleType;
type SquareStyleTypeOr = { $or?: Array<CoreSquareStyleType> };
export type BaseSquareStyleType = number | (SquareStyleTypeAnd & SquareStyleTypeOr);
export type LocationType = { xAxis?: BaseSquareStyleType; yAxis?: BaseSquareStyleType };
export type SquareStyleType = LocationType & {
  $or?: Array<LocationType>;
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

export interface SimpleGridProps extends BasicCaroProps {
  borderMode?: 'normal' | 'container' | 'none';
  squares?: SimpleSquareStyleType;
  gridProps?: (row: number, column: number) => DivProps;
}

export interface GridCaroProps extends Omit<SimpleGridProps, 'squares'> {
  squares?: Array<SquareStyleType>;
}

export interface AnimationCaroProps extends Omit<GridCaroProps, 'squares'> {
  squares?: Array<AnimatedSquareStyleType>;
  interval?: number;
  events?: {
    onTick?: (data: CounterType) => void;
  };
}
