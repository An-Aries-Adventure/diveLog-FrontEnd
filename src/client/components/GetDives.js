
import React from 'react'
import axios from 'axios'


const GetDives = async => {
       return axios.get('http://localhost:5000/api/diveRecord/')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error)
        })
};

export default GetDives