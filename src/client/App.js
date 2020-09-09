import React, { Component } from 'react';
import { Router, Route, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const jwtDecode = require('jwt-decode');

import './app.css';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './components/ProfilePage';





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
    } catch {
      //if token is not found, send user to landing page.
      history.push("/");
    }
  }

  const [user, setUser] = useState(userInfo);




  const handleLogin = e => {
    e.preventDefault();

    try {
      //jwtDecode just grabs the token. It does not validate the token.
      //userInfo will hold the user info in an object. If no jwt found, userInfo will hold the false value.
      userInfo = jwtDecode(cookies.diveLog);
      setUser(userInfo);

      history.push("/home");
      window.location.reload(false);
    } catch {
      //if token is not found, send user to landing page.
      history.push("/");
    }
    //if user is found, send to home component


  }

  const handleLogout = e => {
    e.preventDefault();

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
        <ProtectedRoute exact path='/ProfilePage' user={user} component={ProfilePage} handleLogout={handleLogout}/>
      </Router>
      
    </div>
  );
}

export default App;
