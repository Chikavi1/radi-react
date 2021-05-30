import React, { useState,useEffect } from 'react'
import Geocode from "react-geocode";
import { MapContainer, TileLayer, Marker,Popup, useMapEvents, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useRef } from 'react/cjs/react.development';
import '../CrearMascota.css';

Geocode.setApiKey("AIzaSyCoaeI0ttNRU7eMZ1RX95EqzQ0qYidWEA4");
Geocode.setLanguage("es");
Geocode.setRegion("mx");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug()






const CreateAlbergue = () => {


    const [map, setMap] = useState(null);
    const [datos,setDatos] = useState({});


    const [direccion, setDireccion] = useState({direccion:''});
    const [mostrarMapa,setMostrarMapa] = useState(false);
    
    const [state, setState] = useState({
        lat: '20.623358', lng: '-103.2991837' ,
    });

    
    const handleClick = () => {

        navigator.geolocation.getCurrentPosition(function(position) {
            
            setDireccion({...direccion,'direccion':'disney'});
            map.flyTo([position.coords.latitude,position.coords.longitude],17);
            setState({
                ...state,
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    }

    const handleChange = (e) => {
        setDireccion({
            ...direccion,
            [e.target.name] : e.target.value
        });
    }

    const handleSearch = () => {


        setMostrarMapa(true);

        Geocode.fromAddress(direccion.direccion).then(
            (response) => {
                if(response){
                    

                    setMostrarMapa(true);
                    const { lat, lng } = response.results[0].geometry.location;
                    console.log(lng, lat);
                    
                    setState({
                        ...state,
                        lat: lat,
                        lng: lng
                    })
                    console.log(response);
                    map.flyTo([lat,lng],17);
                }
            },
            (error) => {
                console.error(error);
            });
    }
    
    

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


    
    const fileCoverInputRef = useRef()
    const [imageCover,setImageCover] = useState();
    const [previewCover,setpreviewCover] = useState()

    useEffect(() => { 
        if(imageCover){
            const reader = new FileReader();
            reader.onloadend = ( ) => {
                setpreviewCover(reader.result);
            };
            reader.readAsDataURL(imageCover);
        }else{
            setpreviewCover(null);
        }
    }, [imageCover])


    const fileInputRef = useRef()
    const [image,setImage] = useState();
    const [preview,setPreview] = useState()

    useEffect(() => { 
        if(image){
            const reader = new FileReader();
            reader.onloadend = ( ) => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        }else{
            setPreview(null);
        }
    }, [image])

    return (


        
<div>

{/* alerta */}
<div className="fixed z-10 inset-0 overflow-y-auto hidden">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   
    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Deactivate account
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Deactivate
        </button>
        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>

{/* alerta */}


{/* parte 1 */}
<div className="hidden">


    <h3 className="text-4xl text-center m-4	 font-semibold px-3">Ubicación del Albergue</h3>
    <p className="px-4 py-2">Ingresa la dirección tu albergue o en caso de estar en el albergue cuando haces el registro, da click en mostrar mi ubicacion, una vez que este seguro del lugar de click en siguiente.</p>
    <div className="mx-3">

      <input 
          type="text"
          onChange={handleChange} 
          name="direccion" 
          placeholder="Ingresa la dirección" 
          className="px-3 py-3  mt-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          value={direccion.direccion}
          />

        <p onClick={handleClick} className="text-sm text-purple-700 my-2 font-bold float-left">Mostrar mi ubicación</p>
          
        <button
          onClick={handleSearch}
          className="bg-purple-700 px-6 py-3 font-semibold my-2 text-white rounded-lg  float-right">
          Buscar
        </button>
    </div>


  
    <MapContainer  whenCreated={setMap} style={{ 'width':400, 'height': 400  }} center={ state } zoom="17" >
        <TileLayer
            url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
            />
       
            <Marker draggable="true" key={state.zoom} position={ state } icon={IconLocation} >
                <Popup>
                    Tu ubicación
                </Popup>
            </Marker>
            
    </MapContainer>


    <button className="bg-purple-700 w-full py-3 font-semibold my-2 text-white   float-right">
        Siguiente
    </button>
   

</div>

<div className="m-3">



{ previewCover ? ( 
  <img className="w-full h-48 bg-gray-200 rounded-lg border-dotted border-blue-700" src={previewCover} style={{ objectFit: 'cover' }} onClick={ () => {
      setImageCover(null);
  } } /> 
  ) : (
  <button className="w-full h-48 bg-gray-200 rounded-lg  border-2 border-dotted border-blue-700 "
      onClick={(event) => {
          event.preventDefault();
          fileCoverInputRef.current.click();
          
      }}
  > Sube Imagen</button>
      )}
 <input  type="file"
    style={{ display: 'none' }}
    ref={ fileCoverInputRef }
    accept="image/*"
    onChange={(event) => {
        const file = event.target.files[0];
        if(file && file.type.substr(0,5) === "image"){
            setImageCover(file);
        }else{
            setImageCover(null);
        }
    }} 
    name="photo" 
    placeholder="agrega link de la foto" 
    /> 


{ preview ? ( 
                <img id="imageProfilPet"  src={preview} style={{ objectFit: 'cover' }} onClick={ () => {
                    setImage(null);
                } } /> 
                ) : (
                <button id="addImage" 
                    onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current.click();
                        
                    }}
                > Sube Imagen</button>
                    )}
                <input  type="file"
                        style={{ display: 'none' }}
                        ref={ fileInputRef }
                        accept="image/*"
                        onChange={(event) => {
                            const file = event.target.files[0];
                            if(file && file.type.substr(0,5) === "image"){
                                setImage(file);
                            }else{
                                setImage(null);
                            }
                        }} 
                        name="photo" 
                        placeholder="agrega link de la foto" 
                        /> 



  {/* <h2 className="text-center">Ingresa el nombre y la foto</h2> */}
  <input 
    type="text"
    onChange={handleChange} 
    name="direccion" 
    placeholder="Ingresa el nombre de tu albergue" 
    className="px-3 py-3  mt-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
    value={datos.nombre}
    />


<input 
    type="text"
    onChange={handleChange} 
    name="Número de telefono" 
    placeholder="Ingresa el nombre de tu albergue" 
    className="px-3 py-3  mt-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
    value={datos.direccion}
    />
  


</div>


</div>

)

}
export default CreateAlbergue