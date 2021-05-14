import { Root } from './root';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

function App() {
  return (
      <Router>
        <Root/>
      </Router>
  );
}

export default App;
