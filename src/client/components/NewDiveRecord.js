import React from 'react';
import Navigation from './Navigation';
import axios from 'axios'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

export default class NewDiveRecord extends React.Component{
    constructor(props){
        super(props); 
        this.state = {

            userId: null,
            diveNumber: null, 
            date:  null,
            diveSite: null, 
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
            wetSuit: false,
            drySuit: false,
            freshWaterDive: false,
            saltWaterDive: false,
            boatDive: false,
            shoreDive:  false,
            nightDive: false,
            comment: null,
            verifier: null, 
            scubaCert: null, 
            instructor: false, 
            diveMaster:  false,
            buddy: false,  
            safetyDepth: null, 
            safetyMinutes: null  


        };

    }
        diveLogHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        addNewDive = (e) => {
            e.preventDefault();
            axios.post('http://localhost:5000/api/diveRecord/', {

            diveNumber: this.state.diveNumber,
            date: this.state.date,
            diveSite: this.state.diveSite, 
            city: this.state.city, 
            country: this.state.country,
            startingPressure: this.state.startingPressure, 
            endingPressure: this.state.endingPressure,
            visibility:  this.state.visibility,
            timeIn: this.state.timeIn, 
            timeOut: this.state.timeOut,
            totalDiveMin: this.state.totalDiveMin,
            minAtDepth: this.state.minAtDepth, 
            airConsumption: this.state.airConsumption, 
            maxDepth: this.state.maxDepth,
            weight: this.state.weight, 
            cylinderSize: this.state.cylinderSize, 
            airTemp: this.state.airTemp, 
            bottomTemp: this.state.bottomTemp, 
            wetSuit: this.state.wetSuit,
            drySuit: this.state.drySuit,
            freshWaterDive: this.state.freshWaterDive,
            saltWaterDive: this.state.saltWaterDive,
            boatDive: this.state.boatDive,
            shoreDive:  this.state.shoreDive,
            nightDive: this.state.nightDive,
            comment: this.state.comment,
            verifier: this.state.verifier, 
            scubaCert: this.state.scubaCert, 
            instructor: this.state.instructor, 
            diveMaster:  this.state.diveMaster,
            buddy: this.state.buddy,  
            safetyDepth: this.state.safetyDepth, 
            safetyMinutes: this.state.safetyMinutes  

            }).then(res => {
                alert("new dive log submitted")
            }, function (err) {
                alert('Something went wrong.')
            })
        }

        render() {
            return (
                <div>
                    <Navigation/>
                    <form id="diveForm">
                        <FormGroup>
                            <div>
                                <Label>Create New Dive Record</Label>
                            </div>
                            <div>
                                <Input type = 'text' placeholder ="Date of the dive: mm/dd/yyyy" onChange={this.diveLogHandler}/>
                                <Input type = 'text' placeholder ="Name of dive site"onChange={this.diveLogHandler}/>
                                <Input type = 'text' id = 'city' placeholder ="City of Dive Location"onChange={this.diveLogHandler}/>
                                <Input type = 'text' id = 'country' placeholder ="Country of Dive Location"onChange={this.diveLogHandler}/>
                            </div>
                            <div>

                            </div>
                            <Input rows="7" type="textarea" name="text" id="postText" placeholder="Open space to write anything you want about your dive" onChange={this.diveLogHandler} />
                        </FormGroup>
                        <button className="btn-danger btn" onClick={this.addNewDive}>Log Dive</button>
                    </form>
                </div>
            )
        }

    
}