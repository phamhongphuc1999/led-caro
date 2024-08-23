import { CSSProperties } from 'react';

export function cssMerge(...params: Array<string | undefined>) {
  const result: Array<string> = [];
  params.forEach((param) => {
    if (param) result.push(param);
  });
  return result.join(' ');
}

export function styleMerge(...params: Array<CSSProperties | undefined>) {
  let result: CSSProperties = {};
  params.forEach((params) => {
    if (params) result = { ...result, ...params };
  });
  return result;
}
