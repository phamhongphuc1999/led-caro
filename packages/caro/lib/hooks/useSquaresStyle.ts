import { isBase, styleMerge } from 'lib/utils';
import { useMemo } from 'react';
import { SimpleSquareStyleType, SquareStyleType } from '../type';

export function makeSquareStyle(
  rows: number,
  columns: number,
  square: SquareStyleType,
): SimpleSquareStyleType {
  const _xAxis = square.xAxis;
  const _yAxis = square.yAxis;
  const _props = square.props;
  const result: SimpleSquareStyleType = {};
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const isXOk = isBase(row, _xAxis);
      const isYOk = isBase(column, _yAxis);
      if (isXOk && isYOk)
        result[`${row}-${column}`] = styleMerge(result[`${row}-${column}`], _props);
    }
  }
  const $or = square.$or;
  if ($or) {
    for (const location of $or) {
      const xAxis = location.xAxis;
      const yAxis = location.yAxis;
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const isXOk = isBase(row, xAxis);
          const isYOk = isBase(column, yAxis);
          if (isXOk && isYOk)
            result[`${row}-${column}`] = styleMerge(result[`${row}-${column}`], _props);
        }
      }
    }
  }
  return result;
}

export function makeSquaresStyle(
  rows: number,
  columns: number,
  squares?: Array<SquareStyleType>,
): SimpleSquareStyleType {
  if (squares) {
    const result: Array<SimpleSquareStyleType> = [];
    for (const square of squares) {
      result.push(makeSquareStyle(rows, columns, square));
    }
    return styleMerge(...result) ?? {};
  } else return {};
}

export function useSquaresStyle(
  rows: number,
  columns: number,
  squares?: Array<SquareStyleType>,
): SimpleSquareStyleType {
  return useMemo(() => {
    return makeSquaresStyle(rows, columns, squares);
  }, [rows, columns, squares]);
}
