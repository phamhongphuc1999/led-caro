import { BasicCaro } from 'lib/BasicCaro';
import { GridCaro } from 'lib/GridCaro';
import './app.style.css';

export function App() {
  return (
    <div id="root">
      <BasicCaro style={{ width: '100px', marginBottom: '1rem' }} rows={5} columns={5} />
      <GridCaro
        stickColor="black"
        stickSize={1}
        style={{ width: '700px' }}
        gridProps={(i, j) => ({
          children: <p style={{ fontSize: '10px' }}>{`${i}-${j}`}</p>,
          style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
        })}
        rows={15}
        columns={15}
        squares={[
          {
            xAxis: { $gt: 9, $lte: 12 },
            yAxis: { $gte: 10, $lte: 13 },
            props: { className: 'grid-item1' },
          },
          {
            xAxis: { $or: [{ $e: 1 }, { $e: 4 }, { $e: 11 }] },
            yAxis: { even: true },
            props: { className: 'grid-item2' },
          },
          { xAxis: { $regex: /1{1}/ }, yAxis: { odd: true }, props: { className: 'grid-item3' } },
        ]}
      />
    </div>
  );
}
