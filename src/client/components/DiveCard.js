import React, { Component } from "react"
import '../app.css'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';


class DiveCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
        total:  [],
        loading: true           
        }
        console.log("Dive Card", props)
    };
    
    componentDidMount(){
        //const data = this.totalDives();
        //console.log(data);
         this.setState({
            total: this.props.diveInfo,
            loading: false
        });
        console.log(this.props.diveInfo);
      console.log("total", this.state.total);
    };


    // totalDives() {
    // this.props.getData().then((res) => {
    //      console.log("total",res.data) 
    //      return res.data;
    // })
    // .catch((error) => {
    //     console.log(error)
    // });
    // };


    render() {
        return(
        (this.state.loading) ? <div>Getting Data</div> :
        
            
            <Container>
                <Container>
                     <div>
                         <h4>Total Dives to Date</h4>
                     <h3>{this.state.total[this.state.total.length -1].diveNumber}</h3>
                    </div>
                </Container>
                <Container>
                    <div>
                    <h4>Total Minutes Under Water to Date</h4>
                    <h3>{this.state.total[this.state.total.length -1].totalBottomTime}</h3>
                    </div>
                </Container>
            </Container>
        )
        
    };
        
  
};


export default DiveCard