
import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import GetDives from "./GetDives"


  
  class Delete extends Component {
        constructor(props) {
        super(props)
    console.log('delete', props)
    }
        
    onDelete = (_id) => {
        axios.delete('http://localhost:5000/api/diveRecord/' + _id).then(res => {
        this.props.getData()
        }, function (err) {
          alert('Something went wrong.')
        })
      }
    
    render() {
      return (
        <>
          <button className="btn-danger btn" onClick={() => this.onDelete(this.props.diveId)}>Delete</button>
        </>
      );
    }
  }
  
  export default Delete;