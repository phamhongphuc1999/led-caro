/* eslint-disable @typescript-eslint/no-explicit-any */

function isObject(item: any): boolean {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}
function _deepMerge<T extends object>(target: T, ...sources: Array<Partial<T>>): T {
  if (!sources.length) return target;
  const _target = { ...target };
  const source = sources.shift();
  if (isObject(_target) && isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        if (isObject(sourceValue) && isObject(_target[key])) {
          _target[key] = _deepMerge(_target[key] as any, sourceValue as any);
        } else (_target as any)[key] = sourceValue;
      }
    }
  }
  return _deepMerge(_target, ...sources);
}
export function deepMerge<T extends object>(...sources: Array<T | undefined>): T | undefined {
  let result: T | undefined = undefined;
  for (const source of sources) {
    if (source) result = result ? _deepMerge(result, source) : source;
  }
  return result;
}
export function styleMerge<T extends object>(...sources: Array<T | undefined>): T | undefined {
  let result: T | undefined = undefined;
  for (const source of sources) {
    if (source) {
      if (result) {
        const _class1: string = (result as { className?: string }).className ?? '';
        const _class2: string = (source as { className?: string }).className ?? '';
        const _class = `${_class1} ${_class2}`;
        if (_class.length > 0) result = { ..._deepMerge(result, source), className: _class };
        else result = _deepMerge(result, source);
      } else result = source;
    }
  }
  return result;
}
