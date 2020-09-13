import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import Weather from './Weather'
import DiveMap from './diveMap'
import GetDives from './GetDives'
import { Table } from 'reactstrap';


const Home = props => {
  console.log(props)
  const [diveInfo, setDiveInfo] = useState([])
useEffect(() => {
  async function getData() {
    const res = await GetDives();
    setDiveInfo(res.data);
  }
  getData()
  
}, []);
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
          <Table striped bordered condensed hover className="diveInfo">
                <thead>
                    <tr>
                    <th>Dive #</th>
                    <th>Date</th>
                    <th>City</th>
                    <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                   {diveInfo.map((row, index) => (
                    //row.diveNumber.sort(function(a, b){return b - a});
                    <tr key = {index}>
                    <td>{row.diveNumber}</td>
                    <td>{row.date}</td>
                    <td>{row.city}</td>
                    <td>{row.country}</td>
                    
                    </tr>
                   )
                   )}  
                </tbody>
                </Table>

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