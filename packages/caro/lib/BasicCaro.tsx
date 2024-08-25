import { styleMerge } from 'lib/utils';
import './styles/basic-caro.style.css';
import { BasicCaroProps } from './type';

export function BasicCaro(params: BasicCaroProps) {
  const {
    rows,
    columns,
    stickSize = 1,
    stickColor = '#49e673',
    mode = 'square',
    ...props
  } = params;

  return (
    <div
      {...styleMerge(props, {
        style: {
          border: `${stickSize}px solid ${stickColor}`,
          aspectRatio: mode == 'square' ? `${columns / rows}` : 'initial',
        },
        className: 'basic-caro-contain',
      })}
    >
      <div className="basic-caro-full basic-caro-contain-row">
        {new Array(rows + 1).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              className="basic-caro-stick-row"
              style={{ backgroundColor: stickColor }}
            />
          );
        })}
      </div>
      <div className="basic-caro-contain-column">
        {new Array(columns + 1).fill(0).map((_) => {
          return (
            <div className="basic-caro-stick-column" style={{ backgroundColor: stickColor }} />
          );
        })}
      </div>
    </div>
  );
}
