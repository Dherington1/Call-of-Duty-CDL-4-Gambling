import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import MW2022Page from './pages/MW2022Page';

function App() {
  
  return (
    <>
        <Router basename="Comms">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path='/MW2022' component={MW2022Page}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
