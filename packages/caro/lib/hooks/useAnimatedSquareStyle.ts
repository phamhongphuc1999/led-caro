import { AnimatedSquareStyleType, SimpleAnimatedSquareStyleType } from 'lib/type';
import { useMemo } from 'react';
import { makeSquaresStyle } from './useSquaresStyle';

export function useAnimatedSquareStyle(
  rows: number,
  columns: number,
  squares?: Array<AnimatedSquareStyleType>,
) {
  const data = useMemo(() => {
    const _squares = squares ?? [];
    const result: Array<SimpleAnimatedSquareStyleType> = [];
    for (const animatedSquare of _squares) {
      const span = animatedSquare.span ?? 1;
      const props = animatedSquare.props;
      const partResult = makeSquaresStyle(rows, columns, props);
      result.push({ span, props: partResult });
    }
    return { style: result, metadata: { size: result.length } };
  }, [rows, columns, squares]);

  return data;
}
