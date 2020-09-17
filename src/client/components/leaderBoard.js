import GetDives from './GetDives';
import { Table } from 'reactstrap';
import React, {useState} from 'react';

const LeaderBoard = props => {
    console.log(props)

    const [diveInfo, setDiveInfo] = useState([])

    
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async function () {
    const res = await GetDives();
    setDiveInfo(res.data);
    setLoading(false);
    console.log("result", res.data)
    
    }
  

     return (
            <div>
                <Table striped bordered condensed hover className="leaderBoard">
                <thead>
                    <tr>
                    <th>Place</th><th># of Dives</th><th>First Name</th><th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                   {diveInfo.map((row, index) => (
                    <tr key = {row.userId}>
                    <td>{index + 1}</td>
                    <td>{row.diveNumber}</td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    </tr>
                   )
                   )}  
                </tbody>
                </Table>
                Leaderboard
            </div>
        )

}

export default LeaderBoard


















