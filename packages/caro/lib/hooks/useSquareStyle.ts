import { useMemo } from 'react';
import { DivProps, SquareKeyType, SquareStyleType } from '../type';
import { styleMerge } from 'lib/utils';

export function isOk(validate: string, num: number): boolean {
  if (/>{1}={1}/.test(validate)) {
    const _check = parseInt(validate.substring(2));
    return num >= _check;
  } else if (/>{1}/.test(validate)) {
    const _check = parseInt(validate.substring(1));
    return num > _check;
  } else if (/<{1}={1}/.test(validate)) {
    const _check = parseInt(validate.substring(2));
    return num <= _check;
  } else if (/<{1}/.test(validate)) {
    const _check = parseInt(validate.substring(1));
    return num < _check;
  } else if (validate == 'even') return num % 2 == 0;
  else if (validate == 'odd') return num % 2 == 1;
  else return num == parseInt(validate);
}

type ReturnType = (i: number, j: number) => DivProps | undefined;
export function makeSquareStyle(squareStyle: SquareStyleType): ReturnType {
  const keys = Object.keys(squareStyle);

  return (i: number, j: number) => {
    const result: Array<DivProps | undefined> = [];
    for (const key of keys) {
      const pair = key.split('-');
      const item1 = pair[0];
      const item2 = pair[1];
      const _ok1 = isOk(item1, i);
      const _ok2 = isOk(item2, j);
      if (_ok1 && _ok2) result.push(squareStyle[key as SquareKeyType]);
    }
    return styleMerge(...result);
  };
}

export function useSquareStyle(squareStyle?: SquareStyleType) {
  return useMemo(() => {
    let _fn: ReturnType | undefined = undefined;
    if (squareStyle) _fn = makeSquareStyle(squareStyle);
    else _fn = undefined;
    return { fn: _fn };
  }, [squareStyle]);
}
