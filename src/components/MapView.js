import React from 'react';
import GoogleMapReact from 'google-map-react';


function MapView({city}){

  if(!city.name) return null;

  //Informacion de la ubicacion
  const location = {
    lat: city.coord.lat,
    lng: city.coord.lon
  };
  
  //Definiendo el marcador
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: location,
    map
    });
    return marker;
   };
    return(
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY_GOOGLE_MAPS }}
        center={location}
        defaultZoom={12}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    )

}

export default MapView ;