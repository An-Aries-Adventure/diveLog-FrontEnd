import React from 'react';

const Navigation = props => {
  
  return (
    <>
      <nav class="navbar navbar-expand-sm dark-red justify-content-center">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/Home">Home</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="/AddFriends">Add Friend</a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="/ProfilePage">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href onClick={props.handleLogout} >Log Out</a>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navigation;