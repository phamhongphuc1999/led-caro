import { BasicCaro } from 'lib/BasicCaro';

export function App() {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BasicCaro style={{ width: '500px' }} rows={20} columns={20} />
    </div>
  );
}
