import React,{ useState,useEffect } from 'react'
import { MapContainer, TileLayer, Marker,Popup,CircleMarker,Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {

    const [state, setState] = useState({
        currentLocation: { lat: '20.623358', lng: '-103.2991837' },
        zoom: 13
    });

    const IconLocation = L.icon({
        iconUrl: 'https://i.ibb.co/ryptRms/perrito.png',
        iconRetinaUrl: 'https://i.ibb.co/ryptRms/perrito.png',
        iconAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: [35, 35],
        className: "leaflet-venue-icon",
    });

 return (

     <MapContainer className="leaflet-container" center={state.currentLocation} zoom={state.zoom} >
        <TileLayer
            url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
        />
       
            <Marker key={state.zoom} position={state.currentLocation} icon={IconLocation} >
                <Popup>
                    Oceanican
                </Popup>
            </Marker>

       

    </MapContainer>
 )
 
}

export default Map;

