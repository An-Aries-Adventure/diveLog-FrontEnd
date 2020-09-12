
import React from 'react'
import axios from 'axios'


function GetDives() {
        axios.get('http://localhost:5000/api/diveRecord/')
        .then((response) => {
            let diveData = response.data;
            console.log(diveData);
        
        return (
           diveData
        );  
        })
        .catch((error) => {
            console.log(error)
        })
};

export default GetDives