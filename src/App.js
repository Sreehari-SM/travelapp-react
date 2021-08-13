import logo from './logo.svg';
import './App.css';
import Home from './Components/Screens/Home';
import About from './Components/Screens/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Components/Screens/includes/Nav';

function App() {
  return (
    <Router>
      <>
      <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about/:id">
            <About />
          </Route>
          
        </Switch>
      </>
    </Router>
  );
}

export default App;
