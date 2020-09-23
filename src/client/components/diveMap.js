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

        //const [diveInfo, setDiveInfo] = useState([])
        const [loading, setLoading] = useState(true);
        const [cordInfo, setCordInfo] = useState([]) 
      
        useEffect(() => {
          getData();

        }, []);
      
        async function getData() {
            const res = await GetDives(props.userInfo._id);
            //setDiveInfo(res.data);
            console.log('THIS IS THE DIVE INFO BEFORE LOIOP', res.data);
            setLoading(false);
            for(let i = 0; i < res.data.length; i++){
                await getCords(res.data[i]);
            }

            console.log("CORD INFO AFTER LOOP", cordInfo);
        }
    

        async function getCords(diveInfo) {
            console.log("function", diveInfo)
            let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${diveInfo.city}+us&key=${API_KEY}`);
            let newCordInfo = cordInfo;
            newCordInfo.push(res.data);
            setCordInfo(newCordInfo);       
        };


    function Map() {
        
        return (
            <div>
                <GoogleMap defaultCenter ={{lat: 19.5985, lng: -155.5185}} defaultZoom = {2.75}>
                    {cordInfo.map((dive, index) => (
                        <Marker key ={index}
                        position ={{
                            lat: dive.results[0].geometry.location.lat,
                            lng: dive.results[0].geometry.location.lng
                        }}>
                        </Marker>
                    ))}
            
                </GoogleMap> 
          
    
            </div>
        );
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
    ); 
}



export default DiveMap;

