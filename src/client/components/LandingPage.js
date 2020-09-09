import React from 'react';
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'


const LandingPage = props => {

  const handleSuccessfulAuth = e => {
    e.preventDefault();
  }

  return (
    <div>
      <br/>
      <br/>
      <div>
        <LoginForm setCookieApp={props.setCookieApp} handleLogin={props.handleLogin}/>
        <RegistrationForm handleSuccessfulAuth={handleSuccessfulAuth}/>
      </div>
      <div>
      </div>
    </div>
  )
};

export default LandingPage;
