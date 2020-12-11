import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SingleEditorWrapper from '../components/SingleEditorWrapper';
import DualEditorWrapper from '../components/DualEditorWrapper';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Switch>
            <Route exact path='/' component={SingleEditorWrapper} />
            <Route exact path='/room/:id' component={DualEditorWrapper} />
          </Switch>

        </header>
      </div>
    </Router>
  );
}

export default App;
