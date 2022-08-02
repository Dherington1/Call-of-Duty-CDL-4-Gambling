import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Homepage from './pages/Homepage';
import MW2022Page from './pages/MW2022Page';
import Tester from './pages/tester';


function App() {
  
  return (
    <>
        <Router basename="/Call-of-Duty-CDL-4-Gambling">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path='/MW2022' component={MW2022Page}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
