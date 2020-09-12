const initState = {
    userId: null,
    diveNumber: null, 
    date:  null,
    diveSite: null, 
    city: null, 
    country: null, 
    startingPressure: null, 
    endingPressure: null,
    visibility:  null,
    timeIn: null, 
    timeOut: null,
    totalDiveMin:  null,
    minAtDepth: null, 
    airConsumption: null, 
    maxDepth: null,
    weight: null, 
    cylinderSize: null, 
    airTemp: null, 
    bottomTemp: null, 
    wetSuit: false,
    drySuit: false,
    freshWaterDive: false,
    saltWaterDive: false,
    boatDive: false,
    shoreDive:  false,
    nightDive: false,
    comment: null,
    verifier: null, 
    scubaCert: null, 
    instructor: false, 
    diveMaster:  false,
    buddy: false,  
    safetyDepth: null, 
    safetyMinutes: null,
    lat: null,
    long: null,
    selectedDive: null,
    setSelectedDive: null

}

const rootReducer = (state, action) => {
    return state;

}

export default rootReducer