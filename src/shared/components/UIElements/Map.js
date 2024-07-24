// import React from "react";


// import "./Map.css";

// const Map = props => {

//     const map = 
//     return <div className={`map ${props.className}`} style={props.style}>

//     </div>
// };

// export default Map;

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

const Map = (props) => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidnhyZGh4biIsImEiOiJjbHowZGlvcG4ybjlhMmxzZ3J1bnF2NnFhIn0.zKLnfiTWhX9vVaGv-ScF9g';
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/outdoors-v12', // Map style
      center: [props.lng, props.lat], // Initial map center in [lng, lat]
      zoom: props.zoom, // Initial zoom level
    });

    return () => {
      // Clean up on unmount
      map.remove();
    };
  }, [props.lng, props.lat, props.zoom]);

  return (
    <div
      ref={mapContainerRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;