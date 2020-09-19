import React, {useState, Component} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import config from "./configs/default.json"
import GetDives from './GetDives'
import Navigation from './Navigation'




// GeoCode API https://maps.googleapis.com/maps/api/geocode/JSON?address=${city}+${country} 


// const [diveInfo, setDiveInfo] = useState([])
// const [loading, setLoading] = useState(true);


// useEffect(() => {
//   getData();
// }, []);

// const getData = async function () {
// const res = await GetDives();
// setDiveInfo(res.data);
// setLoading(false);
// console.log("result", res.data)
// }




function Map() {

    return (
        <div>
            <GoogleMap defaultCenter ={{lat: 20.422983, lng: -86.922340}} defaultZoom = {2.75}>
        
        
        
            </GoogleMap>
        </div>
    )
}


const WrappedMap = withScriptjs(withGoogleMap(Map))


 const API_KEY = config.API_KEY;


function DiveMap() {
    console.log(API_KEY)
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

