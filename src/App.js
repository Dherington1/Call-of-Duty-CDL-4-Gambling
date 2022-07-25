import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  
  return (
    <>
        <Router basename="/Pokemon-Team-Builder">
          <Switch>
                <Route exact path="/" component={Homepage} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
