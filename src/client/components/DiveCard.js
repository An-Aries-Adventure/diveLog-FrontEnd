import React, { Component } from "react";
import '../app.css';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import GetDives from './GetDives';
import { FaStar } from 'react-icons/fa';

class DiveCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: [],
            loading: true,
        };
    };

    componentDidMount() {
        this.getData();
    };



    getData = async function () {
        var res = await GetDives(this.props.user._id);
        this.setState({
            total: res.data,
            loading: false
        });
        console.log('DiveCard:', res.data);
    };


    diverLevel() {
        console.log('test', this.state.total);

        let x = 0;
        if (this.state.total.length > 0) {
            x = this.state.total[this.state.total.length - 1].diveNumber;
        } else {
            return <div>
                <h3>Dive Level: None</h3>
                
            </div>
        };


        if (x < 50) {
            return <div>
                <h3>Dive Level: Sardine</h3>
                <FaStar className='starYellow' size={20} />
            </div>
        }
        else if (x >= 50 < 100) {
            return <div>
                <h3>Dive Level: Starfish</h3>
                {[...Array(2)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 100 < 150) {
            return <div>
                <h3>Dive Level: Seahorse</h3>
                {[...Array(3)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 150 < 200) {
            return <div>
                <h3>Dive Level: Stingray</h3>
                {[...Array(4)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 200 < 250) {
            return <div>
                <h3>Dive Level: Manta Ray</h3>
                {[...Array(5)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 250 < 300) {
            return <div>
                <h3>Dive Level: Sea Turtle</h3>
                {[...Array(6)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 300 < 350) {
            return <div>
                <h3>Dive Level: Barracuda</h3>
                {[...Array(7)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 350 < 400) {
            return <div>
                <h3>Dive Level: Sword Fish</h3>
                {[...Array(8)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 400 < 500) {
            return <div>
                <h3>Dive Level: Great White Shark</h3>
                {[...Array(9)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        }
        else if (x >= 500 < 10000) {
            return <div>
                <h3>Dive Level: Poseidon God of the Sea</h3>
                {[...Array(10)].map(star => {
                    return <FaStar className='starYellow' size={20} />
                })}
            </div>
        };
    };

    getTotalMinsUnderWater = () => {
        if(this.state.total.length > 0) {
            return this.state.total[this.state.total.length - 1].totalBottomTime
        }else {
            return 0
        };
    };


    render() {
        return (
            (this.state.loading) ? <div>Getting Data</div> :


                <Container>
                    <div>
                        {this.diverLevel()}
                    </div>
                    <div>
                        <h4>Total Dives to Date: {this.state.total.length}</h4>
                    </div>
                    <div>
                        
                        <h4>Total Minutes Underwater: {this.getTotalMinsUnderWater()}</h4>
                    </div>
                </Container>
        );
    };
};


export default DiveCard;