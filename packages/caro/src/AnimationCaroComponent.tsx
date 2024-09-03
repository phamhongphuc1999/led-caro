import { AnimationCaro } from 'lib/AnimationCaro';
import { squares } from './config';
import { CounterType } from 'lib/type';
import { useState } from 'react';

interface Props {
  rows: number;
  columns: number;
}

export function AnimationCaroComponent({ rows, columns }: Props) {
  const [color, setColor] = useState('#ad6636');

  function onTick(value: CounterType) {
    if (value.index == 0) setColor('#ad6636');
    else if (value.index == 2) setColor('#6cc75f');
    else if (value.index == 11) setColor('#3636ad');
    else if (value.index == 14) setColor('#ad36a3');
    else if (value.index == 17) setColor('#6cc75f');
    else if (value.index == 21) setColor('#ad36a3');
    else if (value.index == 25) setColor('#ad6636');
  }

  return (
    <AnimationCaro
      stickColor={color}
      stickSize={0.5}
      style={{ width: '500px' }}
      rows={rows}
      columns={columns}
      squares={squares}
      events={{ onTick }}
    />
  );
}
