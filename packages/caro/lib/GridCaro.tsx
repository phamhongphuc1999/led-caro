import './styles/grid-caro.style.css';
import { GridCaroProps } from './type';
import { cssMerge, styleMerge } from './utils';

export function GridCaro(params: GridCaroProps) {
  const { rows, columns, squares, gridProps, mode = 'square', ...props } = params;

  return (
    <div
      {...props}
      style={styleMerge(
        props.style,
        mode == 'square' ? { aspectRatio: `${columns / rows}` } : undefined,
      )}
      className={cssMerge('grid-caro-contain', props.className)}
    >
      {new Array(rows).fill(0).map((_, i) => {
        return (
          <div className="gird-caro-row">
            {new Array(columns).fill(0).map((_, j) => {
              const _props = squares?.[`${i}-${j}`];

              return (
                <div
                  key={`${i}-${j}`}
                  {...gridProps}
                  {..._props}
                  className={cssMerge('grid-caro-item', gridProps?.className, _props?.className)}
                  style={styleMerge(gridProps?.style, _props?.style)}
                >
                  {`${i + 1}-${j + 1}`}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
