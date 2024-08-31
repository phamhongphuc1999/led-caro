import { GridCaro } from './GridCaro';
import { AnimationCaroProps } from './type';
import { styleMerge } from './utils';

export function AnimationCaro(params: AnimationCaroProps) {
  const { rows, columns, mode, stickSize, stickColor, borderMode, gridProps, interval } = params;

  function _gridProps(row: number, column: number) {
    const _props = gridProps ? gridProps(row, column) : {};
    return (
      styleMerge(_props, {
        className: 'led-caro-animation',
        style: { transitionDuration: interval ? `${interval}ms` : 'initial' },
      }) ?? {}
    );
  }

  return (
    <GridCaro
      rows={rows}
      columns={columns}
      mode={mode}
      stickSize={stickSize}
      stickColor={stickColor}
      borderMode={borderMode}
      gridProps={_gridProps}
    />
  );
}
