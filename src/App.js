// import logo from './logo.svg';
import './App.css';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
  <Router>
  <Switch>
    <Route path = "/" exact> {/* or <Route path = "/" exact = {true }element = {Users} />*/}
      <Users />
    </Route>

    <Route path = "/places/new" exact>
      <NewPlace />
    </Route>

    <Redirect to="/" />
  </Switch>
  </Router>
  );
}

export default App;
