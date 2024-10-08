import { SimpleGridProps } from './type';
import { styleMerge } from './utils';

export function SimpleGridCaro(params: SimpleGridProps) {
  const {
    rows,
    columns,
    stickSize = 0,
    stickColor = 'transparent',
    borderMode = 'normal',
    squares = {},
    gridProps,
    mode = 'square',
    ...props
  } = params;

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
        className: 'led-caro-grid-contain',
      })}
    >
      {new Array(rows).fill(0).map((_, i) => {
        return (
          <div key={i} className="led-caro-gird-row">
            {new Array(columns).fill(0).map((_, j) => {
              const _baseProps = gridProps ? gridProps(i, j) : {};
              const _props = squares[`${i}-${j}`];

              return (
                <div
                  key={`${i}-${j}`}
                  {...styleMerge(_baseProps, _props, {
                    style: {
                      border:
                        borderMode == 'normal' ? `${stickSize / 2}px solid ${stickColor}` : '',
                    },
                    className: 'led-caro-grid-item',
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
