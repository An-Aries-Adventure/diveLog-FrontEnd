import React from 'react';
import Navigation from './Navigation';
import axios from 'axios'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import {connect} from 'react-redux';






class NewDiveRecord extends React.Component{
  
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
            diveNumber: this.props.diveNumber,
            date: this.props.date,
            diveSite: this.props.diveSite, 
            city: this.props.city, 
            country: this.props.country,
            startingPressure: this.props.startingPressure, 
            endingPressure: this.props.endingPressure,
            visibility:  this.props.visibility,
            timeIn: this.props.timeIn, 
            timeOut: this.props.timeOut,
            totalDiveMin: this.props.totalDiveMin,
            minAtDepth: this.props.minAtDepth, 
            airConsumption: this.props.airConsumption, 
            maxDepth: this.props.maxDepth,
            weight: this.props.weight, 
            cylinderSize: this.props.cylinderSize, 
            airTemp: this.props.airTemp, 
            bottomTemp: this.props.bottomTemp, 
            wetSuit: this.props.wetSuit,
            drySuit: this.props.drySuit,
            freshWaterDive: this.props.freshWaterDive,
            saltWaterDive: this.props.saltWaterDive,
            boatDive: this.props.boatDive,
            shoreDive:  this.props.shoreDive,
            nightDive: this.props.nightDive,
            comment: this.props.comment,
            verifier: this.props.verifier, 
            scubaCert: this.props.scubaCert, 
            instructor: this.props.instructor, 
            diveMaster:  this.props.diveMaster,
            buddy: this.props.buddy,  
            safetyDepth: this.props.safetyDepth, 
            safetyMinutes: this.props.safetyMinutes  

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

const mapStateToProps = (state) => {
  return{
    diveNumber: state.diveNumber,
    date: state.date,
    diveSite: state.diveSite, 
    city: state.city, 
    country: state.country,
    startingPressure: state.startingPressure, 
    endingPressure: state.endingPressure,
    visibility:  state.visibility,
    timeIn: state.timeIn, 
    timeOut: state.timeOut,
    totalDiveMin: state.totalDiveMin,
    minAtDepth: state.minAtDepth, 
    airConsumption: state.airConsumption, 
    maxDepth: state.maxDepth,
    weight: state.weight, 
    cylinderSize: state.cylinderSize, 
    airTemp: state.airTemp, 
    bottomTemp: state.bottomTemp, 
    wetSuit: state.wetSuit,
    drySuit: state.drySuit,
    freshWaterDive: state.freshWaterDive,
    saltWaterDive: state.saltWaterDive,
    boatDive: state.boatDive,
    shoreDive:  state.shoreDive,
    nightDive: state.nightDive,
    comment: state.comment,
    verifier: state.verifier, 
    scubaCert: state.scubaCert, 
    instructor: state.instructor, 
    diveMaster:  state.diveMaster,
    buddy: state.buddy,  
    safetyDepth: state.safetyDepth, 
    safetyMinutes: state.safetyMinutes 

  }
    
}


export default connect(mapStateToProps) (NewDiveRecord)