import { useCallback, useEffect, useState } from 'react';
import { useAnimatedSquareStyle } from './hooks/useAnimatedSquareStyle';
import { SimpleGridCaro } from './SimpleGridCaro';
import { AnimationCaroProps } from './type';

type CounterType = { tick: number; span: number; index: number };

export function AnimationCaro(params: AnimationCaroProps) {
  const {
    rows,
    columns,
    mode,
    stickSize,
    stickColor,
    borderMode,
    squares,
    gridProps,
    interval = 1000,
    ...props
  } = params;
  const { style, metadata } = useAnimatedSquareStyle(rows, columns, squares);
  const [counter, setCounter] = useState<CounterType>({
    tick: 0,
    span: metadata.size > 0 ? style[0].span : 0,
    index: 0,
  });

  const _timer = useCallback(() => {
    setCounter((preValue) => {
      let _tick = preValue.tick + 1;
      let _span = preValue.span;
      let _index = preValue.index;
      if (_tick >= _span) {
        _index = _index + 1;
        if (_index == metadata.size) {
          _tick = 0;
          _span = style[0].span;
          _index = 0;
        } else _span += style[_index].span;
      }
      return { tick: _tick, span: _span, index: _index };
    });
  }, [style, metadata.size]);

  useEffect(() => {
    if (metadata.size == 0) return;
    const id = setInterval(_timer, interval);
    return () => clearInterval(id);
  }, [_timer, interval, metadata.size]);

  return (
    <SimpleGridCaro
      {...props}
      rows={rows}
      columns={columns}
      mode={mode}
      stickSize={stickSize}
      stickColor={stickColor}
      borderMode={borderMode}
      gridProps={gridProps}
      squares={style[counter.index].props}
    />
  );
}
