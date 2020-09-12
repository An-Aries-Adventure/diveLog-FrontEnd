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
                        <th># of dives</th><th>firstName</th><th>lastName</th>
                    </tr>
                </thead>
                <tbody>
                   {diveData.map((row, index) => (
                    <tr key = {row.userId}>
                    <td>{index + 1}</td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.diveNumber}</td>
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


















