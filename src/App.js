// import logo from './logo.svg';
import './App.css';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
  <Router>
    <MainNavigation />
    <main>
  <Switch>
    <Route path = "/" exact> {/* or <Route path = "/" exact = {true }element = {Users} />*/}
      <Users />
    </Route>
    <Route path="/:userId/places" exact>
      <UserPlaces></UserPlaces>
    </Route>

    <Route path = "/places/new" exact>
      <NewPlace />
    </Route>

    <Redirect to="/" />
  </Switch>
  </main>
  </Router>
  );
}

export default App;
