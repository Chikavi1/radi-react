import React,{ useState } from 'react'
import { MapContainer, TileLayer, Marker,Popup, useMapEvents, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
const Mapa = () => {

    const [state, setState] = useState({
        lat: '20.623358', lng: '-103.2991837' ,
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
    
    return(
        <MapContainer className="hidden"  style={{ 'width':400, 'height': 400,'z-index':'0'  }} center={ state } zoom="17" >
            <TileLayer
                url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
                />
    
            <Marker draggable="true" key={state.zoom} position={ state } icon={IconLocation} >
                <Popup>
                    Tu ubicación
                </Popup>
            </Marker>
            
        </MapContainer>
)

}

export default Mapa