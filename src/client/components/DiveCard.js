import React, { Component } from "react"
import '../app.css'
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';


class DiveCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
        total:  [],
        loading: true,


        }
        console.log("Dive Card", props)
    };
    
    componentDidMount(){
        //const data = this.totalDives();
        //console.log(data);
         this.setState({
            total: this.props.diveInfo,
            loading: false,
        
        });
        console.log(this.props.diveInfo);
      console.log("total", this.state.total);
    };

    diverLevel(){
        if(this.state.total[this.state.total.length -1].diveNumber < 50){
          return <h5>Dive Level: Sardine</h5>
        }
        else if(this.state.total[this.state.total.length -1].diveNumber >= 50 < 100){
          return <h5>Dive Level: Starfish</h5>
        }
        else if(this.state.total[this.state.total.length -1].diveNumber >= 100 < 150){
          return <h5>Dive Level: Trumpet Fish</h5>
        }
        else if(this.state.total[this.state.total.length -1].diveNumber >= 150 < 200){
          return <h5>Dive Level: Stingray</h5>
        }  
    }

    


    render() {
        return(
        (this.state.loading) ? <div>Getting Data</div> :
        
            
            <Container>
                <div>
                    {this.diverLevel()}
                </div>
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