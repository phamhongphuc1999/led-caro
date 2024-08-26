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
        style={{ width: '400px' }}
        rows={15}
        columns={15}
        squares={{
          '<5->=2': { className: 'grid-item1' },
        }}
      />
    </div>
  );
}
