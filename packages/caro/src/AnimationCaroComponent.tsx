import { AnimationCaro } from 'lib/AnimationCaro';
import {
  prop1,
  prop10,
  prop11,
  prop12,
  prop13,
  prop14,
  prop15,
  prop16,
  prop17,
  prop18,
  prop19,
  prop2,
  prop20,
  prop21,
  prop22,
  prop23,
  prop24,
  prop25,
  prop26,
  prop3,
  prop4,
  prop5,
  prop6,
  prop7,
  prop8,
  prop9,
} from './config';

interface Props {
  rows: number;
  columns: number;
}

export function AnimationCaroComponent({ rows, columns }: Props) {
  return (
    <AnimationCaro
      stickColor="black"
      stickSize={1}
      style={{ width: '500px' }}
      rows={rows}
      columns={columns}
      squares={[
        { props: prop1 },
        { props: prop2 },
        { props: prop3 },
        { props: prop4 },
        { props: prop5 },
        { props: prop6 },
        { props: prop7 },
        { props: prop8 },
        { props: prop9 },
        { props: prop10 },
        { props: prop11 },
        { props: prop12 },
        { props: prop13 },
        { props: prop14 },
        { props: prop15 },
        { props: prop16 },
        { props: prop17 },
        { props: prop18 },
        { props: prop19 },
        { props: prop20 },
        { props: prop21 },
        { props: prop22 },
        { props: prop23 },
        { props: prop24 },
        { props: prop25 },
        { props: prop26 },
      ]}
    />
  );
}
