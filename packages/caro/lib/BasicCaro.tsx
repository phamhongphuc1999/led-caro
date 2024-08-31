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
        className: 'led-caro-basic-contain',
      })}
    >
      <div className="led-caro-basic-full led-caro-basic-contain-row">
        {new Array(rows + 1).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              className="led-caro-basic-stick-row"
              style={{ backgroundColor: stickColor }}
            />
          );
        })}
      </div>
      <div className="led-caro-basic-contain-column">
        {new Array(columns + 1).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              className="led-caro-basic-stick-column"
              style={{ backgroundColor: stickColor }}
            />
          );
        })}
      </div>
    </div>
  );
}
