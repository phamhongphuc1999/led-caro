import { BasicCaro } from 'lib/BasicCaro';
import { GridCaro } from 'lib/GridCaro';

export function App() {
  return (
    <div style={{ backgroundColor: 'gray', width: '100vw', height: '100vh' }}>
      <BasicCaro style={{ width: '100px', marginBottom: '1rem' }} rows={5} columns={5} />
      <GridCaro
        style={{ width: '300px' }}
        gridProps={{ style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } }}
        rows={5}
        columns={5}
        squares={{ '1-2': { style: { backgroundColor: 'red' } } }}
      />
    </div>
  );
}
