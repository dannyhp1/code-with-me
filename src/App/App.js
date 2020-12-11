import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Header from '../components/Header';
import SingleEditorWrapper from '../components/SingleEditorWrapper';
import DualEditorWrapper from '../components/DualEditorWrapper';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#90caf9',
    },
    secondary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path='/' component={SingleEditorWrapper} />
          <Route exact path='/room/:id' component={DualEditorWrapper} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
