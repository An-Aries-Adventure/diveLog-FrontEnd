import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import Weather from './Weather';
import DiveMap from './DiveMap';
import GetDives from './GetDives';
import { Table } from 'reactstrap';
import Delete from './Delete';
import Favorite from './Favorite';
import DiveCard from './DiveCard';
import LeaderBoard from './LeaderBoard';
import ProfilePic from './ProfilePic';
import { Card } from 'antd';


const Home = props => {
  console.log('home', props);
  const [diveInfo, setDiveInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
  const res = await GetDives(props.userInfo._id);
  setDiveInfo(res.data);
  setLoading(false);
  console.log("result", res.data)
  
  };

  async function diveTable() {
  const { diveArray } = await diveInfo
  let sortedDiveArray = [...diveArray];
  sortedDiveArray.sort((a, b) => {
    if (a.date < b.date){
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });
   return (
    <Table striped bordered condensed hover className="diveInfo">
    <thead>
        <tr>
        <th>Dive #</th>
        <th>Date</th>
        <th>City</th>
        <th>Country</th>
        <th>Favorite</th>
        <th>Delete</th>
        </tr>
    </thead>
    <tbody>
       {diveInfo.map((row, index) => (
        //row.date.sort(function(a, b){return b - a});
        <tr key = {index}>
        <td>{row.diveNumber}</td>
        <td>{row.date}</td>
        <td>{row.city}</td>
        <td>{row.country}</td>
        <td><Favorite/></td>
        <td><Delete getData = {getData} diveId = {row._id}/></td>
        </tr>
       )
       )}  
    </tbody>
  </Table>
   );
  };


  return (
    <>
      <Navigation user={props.userInfo} handleLogout={props.handleLogout}/>
      <div className="container-fluid">
        <br/>
        <div className ="addDiveButton">
             <a href="/NewDiveRecord"><button className="enjoy-css">Add New Dive</button></a>
        </div>
        <div className="row" style={{ paddingTop: "50px"}}>
          <div className="col-lg-3">
            <div className="text-center "> 
            </div>
            <div >
              <div className="text-center dark-red" style={{ width: "18rem", margin: "0 auto", paddingTop: "10px", marginBottom: "30px" }}>
                <ProfilePic user={props.userInfo}/>
                <div className="card-body">
                 
                  <p className="card-text">{props.userInfo.firstName}</p>
                  <p className="card-text">{props.userInfo.lastName}</p>
                  <p className="card-text">{props.userInfo.email}</p>
                  <a href="/ProfilePage"><button className="btn-danger btn">View Profile</button></a>
                </div>
              </div>
            </div>
            <div>
            <Card className = "diveCard">
            <DiveCard user={props.userInfo}/>
             </Card>
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
                    <th>Favorite</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {diveInfo.map((row, index) => (
                    //row.date.sort(function(a, b){return b - a});
                    <tr key = {index}>
                    <td>{row.diveNumber}</td>
                    <td>{row.date}</td>
                    <td>{row.city}</td>
                    <td>{row.country}</td>
                    <td><Favorite/></td>
                    <td><Delete getData = {getData} diveId = {row._id}/></td>
                    </tr>
                   )
                   )}  
                </tbody>
              </Table>
          </div>
          <div className= 'weather' style={{ padding: "20px" }}> 
            {Weather()}
            <div>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;