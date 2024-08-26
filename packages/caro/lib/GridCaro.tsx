import { useSquareStyle } from './hooks/useSquareStyle';
import './styles/grid-caro.style.css';
import { GridCaroProps } from './type';
import { styleMerge } from './utils';

export function GridCaro(params: GridCaroProps) {
  const {
    rows,
    columns,
    stickSize = 0,
    stickColor = 'transparent',
    borderMode = 'normal',
    squares,
    gridProps,
    mode = 'square',
    ...props
  } = params;
  const { fn } = useSquareStyle(squares);

  return (
    <div
      {...styleMerge(props, {
        style: {
          aspectRatio: mode == 'square' ? `${columns / rows}` : 'initial',
          border:
            borderMode == 'normal' || borderMode == 'container'
              ? `${stickSize / 2}px solid ${stickColor}`
              : '0px',
        },
        className: 'grid-caro-contain',
      })}
    >
      {new Array(rows).fill(0).map((_, i) => {
        return (
          <div key={i} className="gird-caro-row">
            {new Array(columns).fill(0).map((_, j) => {
              const _props = fn ? fn(i, j) : undefined;

              return (
                <div
                  key={`${i}-${j}`}
                  {...styleMerge(gridProps, _props, {
                    style: {
                      border:
                        borderMode == 'normal' ? `${stickSize / 2}px solid ${stickColor}` : '',
                    },
                    className: 'grid-caro-item',
                  })}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
