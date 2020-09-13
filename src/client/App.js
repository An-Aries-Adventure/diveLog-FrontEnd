import React, { useState } from 'react';
import { Router, Route, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';

import './app.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './components/ProfilePage';
import NewDiveRecord from './components/NewDiveRecord'
import DiveMap from './components/diveMap'



function App() {
  const cookieName = 'diveLog';
  const [cookies, setCookie, removeCookie] = useCookies([cookieName]);
  const history = useHistory();
  let userInfo = false;

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  //checks if cookie is found
  if (!isEmpty(cookies)) {
    try {
      //jwtDecode just grabs the token. It does not validate the token.
      //userInfo will hold the user info in an object. If no jwt found, userInfo will hold the false value.
      userInfo = jwtDecode(cookies.diveLog);
    } catch(err) {
      //if token is not found, send user to landing page.
      console.log("error", err);
      history.push("/home");
    }
  }

  const [user, setUser] = useState(userInfo);




  const handleLogin = e => {
    console.log("handle login event", e);
    e.preventDefault();
    //e.persist();
   
    try {
      //jwtDecode just grabs the token. It does not validate the token.
      //userInfo will hold the user info in an object. If no jwt found, userInfo will hold the false value.
      console.log('c',cookies);
      userInfo = jwtDecode(cookies.diveLog);
      setUser(userInfo);
      //if user is found, send to home component
      history.push("/Home");
      window.location.reload(false);
    } catch(err) {
      //if token is not found, send user to landing page.
      console.log("login error", err);
      history.push("/");
    }
   
  }

  const handleLogout = e => {
    e.preventDefault()
    // e.persist();

    //if user logs out, set user to false and remove cookie
    setUser(false);
    window.location.reload(false);
    removeCookie(cookieName, { path: '/' });
  }

  const setCookieApp = (jwt) => {
    let d = new Date();
    setCookie(cookieName, jwt)
  };

  return (
    <div className="App" >
      <Router history={history}>
        <Route exact path='/' handleLogin={handleLogin} render={props => <LandingPage {...props} user={user} handleLogin={handleLogin} setCookieApp={setCookieApp} />} />
        <ProtectedRoute exact path='/Home' user={user} component={Home} handleLogout={handleLogout} />
        <ProtectedRoute exact path='/NewDiveRecord' user={user} component={NewDiveRecord} />
        <ProtectedRoute exact path='/diveMap' user={user} component={DiveMap} />
        <ProtectedRoute exact path='/ProfilePage' user={user} component={ProfilePage} handleLogout={handleLogout}/>
      </Router>
    </div>
  );
}

export default App;
