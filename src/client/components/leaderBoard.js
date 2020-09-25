import GetDives from './GetDives';
import { Table } from 'reactstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const LeaderBoard = props => {
    console.log("props", props)

    const [userInfo, setUserInfo] = useState([])
    const [diveInfo, setDiveInfo] = useState([])
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0)
 
  
    useEffect(() => {
        getAllUsers(),
        getAllDives();
      
    }, []);
    console.log("diveInfo", diveInfo)
    console.log("userInfo", userInfo)







    function generateBoard(diveInfo, userInfo){
        let leaderBoardInfo = [];
        
        userInfo.map((user) => {
        let diveCount = diveInfo.filter((dive) => {
        return user._id == dive.userId;
    }).length;
        leaderBoardInfo.push({
        number: leaderBoardInfo.length + 1,
        user: user,
        diveCount: diveCount,
    
    });
    });
    console.log('LEADER INFO', leaderBoardInfo);
    return(
        <Table>
        <thead style = {{color: "white"}}>
            <tr>
           <th>First Name</th><th>Last Name</th><th>Dive Count</th>
            </tr>
        </thead>
        <tbody style = {{color: "white"}}>
            {leaderBoardInfo.map((boardInfo, index) => (
                <tr key = {index}>
                
                <td>{boardInfo.user.firstName}</td>
                <td>{boardInfo.user.lastName}</td>
                <td>{boardInfo.diveCount}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    );  
    }


//     <Table striped bordered condensed hover className="diveInfo">
//     <thead>
//         <tr>
//         <th>Dive #</th>
//         <th>Date</th>
//         <th>City</th>
//         <th>Country</th>
//         <th>Favorite</th>
//         <th>Delete</th>
//         </tr>
//     </thead>
//     <tbody>
//        {diveInfo.map((row, index) => (
//         //row.date.sort(function(a, b){return b - a});
//         <tr key = {index}>
//         <td>{row.diveNumber}</td>
//         <td>{row.date}</td>
//         <td>{row.city}</td>
//         <td>{row.country}</td>
//         <td><Favorite/></td>
//         <td><Delete getData = {getData} diveId = {row._id}/></td>
//         </tr>
//        )
//        )}  
//     </tbody>
//   </Table>

    
    function getAllDives() {
         axios.get('http://localhost:5000/api/diveRecord/')
         .then((res) => {
            setDiveInfo(res.data);
            setLoading(false);
         })
         .catch((error) => {
             console.log(error)
         })
    };
    


    function getAllUsers() {
        axios.get('http://localhost:5000/api/users/')
        .then((res) => {
           setUserInfo(res.data);
          

        })
        .catch((error) => {
            console.log(error)
        })
   };
  
 
  

     return (
            <div>
                <h1 className = 'leadHead'>Leader Board</h1>
                <div>
                   {diveInfo.length > 0 ? generateBoard(diveInfo, userInfo) : 'NO DIVES'}
                </div>
               
                {/* <Table striped bordered condensed hover className="leaderBoard">
                <thead>
                    <tr>
                    <th>Divers</th><th>First Name</th><th>Last Name</th><th>Dive#</th>
                    </tr>
                </thead>
                <tbody>
                   {userInfo.map((row, index) => (
                    <tr key = {row._id}>
                    <td>{index + 1}</td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>

                    </tr>
                   )
                   )}  
                </tbody>
                </Table> */}
            </div>
        )

}

export default LeaderBoard

