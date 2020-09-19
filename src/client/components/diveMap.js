import React, {useState, Component} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import config from "./configs/default.json"
import GetDives from './GetDives'
import Navigation from './Navigation'



function Map() {
    return (
        <div>
            <GoogleMap defaultCenter ={{lat: 20.422983, lng: -86.922340}} defaultZoom = {2.75}/>
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



























// returns out diveData
// GetDives()


// function Map() {

//     const [selectedDive, setSelectedDive] = useState(null);

//     return(
//         <>
//         <GoogleMap 
//         defaultZoom={3}
//         defaultCenter ={{lat: 39, lng: 98}}
//         >
        
//          {diveData.map(dive => (
//              <Marker 
//              key = {dive.diveNumber} 
//              position ={{
//                 lat: dive.lat,
//                 lng: dive.long 
//             }}
//             onClick = {() => {
//                 setSelectedDive(dive)
//             }}
//             icon ={{url:'/diveFlag',
//             scaledSize: new window.google.maps.Size(25,25)
//         }}
//              />
//          ))}   

//         {selectedDive && (
//             <InfoWindow  
//             position ={{
//                 lat: selectedDive.lat,
//                 lng: selectedDive.long 
//             }}
//             onCloseClick ={() => {
//                 setSelectedDive(null)
//             }}>
//                 <div>{selectedDive.date},{selectedDive.diveSite}</div>
//             </InfoWindow>
//         )}
//         </GoogleMap>
//         </>
//     );
// }

// const wrappedMap = withScriptjs(withGoogleMap(Map)) 


// function DiveMap() {
//     return (
//         <div>
//          <Navigation handleLogout={props.handleLogout}/>
//              <div style = {{width: "100vw", height: "100vh"}}>
//              <wrappedMap 
//                 googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${map_API_KEY}`}
//                 loadingElement = {<div style = {{height: "100%"}}/>}
//                 containerElement = {<div style = {{height: "100%"}}/>}
//                 mapElement = {<div style = {{height: "100%"}}/>}
//              />
//             </div>
//         </div>
//     )
// }

// export default DiveMap;