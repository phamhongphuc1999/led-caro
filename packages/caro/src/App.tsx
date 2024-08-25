import { BasicCaro } from 'lib/BasicCaro';
import { GridCaro } from 'lib/GridCaro';

export function App() {
  return (
    <div style={{ backgroundColor: 'gray', width: '100vw', height: '100vh' }}>
      <BasicCaro style={{ width: '100px', marginBottom: '1rem' }} rows={5} columns={5} />
      <GridCaro
        style={{ width: '300px' }}
        gridProps={{
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
          },
        }}
        rows={10}
        columns={10}
        squares={{
          'odd-5': { style: { backgroundColor: 'black' } },
          'even-3': { style: { backgroundColor: 'orange' } },
        }}
      />
    </div>
  );
}
