import { useSquaresStyle } from './hooks/useSquaresStyle';
import { SimpleGridCaro } from './SimpleGridCaro';
import './styles/grid-caro.style.css';
import { GridCaroProps } from './type';

export function GridCaro(params: GridCaroProps) {
  const {
    rows,
    columns,
    stickSize,
    stickColor,
    borderMode,
    squares,
    gridProps,
    mode = 'square',
    ...props
  } = params;
  const styles = useSquaresStyle(rows, columns, squares);

  return (
    <SimpleGridCaro
      {...props}
      rows={rows}
      columns={columns}
      stickSize={stickSize}
      stickColor={stickColor}
      borderMode={borderMode}
      squares={styles}
      gridProps={gridProps}
      mode={mode}
    />
  );
}
