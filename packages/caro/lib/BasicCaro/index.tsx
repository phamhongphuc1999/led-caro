import { cssMerge, styleMerge } from 'lib/utils';
import { BasicCaroProps } from '../type';
import './basic-caro.style.css';

export function BasicCaro(params: BasicCaroProps) {
  const { rows, columns, stickSize = 1, stickColor = 'yellow', mode = 'square', ...props } = params;

  return (
    <div
      {...props}
      style={styleMerge(
        props.style,
        mode == 'square' ? { aspectRatio: `${columns / rows}` } : undefined,
        { border: `${stickSize}px solid ${stickColor}` },
      )}
      className={cssMerge('led-caro-contain', props.className)}
    >
      <div className="led-caro-full led-caro-contain-row">
        {new Array(rows + 1).fill(0).map((_) => {
          return <div className="led-caro-stick-row" style={{ backgroundColor: stickColor }} />;
        })}
      </div>
      <div className="led-caro-contain-column">
        {new Array(columns + 1).fill(0).map((_) => {
          return <div className="led-caro-stick-column" style={{ backgroundColor: stickColor }} />;
        })}
      </div>
    </div>
  );
}
