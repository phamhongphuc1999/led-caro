import { AnimationCaro } from 'lib/AnimationCaro';
import { BasicCaro } from 'lib/BasicCaro';
import { GridCaro } from 'lib/GridCaro';
import './app.style.css';

export function App() {
  return (
    <div id="root">
      <BasicCaro style={{ width: '100px', marginBottom: '1rem' }} rows={5} columns={5} />
      <div className="container">
        <GridCaro
          stickColor="black"
          stickSize={1}
          style={{ width: '500px' }}
          gridProps={(i, j) => ({
            children: <p style={{ fontSize: '8px' }}>{`${i}-${j}`}</p>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
          })}
          rows={15}
          columns={15}
          squares={[
            {
              xAxis: { $gte: 9, $lte: 12 },
              yAxis: { $gte: 1, $lte: 3 },
              $or: [
                { xAxis: { $gte: 1, $lte: 3 }, yAxis: { $gte: 6, $lte: 9 } },
                { xAxis: { $mod: [3, 2] }, yAxis: { $gte: 10, $lte: 15 } },
              ],
              props: { className: 'grid-item1' },
            },
            {
              xAxis: { $or: [{ $eq: 1 }, { $eq: 4 }, { $eq: 11 }] },
              yAxis: { $in: [0, 1, 3, 6, 9] },
              props: { className: 'grid-item2' },
            },
            {
              xAxis: { $regex: /1{1}/ },
              yAxis: { $mod: [2, 1] },
              props: { className: 'grid-item3' },
            },
          ]}
        />
        <AnimationCaro
          stickColor="black"
          stickSize={1}
          style={{ width: '500px' }}
          gridProps={(i, j) => ({
            children: <p style={{ fontSize: '8px' }}>{`${i}-${j}`}</p>,
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
          })}
          rows={15}
          columns={15}
          squares={[
            {
              props: [
                {
                  xAxis: { $gte: 9, $lte: 12 },
                  yAxis: { $gte: 1, $lte: 3 },
                  $or: [
                    { xAxis: { $gte: 1, $lte: 3 }, yAxis: { $gte: 6, $lte: 9 } },
                    { xAxis: { $mod: [3, 2] }, yAxis: { $gte: 10, $lte: 15 } },
                  ],
                  props: { className: 'grid-item1' },
                },
              ],
            },
            {
              span: 2,
              props: [
                {
                  xAxis: { $or: [{ $eq: 1 }, { $eq: 4 }, { $eq: 11 }] },
                  yAxis: { $in: [0, 1, 3, 6, 9] },
                  props: { className: 'grid-item2' },
                },
              ],
            },
            {
              props: [
                {
                  xAxis: { $regex: /1{1}/ },
                  yAxis: { $mod: [2, 1] },
                  props: { className: 'grid-item3' },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
