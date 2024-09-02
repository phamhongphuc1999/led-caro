import { BasicCaro } from 'lib/BasicCaro';
import '../lib/styles/grid-caro.style.css';
import { AnimationCaroComponent } from './AnimationCaroComponent';
import './app.style.css';

export function App() {
  return (
    <div id="root">
      <BasicCaro style={{ width: '100px', marginBottom: '1rem' }} rows={5} columns={5} />
      <div className="container">
        <AnimationCaroComponent rows={15} columns={15} />
        <AnimationCaroComponent rows={10} columns={10} />
      </div>
    </div>
  );
}
