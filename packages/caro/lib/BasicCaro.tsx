import { BasicCaroProps } from './type';

export function BasicCaro({ rows, columns, ...props }: BasicCaroProps) {
  return (
    <div {...props}>
      {new Array(rows).map((_) => {
        return <div style={{ height: '1px', width: '100%' }} />;
      })}
    </div>
  );
}
