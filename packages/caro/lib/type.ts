import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type CaroBoardMode = 'square' | 'normal';

export interface RootCaroProps extends DivProps {
  rows: number;
  columns: number;
  mode?: CaroBoardMode;
}
export interface BasicCaroProps extends RootCaroProps {
  stickSize?: number;
  stickColor?: string;
}
export interface GridCaroProps extends RootCaroProps {
  squares?: { [key: `${number}-${number}`]: DivProps };
  gridProps?: DivProps;
}
