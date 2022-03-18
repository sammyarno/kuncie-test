import { VFC } from 'react';
import './styles.scss';

const App: VFC = () => (
  <div className="home">
    <div className="search-container">
      <input type="text" placeholder="type class name.." />
    </div>
  </div>
);

export default App;
