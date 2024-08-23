import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type CaroBoardMode = 'square' | 'normal';

export interface BasicCaroProps extends DivProps {
  rows: number;
  columns: number;
  stickSize?: number;
  stickColor?: string;
  mode?: CaroBoardMode;
}
