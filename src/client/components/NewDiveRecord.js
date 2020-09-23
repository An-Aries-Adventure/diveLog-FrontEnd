import React, {useState} from 'react';
import Navigation from './Navigation';
import axios from 'axios'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import '../app.css'
import DiveCard from './DiveCard'
import GetDives from './GetDives'
import { Card } from 'antd';


class NewDiveRecord extends React.Component {

    constructor(props) {
        super(props)
        console.log('NewDiveRecord props', props);
        this.state = {
            userId: props.userInfo._id,
            diveNumber: 0,
            date: "",
            diveSite: "",
            city: "",
            country: "",
            startingPressure: 0,
            endingPressure: 0,
            visibility: 0,
            timeIn: 0,
            timeOut: 0,
            totalDiveMin: 0,
            minAtDepth: 0,
            airConsumption: 0,
            maxDepth: 0,
            weight: 0,
            cylinderSize: "",
            airTemp: 0,
            bottomTemp: 0,
            wetSuit: false,
            drySuit: false,
            freshWaterDive: false,
            saltWaterDive: false,
            boatDive: false,
            shoreDive: false,
            nightDive: false,
            comment: "",
            verifier: "",
            scubaCert: 0,
            instructor: false,
            diveMaster: false,
            buddy: false,
            safetyDepth: 0,
            safetyMinutes: 0,
            totalBottomTime: 0,
            email: ""
        }
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
        console.log('this.state', this.state)

        axios.post('http://localhost:5000/api/diveRecord/', this.state).then(res => {
            console.log('new dive add', res)
           alert("A New Dive Has Been Submitted")
        }, function (err) {
            alert('Something went wrong.')
        })
    };


    handleEmailSubmit (event) {
        const templateId = template_vyp8l1v
    
        this.sendFeedback(templateId, { from_name: this.props.userInfo.firstName, reply_to: this.state.email})
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'Hotmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }





    // template_vyp8l1v

    render() {
        return (
            <div>
                <Navigation />
                   <div>
                   <Card style={{ width: 400}} className = "diveCard">
                    <DiveCard user={this.props.userInfo}/>
                 </Card>
                   </div>
                <Container className ="diveForm">
                    <form id="diveForm" autoComplete="off">
                        <FormGroup>
                            <div>
                                <Label className = "label">Create New Dive Record</Label>
                            </div>
                            <Container className ="record">
                            <div>
                                <Row>
                                    <Input type='text' name="diveNumber" placeholder="Dive Number (*Required)" onChange={this.diveLogHandler} />
                                    <Input type='text' name="date" placeholder="Date of the dive: mm/dd/yyyy (*Required)" onChange={this.diveLogHandler} />
                                </Row>
                                <Row>
                                    <Input type='text' name="diveSite"  placeholder="Name of dive site" onChange={this.diveLogHandler} />
                                    <Input type='text' name="city" id='city'  placeholder="City of Dive Location (*Required)" onChange={this.diveLogHandler} />
                                    <Input type='text' name="country" id='country' placeholder="Country of Dive Location (*Required)" onChange={this.diveLogHandler} />
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Input type='text' name="timeIn" placeholder="Time entered the water" onChange={this.diveLogHandler} />
                                    <Input type='text' name="timeOut" placeholder="Time you exited the water" onChange={this.diveLogHandler} />
                                    <Input type='text' name="totalDiveMin" placeholder="Dive time in minutes for this dive" onChange={this.diveLogHandler} />
                                    <Input type='text' name="minAtDepth" placeholder="Time at depth" onChange={this.diveLogHandler} />
                                    <Input type='text' name="totalBottomTime" placeholder="Total Bottom Time to Date (*Required)" onChange={this.diveLogHandler} />
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Input type='text' name="startingPressure" placeholder="Staring pressure in PSI" onChange={this.diveLogHandler} />
                                    <Input type='text' name="endingPressure" placeholder="Ending Presure in PSI" onChange={this.diveLogHandler} />
                                    <Input type='text' name='airConsumption' placeholder="Air Consuption" onChange={this.diveLogHandler} />
                                    <Input type='text' name="maxDepth" placeholder="Max Depth of this Dive" onChange={this.diveLogHandler} />
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Input type='text' name="weight" placeholder="How much weight did you use in lbs" onChange={this.diveLogHandler} />
                                    <Input type='text' name="cylinderSize" placeholder="What size and type of cylinder" onChange={this.diveLogHandler} />
                                    <Input type='text' name='airTemp' placeholder="Air Temp" onChange={this.diveLogHandler} />
                                    <Input type='text' name="bottomTemp" placeholder="Bottom Temp" onChange={this.diveLogHandler} />
                                </Row>
                            </div>
                            </Container>
                            <div>
                                <div className="checkBoxes">
                                    <div className="col-lg-2">
                                        <Input type='checkbox' name="wetSuit" onChange={this.checkHandler} />{' '}WetSuit
                                    </div>
                                    <div className="col-lg-2">
                                        <Input type='checkbox' name="drySuit" onChange={this.checkHandler} />{' '}DrySuit
                                    </div>
                                    <div className="col-lg-2">
                                        <Input type='checkbox' name="freshWaterDive" onChange={this.checkHandler} />{' '}Fresh Water Dive
                                    </div>
                                    <div className="col-lg-2">
                                        <Input type='checkbox' name="saltWaterDive" onChange={this.checkHandler} />{' '}Salt Water Dive
                                    </div>
                                    <div className="col-lg-2">
                                        <Input type='checkbox' name="boatDive" onChange={this.checkHandler} />{' '}Boat Dive
                                    </div>
                                    <div className="col-lg-2">
                                        <Input type='checkbox' name="shoreDive" onChange={this.checkHandler} />{' '}Shore Dive
                                    </div>
                                    <div className="col-lg-2">
                                        <Input type='checkbox' name="nightDive" onChange={this.checkHandler} />{' '}Night Dive
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <Input rows="5" type="textarea" name="text" id="postText" placeholder="Open space to write anything you want about your dive" onChange={this.diveLogHandler} />
                            </div>
                        </FormGroup>
                            <div>
                                <Container className = "certBox">
                                <div>
                                <Input type='text' name="verifier" placeholder="Name of the Verifer for this dive" onChange={this.diveLogHandler} />
                                </div>
                                <div>
                                <Input type='text' name="scubaCert" placeholder="Certification number of the verifier" onChange={this.diveLogHandler} />
                                </div>
                                <div>
                                <Input type='text' name="email" placeholder="Email of verifier" onChange={this.diveLogHandler} />
                                </div>
                                <div className="col-lg-2">
                                        <Input type='checkbox' name="buddy" onChange={this.checkHandler} />{' '}Buddy
                                </div>
                                <div className="col-lg-2">
                                        <Input type='checkbox' name="diveMaster" onChange={this.checkHandler} />{' '}Dive Master
                                </div>
                                <div className="col-lg-2">
                                        <Input type='checkbox' name="instructor" onChange={this.checkHandler} />{' '}Instructor
                                </div>
                                </Container>
                            </div>
                        <button className="btn-danger btn" onClick={this.addNewDive}>Log Dive</button>

                    </form>
                </Container>
            </div>
        )
    } 


}

export default NewDiveRecord;