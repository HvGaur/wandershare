// import logo from './logo.svg';
import './App.css';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1IjoidnhyZGh4biIsImEiOiJjbHowZGlvcG4ybjlhMmxzZ3J1bnF2NnFhIn0.zKLnfiTWhX9vVaGv-ScF9g';

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
