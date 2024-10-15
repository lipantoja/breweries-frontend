import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export function Map() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 40.7128, // Default to NYC
    lng: -74.0060,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {/* Add Markers here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;