import GetDives from './GetDives';
import { Table } from 'reactstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

const LeaderBoard = props => {
    console.log("props", props)

    const [userInfo, setUserInfo] = useState([])
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
      getUsers();
    }, []);
  
    // const getData = async function () {
    // const res = await getUsers();
    // setUserInfo(res.data);
    // setLoading(false);
    // console.log("result", res.data)
    // }
    

    function getUsers() {
         axios.get('http://localhost:5000/api/diveRecord/')
         .then((res) => {
            setUserInfo(res.data);
            setLoading(false);
            console.log("result", res.data)
         })
         .catch((error) => {
             console.log(error)
         })
    };
  
    // axios.get(`http://localhost:5000/api/diveRecord/diveRecord/${userInfo[i]._id}`)
  

     return (
            <div>
                <h1 className = 'leadHead'>Leader Board</h1>
                <Table striped bordered condensed hover className="leaderBoard">
                <thead>
                    <tr>
                    <th>Place</th><th>First Name</th><th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                   {userInfo.map((row, index) => (
                    <tr key = {row._id}>
                    <td>{index + 1}</td>
                    <td>{row.userId}</td>
                    <td>{row.diveNumber}</td>
                    </tr>
                   )
                   )}  
                </tbody>
                </Table>
            </div>
        )

}

export default LeaderBoard


















