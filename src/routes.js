import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';

import Menu from './Screens/Menu'
import Schedule from './Screens/Schedule'
import MapContainer from './Screens/Map'
import VenueScreen from './Screens/VenueScreen'
import BadgesScreen from './Screens/BadgesScreen'
import SnapScreen from './Screens/SnapScreen'

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/menu" render={(props) => <Menu auth={auth} {...props} />} />
          <Route path="/schedule" render={(props) => <Schedule auth={auth} {...props} />} />
          <Route path="/map" render={(props) => <MapContainer auth={auth} {...props} />} />
          <Route path="/venue" render={(props) => <VenueScreen auth={auth} {...props} />} />
          <Route path="/badges" render={(props) => <BadgesScreen auth={auth} {...props} />} />
          <Route path="/snaps" render={(props) => <SnapScreen auth={auth} {...props} />} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
