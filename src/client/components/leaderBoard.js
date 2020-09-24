import GetDives from './GetDives';
import { Table } from 'reactstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const LeaderBoard = props => {
    console.log("props", props)

    const [userInfo, setUserInfo] = useState([])
    const [diveInfo, setDiveInfo] = useState([])
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        getAllUsers(),
        getAllDives();
      
    }, []);
  
   
    function combinePeople(){
        return(
        userInfo.map((user, index) => (
      
                    <tr key = {user._id}>
                    <td>{index + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.LastName}</td>
                    </tr>
         ) )
        )      
    }               
    
  
    function combineDives(){
        return(
        diveInfo.map((dive, index) => (
      
                    <tr key = {dive._id}>
                    <td>{dive.diveNumber}</td>
                    </tr>
         ) )
        )      
    }               
    
  









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
           setLoading(false);

        })
        .catch((error) => {
            console.log(error)
        })
   };
  
   

  const combinedTotal = [...userInfo, ...diveInfo]
  console.log('combined', combinedTotal)

    // axios.get(`http://localhost:5000/api/diveRecord/diveRecord/${userInfo[i]._id}`)
  

     return (
            <div>
                <h1 className = 'leadHead'>Leader Board</h1>
                <Table striped bordered condensed hover className="leaderBoard">
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
                </Table>
            </div>
        )

}

export default LeaderBoard


















