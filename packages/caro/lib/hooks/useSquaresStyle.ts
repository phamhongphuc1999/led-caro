import { styleMerge } from 'lib/utils';
import { useMemo } from 'react';
import {
  BaseSquareStyleType,
  CoreSquareStyleType,
  SimpleSquareStyleType,
  SquareStyleType,
} from '../type';

function isAnd(position: number, style: CoreSquareStyleType): boolean {
  if (style.$e && position != style.$e) return false;
  if (style.$gt && style.$gt >= position) return false;
  if (style.$gte && style.$gte > position) return false;
  if (style.$lt && style.$lt <= position) return false;
  if (style.$lte && style.$lte < position) return false;
  if (style.even && position % 2 == 1) return false;
  if (style.odd && position % 2 == 0) return false;
  if (style.$regex && !style.$regex.test(position.toString())) return false;
  return true;
}

function isOr(position: number, styles: Array<CoreSquareStyleType>): boolean {
  for (const style of styles) {
    if (isAnd(position, style)) return true;
  }
  return false;
}

function isBase(position: number, style?: BaseSquareStyleType): boolean {
  if (style) {
    const _isAnd = isAnd(position, style);
    const _isOr = style.$or ? isOr(position, style.$or) : true;
    return _isAnd && _isOr;
  } else return true;
}

function makeSquareStyle(
  rows: number,
  columns: number,
  style: SquareStyleType,
): SimpleSquareStyleType {
  const _xAxis = style.xAxis;
  const _yAxis = style.yAxis;
  const _props = style.props;
  const result: SimpleSquareStyleType = {};
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const isXOk = isBase(row, _xAxis);
      const isYOk = isBase(column, _yAxis);
      if (isXOk && isYOk)
        result[`${row}-${column}`] = styleMerge(result[`${row}-${column}`], _props);
    }
  }
  return result;
}

export function makeSquaresStyle(
  rows: number,
  columns: number,
  styles?: Array<SquareStyleType>,
): SimpleSquareStyleType {
  if (styles) {
    const result: Array<SimpleSquareStyleType> = [];
    for (const style of styles) {
      result.push(makeSquareStyle(rows, columns, style));
    }
    return styleMerge(...result) ?? {};
  } else return {};
}

export function useSquaresStyle(
  rows: number,
  columns: number,
  squareStyle?: Array<SquareStyleType>,
): SimpleSquareStyleType {
  return useMemo(() => {
    return makeSquaresStyle(rows, columns, squareStyle);
  }, [rows, columns, squareStyle]);
}
