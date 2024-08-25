import './styles/grid-caro.style.css';
import { GridCaroProps } from './type';
import { styleMerge } from './utils';

export function GridCaro(params: GridCaroProps) {
  const {
    rows,
    columns,
    stickSize = 1,
    stickColor = '#49e673',
    borderMode = 'equal',
    squares,
    gridProps,
    mode = 'square',
    ...props
  } = params;

  return (
    <div
      {...styleMerge(props, {
        style: {
          aspectRatio: mode == 'square' ? `${columns / rows}` : 'initial',
          border: borderMode == 'equal' ? `${stickSize / 2}px solid ${stickColor}` : '',
        },
        className: 'grid-caro-contain',
      })}
    >
      {new Array(rows).fill(0).map((_, i) => {
        return (
          <div key={i} className="gird-caro-row">
            {new Array(columns).fill(0).map((_, j) => {
              const iStyle = i % 2 == 0 ? 'even' : 'odd';
              const jStyle = j % 2 == 0 ? 'even' : 'odd';
              const _props = squares?.[`${i}-${j}`];
              const _props1 = squares?.[`${iStyle}-${j}`];
              const _props2 = squares?.[`${i}-${jStyle}`];
              const _props3 = squares?.[`${iStyle}-${jStyle}`];

              return (
                <div
                  key={`${i}-${j}`}
                  {...styleMerge(gridProps, _props, _props1, _props2, _props3, {
                    style: { border: `${stickSize / 2}px solid ${stickColor}` },
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
