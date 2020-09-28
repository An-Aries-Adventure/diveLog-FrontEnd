
import React from 'react';
import axios from 'axios';


const GetDives = async currentUserId => {
       return axios.get(`http://localhost:5000/api/diveRecord/diveRecord/${currentUserId}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
};

export default GetDives;