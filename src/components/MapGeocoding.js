import React,{useState} from 'react'
import { MapContainer, TileLayer, Marker,Popup,CircleMarker,Tooltip } from 'react-leaflet'
// import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useMemo, useRef } from 'react/cjs/react.development'
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCoaeI0ttNRU7eMZ1RX95EqzQ0qYidWEA4");
Geocode.setLanguage("es");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug()

const MapGeocoding = () => {
    
    const [state, setState] = useState({
        currentLocation: { lat: '20.623358', lng: '-103.2991837' },
        zoom: 13
    });

    const center = {
        lat: 51.505,
        lng: -0.09,
      }
      
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)


    const eventHandlers = useMemo(
        () => ({
          dragend() {
            const marker = markerRef.current
            if (marker != null) {
              setPosition(marker.getLatLng())

              const latitud = marker.getLatLng().lat;
              const longitud = marker.getLatLng().lng;


              
            Geocode.fromLatLng(latitud, longitud).then(
              (response) => {
                const address = response.results[0].formatted_address;
                console.log(address);
              },
              (error) => {
                console.error(error);
              }
            );

            // Geocode.fromAddress("manuel muñiz 294,nuevo santa maria").then(
            //     (response) => {
            //       const { lat, lng } = response.results[0].geometry.location;
            //       console.log(lat, lng);
            //     },
            //     (error) => {
            //       console.error(error);
            //     }
            //   );
              
              console.log(latitud,longitud);
            }
          },
        }),
        [],
      )    
    return (
        <MapContainer style={{'width':'40em','height':'40em'}}  center={state.currentLocation} zoom={state.zoom} >
        <TileLayer
            url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
            />
       
        <Marker key={state.zoom} ref={markerRef} position={state.currentLocation} draggable="true"   eventHandlers={eventHandlers}>
                <Popup>
                    Oceanican
                </Popup>
        </Marker>

       

    </MapContainer>
    )
}

export default MapGeocoding