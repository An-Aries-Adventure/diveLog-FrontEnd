import React from 'react';
import Navigation from './Navigation';
import axios from 'axios'

export default class NewDiveRecord extends React.Component{
    constructor(props){
        super(props); 
        this.state = {

            userId: null,
            diveNumber: null, 
            date:  null,
            DiveSite: null, 
            city: null, 
            country: null, 
            startingPressure: null, 
            endingPressure: null,
            visibility:  null,
            timeIn: null, 
            timeOut: null,
            totalDiveMin:  null,
            minAtDepth: null, 
            airConsumption: null, 
            maxDepth: null,
            weight: null, 
            cylinderSize: null, 
            airTemp: null, 
            bottomTemp: null, 
            wetSuit: null,
            drySuit: null,
            freshWaterDive: null,
            saltWaterDive: null,
            boatDive: null,
            shoreDive:  null,
            nightDive: null,
            comment: null,
            verifier: null, 
            scubaCert: null, 
            instructor: null, 
            diveMaster:  null,
            buddy: null,  
            safetyDepth: null, 
            safetyMinutes: null  


        };

    }
        diveLogHandler = (e) => {
            this.setState({
                [event.target.name]: e.target.value
            })
        }

        addNewDive = (e) => {
            e.preventDefault();
            axios.post('http://localhost:5000/api/diveRecord/', {
                [event.target.name]: e.target.value
            }).then(res => {
        
            }, function (err) {
                alert('Something went wrong.')
            })
        }

        render() {
            return (
                <div>
                    <form id="diveForm">
                        <FormGroup>
                            <div>
                                <Label>Create Dive Record</Label>
                            </div>
                            <div>
                                <Input type = 'text' placeholder ="Date of the dive: mm/dd/yyyy" onChange={this.diveLogHandler}/>
                                <Input type = 'text' placeholder ="Name of dive site"onChange={this.diveLogHandler}/>
                                <Input type = 'text' id = 'city' placeholder ="City of Dive Location"onChange={this.diveLogHandler}/>
                                <Input type = 'text' id = 'country' placeholder ="Country of Dive Location"onChange={this.diveLogHandler}/>
                            </div>
                            <Input rows="7" type="textarea" name="text" id="postText" placeholder="Open space to write anything you want about your dive" onChange={this.diveLogHandler} />
                        </FormGroup>
                        <button className="btn-danger btn" onClick={this.addNewDive}>Log Dive</button>
                    </form>
                </div>
            )
        }

    
}