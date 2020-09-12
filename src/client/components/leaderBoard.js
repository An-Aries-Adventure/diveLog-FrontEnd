import React, { Component } from 'react'
import GetDives from '../components/GetDives'
import { Table } from 'reactstrap';


class Leaderboard extends Component {
    state = {
        leaders: []
    }
    //getdives returns out diveData
    componentDidMount(){
      GetDives()
    }

    render(){
        const leaders = this.props


        return (
            <div>
                <Table striped bordered condensed hover className="leaderBoard">
                <thead>
                    <tr>
                    <th>Place</th><th># of Dives</th><th>First Name</th><th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                   {diveData.map((row, index) => (
                    //row.diveNumber.sort(function(a, b){return b - a});
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










}

export default Leaderboard


















