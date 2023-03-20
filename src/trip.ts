export const validateDestination = (destinations:any,remoteConfig:any) => {
    return destinations.length <= remoteConfig?.rules?.maxDestinations
}
  
  
export const validateTripDates = (statDate:any,endDate:any,remoteConfig:any) => {
    return endDate - statDate <= remoteConfig?.rules?.maxTripDuration
}
  

export const validateTravellers = (travellers:any,remoteConfig:any) => {
    return travellers.length <= remoteConfig?.rules?.maxTravellers
}

export const validateTrip = (trip:any,remoteConfig:any) => {
    return validateDestination(trip.destinations,remoteConfig) &&
        validateTripDates(trip.startDate,trip.endDate,remoteConfig) &&
        validateTravellers(trip.travellers,remoteConfig)
}