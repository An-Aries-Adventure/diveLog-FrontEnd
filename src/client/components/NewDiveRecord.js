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
        checkHandler = (e) => {
            this.setState({
                [e.target.name]: true
            })
        }

        diveLogHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        addNewDive = (e) => {
            e.preventDefault();
            axios.post('http://localhost:5000/api/diveRecord/', {

            userId: props.userInfo._id,
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
                    <Container>
                    <form id="diveForm">
                        <FormGroup>
                            <div>
                                <Label>Create New Dive Record</Label>
                            </div>
                            <div>
                                <Row>
                                <Input type = 'text' name = "diveNumber" placeholder ="Dive Number" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "date" placeholder ="Date of the dive: mm/dd/yyyy" onChange={this.diveLogHandler}/>
                                </Row>
                                <Row>
                                <Input type = 'text' name = "diveSite" placeholder ="Name of dive site"onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "city" id = 'city'  placeholder ="City of Dive Location"onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "counry" id = 'country'  placeholder ="Country of Dive Location"onChange={this.diveLogHandler}/>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                <Input type = 'text' name = "timeIn" placeholder = "Time entered the water" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "timeOut" placeholder = "Time you exited the water" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "totalDiveMin" placeholder = "Dive time in minutes" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "minAtDepth" placeholder = "Time at depth" onChange={this.diveLogHandler}/>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                <Input type = 'text' name = "startingPressure" placeholder = "Staring pressure in PSI" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "endingPressure" placeholder = "Ending Presure in PSI" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = 'airConsumption' placeholder = "Air Consuption" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "maxDepth" placeholder = "Max Depth of this Dive" onChange={this.diveLogHandler}/>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                <Input type = 'text' name = "weight" placeholder = "How much weight did you use in lbs" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "cylinderSize" placeholder = "What size and type of cylinder" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = 'airTemp' placeholder = "Air Temp" onChange={this.diveLogHandler}/>
                                <Input type = 'text' name = "bottomTemp" placeholder = "Bottom Temp" onChange={this.diveLogHandler}/>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <div>
                                        <Label>
                                            <Input type ='checkbox' name = "wetSuit" onChange= {this.checkHandler}/>{' '}WetSuit
                                        </Label>   
                                    </div>
                                    <div>
                                        <Label>
                                            <Input type ='checkbox' name = "drySuit" onChange= {this.checkHandler}/>{' '}DrySuit
                                        </Label>   
                                    </div>
                                     <div>
                                        <Label>
                                            <Input type ='checkbox' name = "freshWaterDive" onChange= {this.checkHandler}/>{' '}Fresh Water Dive
                                        </Label>   
                                    </div>
                                    <div>
                                        <Label>
                                            <Input type ='checkbox' name = "saltWaterDive" onChange= {this.checkHandler}/>{' '}Salt Water Dive
                                        </Label>   
                                    </div>
                                    <div>
                                        <Label>
                                            <Input type ='checkbox' name = "boatDive" onChange= {this.checkHandler}/>{' '}Boat Dive
                                        </Label>   
                                    </div>
                                    <div>
                                        <Label>
                                            <Input type ='checkbox' name = "shoreDive" onChange= {this.checkHandler}/>{' '}Shore Dive
                                        </Label>   
                                    </div>
                                    <div>
                                        <Label>
                                            <Input type ='checkbox' name = "nightDive" onChange= {this.checkHandler}/>{' '}Night Dive
                                        </Label>   
                                    </div>
                                </Row>
                            </div>
                            <div>
                            <Input rows="5" type="textarea" name="text" id="postText" placeholder="Open space to write anything you want about your dive" onChange={this.diveLogHandler} />
                            </div>
                        </FormGroup>
                        <button className="btn-danger btn" onClick={this.addNewDive}>Log Dive</button>
                    </form>
                    </Container>
                </div>
            )
        }

    
}