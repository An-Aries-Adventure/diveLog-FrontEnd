import React, {useState} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import rootReducer from './reducers/rootReducer';
import map_API_KEY from "./configs/default.json"
import {connect} from 'react-redux';
import GetDives from './GetDives'

//returns out diveData
GetDives()


function Map() {
    const [selectedDive, setSelectedDive] = useState(null);
    return(
        <GoogleMap 
        defaultZoom={3}
        defaultCenter ={{lat: 39, lng: 98}}
        >
        
         {diveData.map(dive => (
             <Marker 
             key = {dive.diveNumber} 
             position ={{
                lat: dive.lat,
                lng: dive.long 
            }}
            onClick = {() => {
                setSelectedDive(dive)
            }}
            icon ={{url:'/diveFlag',
            scaledSize: new window.google.maps.Size(25,25)
        }}
             />
         ))}   

        {selectedDive && (
            <InfoWindow  
            position ={{
                lat: selectedDive.lat,
                lng: selectedDive.long 
            }}
            onCloseClick ={() => {
                setSelectedDive(null)
            }}>
                <div>{selectedDive.date},{selectedDive.diveSite}</div>
            </InfoWindow>
        )}
        </GoogleMap>
    );
}

const wrappedMap = withScriptjs(withGoogleMap(Map)) 


function DiveMap() {
    return (
    
    <div style = {{width: "100vw", height: "100vh"}}>
    <wrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${map_API_KEY}`}
    loadingElement = {<div style = {{height: "100%"}}/>}
    containerElement = {<div style = {{height: "100%"}}/>}
    mapElement = {<div style = {{height: "100%"}}/>}
    />
    </div>
    )
}



const mapStateToProps = (state) => {
    return{
      diveNumber: state.diveNumber,
      date: state.date,
      diveSite: state.diveSite, 
      city: state.city, 
      country: state.country,
      
  
    }
      
  }
  

export default connect(mapStateToProps) (DiveMap)