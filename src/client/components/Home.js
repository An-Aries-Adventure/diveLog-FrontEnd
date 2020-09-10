import React from 'react';
import Navigation from './Navigation';


const Home = props => {
  return (
    <>
      <Navigation user={props.userInfo} handleLogout={props.handleLogout} />
      <div className="container-fluid">
        <div className="row" style={{ paddingTop: "50px" }}>
          <div className="col-lg-3">
            <div className="text-center ">
              <img src={'/src/client/components/images/dolphin.jpg'} alt="dolphin" className="dark-red mr-3 mt-3 rounded-circle shadow-lg p-4 mb-4 rounded" style={{ width: "230px" }} />
            </div>
            <div >
              <div className="text-center dark-red" style={{ width: "18rem", margin: "0 auto", paddingTop: "10px", marginBottom: "30px" }}>
                <img className="card-img-top" src={props.userInfo.profileImage} alt="Card image cap" style={{ width: "80px" }} />
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">{props.userInfo.firstName}</p>
                  <p className="card-text">{props.userInfo.lastName}</p>
                  <p className="card-text">{props.userInfo.email}</p>
                  <a href="/ProfilePage"><button className="btn-danger btn">View Profile</button></a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 shadow-lg p-4 mb-4">
            {/* <Post user={props.userInfo} /> */}
          </div>
          <div className="col-lg-3" style={{ padding: "50px" }}>
            {/* <ListFriends userInfo={props.userInfo} /> */}
            <hr />
            <div>
              {/* <AnswerFriendRequest currentUserId={props.userInfo._id} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;