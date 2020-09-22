import React, {useState, useEffect, Component} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import config from "./configs/default.json"
import GetDives from './GetDives'
import Navigation from './Navigation'
import DiveCard from './DiveCard'
import axios from 'axios'



// GeoCode API https://maps.googleapis.com/maps/api/geocode/JSON?address=${diveInfo.city}+${diveInfo.country} 



 const API_KEY = config.API_KEY;


function DiveMap(props) {

        const [diveInfo, setDiveInfo] = useState([])
        const [loading, setLoading] = useState(true);
        const [cordInfo, setCordInfo] = useState([]) 
      
        useEffect(() => {
          getData();
          
        }, []);
      
        const getData = async function () {
        const res = await GetDives(props.userInfo._id);
        setDiveInfo(res.data);
        setLoading(false);
        console.log("result", res.data);
    
        };
        console.log("diveInfo", diveInfo);


        // function getCords(diveInfo) {
        //     console.log("function", diveInfo)
        //     for (let i = 0; i < diveInfo.length; i++){
        //     axios.get(`https://maps.googleapis.com/maps/api/geocode/JSON?address=${diveInfo[i].city}+${diveInfo[i].country}&key=${API_KEY}`)
        //     .then((res) => {
        //        setCordInfo(res.data);
        //        setLoading(false);
        //        console.log("CordResult", res.data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        //     }
         
        // };



        




    function Map() {
        
        return (
            <div>
                <GoogleMap defaultCenter ={{lat: 19.5985, lng: -155.5185}} defaultZoom = {2.75}>
                {/* {diveInfo.map((dive) =>( */}
                    <Marker position ={{lat: 7.95, lng: 98.33}} />
                    <Marker position ={{lat: 20.4443, lng: -86.9025}} />
                    <Marker position ={{lat: 9.8849, lng: -84.2272}} />


                    {/* // key = {dive._id}  */}
                    

                  {/* ))} */}
                
                    </GoogleMap> 
          
    
            </div>
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map))

    return (
    <div>
        <div>
            <Navigation/>
        </div>
        <div style = {{width: "100vw", height: "94vh"}}>
            <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
             loadingElement = {<div style = {{height: "100%"}}/>}
             containerElement = {<div style = {{height: "100%"}}/>}
             mapElement = {<div style = {{height: "100%"}}/>}
            />
        </div>
    </div>
    ) 
}



export default DiveMap;

