import axios from 'axios';
import '../App.css';
import Map from './Map';
import { Link} from 'react-router-dom';

import React,{ useState,useEffect } from 'react'
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'


export const Albergue = (props) => {

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


//    const { id } = props.match.params;
//     const [mascota,setMascota] = useState({
//         albumId: 1,
//         id: 1,
//         title: '',
//         url: '',
//         thumbnailUrl:''
//     })

//    console.log(id);

//    const fetchPet = async () => {
//         const mascota = await axios.get(`http://localhost:8080/pets/${id}`);
//         console.log(mascota);
//         setMascota(mascota.data);

//    }

//    useEffect( () => {
//        fetchPet()
//    },[])

return(

    <div className="z-0 bg-gray-50 h-screen" >
        <img class="w-full p-2 rounded-3xl	" src="https://i.ibb.co/0qgNYLB/118114949-3230889310326165-2393965044989808666-o.jpg" />
            <center>
                <div className="-mt-12  w-48  rounded-2xl ">
                    <img className="rounded-2xl w-36 h-36 shadow-md" src="https://i.ibb.co/qdhhz40/549591-452164474865343-127610589-n.jpg" />
                </div>
            </center>
            <div className="bg-white p6 m-4 rounded-xl shadow-md	">
                 <h2 className="text-2xl text-gray-700 font-bold pl-4 pt-2 ">Oceanican</h2>
                 <p className="font-bold text-gray-400 ml-4">Ciudad de mexico</p>
                 <p className="text-center text-4xl font-bold text-purple-500 p-4">54 Mascotas</p>
                <Link to="/donaciones">
                 <button  className="px-4 py-3 font-bold bg-purple-600 w-11/12 m-4 text-white text-xl rounded-lg">Donar</button>
                </Link>
            </div>
            <p className="p-5">Oceanican es un refugio dentro de una casa habitación, quienes ahí vivimos ayudamos a los perrit@s de la calle, los rescatamos, rehabilitamos y damos en adopción.
Todos nuestros rescatados se entregan esterilizados, desparasitados, con la vacuna quíntuple, vacuna bordetella, contra la rabia, y con prueba de leptospirosis.</p>


{/* scroll  */}

<div class="flex flex-col bg-white m-auto p-auto">
    <h1
        class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
      >
            Mascotas
    </h1>

    <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div class="inline-block px-3">

            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
                <div>
                    <div className="relative pb-5/6">
                        <img className="w-full object-cover rounded-lg shadow-md h-64"  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                        
                    <div className="relative px-2 -mt-16 ">
                        <div className="bg-white h-40 rounded-lg px-4 py-4 shadow-lg">
                            <h4 className="mt-1 text-gray-900  font-semibold text-lg capitalize">Radi asdas sadasda  </h4>
                        </div>
                    </div>
                </div>

            
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >

            <div>
                    <div className="relative pb-5/6">
                        <img className="w-full object-cover rounded-lg shadow-md h-64"  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    </div>
                        
                    <div className="relative px-2 -mt-16 ">
                        <div className="bg-white h-40 rounded-lg px-4 py-4 shadow-lg">
                            <h4 className="mt-1 text-gray-900  font-semibold text-lg capitalize">Radi asdas sadasda  </h4>
                        </div>
                    </div>
                </div>
                
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            <div>
                    <div className="relative pb-5/6">
                        <img className="w-full object-cover rounded-lg shadow-md h-64"  src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                        
                    <div className="relative px-2 -mt-16 ">
                        <div className="bg-white h-40 rounded-lg px-4 py-4 shadow-lg">
                            <h4 className="mt-1 text-gray-900  font-semibold text-lg capitalize">Radi asdas sadasda  </h4>
                        </div>
                    </div>
                </div>



            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            <div>
                    <div className="relative pb-5/6">
                        <img className="w-full object-cover rounded-lg shadow-md h-64"  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    </div>
                        
                    <div className="relative px-2 -mt-16 ">
                        <div className="bg-white h-40 rounded-lg px-4 py-4 shadow-lg">
                            <h4 className="mt-1 text-gray-900  font-semibold text-lg capitalize">Radi asdas sadasda  </h4>
                        </div>
                    </div>
                </div>


            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >

            <div>
                    <div className="relative pb-5/6">
                        <img className="w-full object-cover rounded-lg shadow-md h-64"  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </div>
                        
                    <div className="relative px-2 -mt-16 ">
                        <div className="bg-white h-40 rounded-lg px-4 py-4 shadow-lg">
                            <h4 className="mt-1 text-gray-900  font-semibold text-lg capitalize">Radi asdas sadasda  </h4>
                        </div>
                    </div>
                </div>

            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
         
        </div>
      </div>
</div>

{/* scroll */}




    <div className="h-3/6 m-5 ">

<MapContainer className="h-3/6 bg-red-300 	rounded-2xl	" center={state.currentLocation} zoom={state.zoom} >
        <TileLayer
            url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
            />
       
            <Marker key="12" position={state.currentLocation} icon={IconLocation} >
                <Popup>
                    Oceanican
                </Popup>
            </Marker>
 </MapContainer>
    <small>2a Priv Acueducto 275, Ampliacion San Miguel Ajusco, Tlalpan, 14710 Ciudad de México, CDMX</small>

    <div className="px-4 py-4 mt-4 bg-purple-800 rounded-md text-white w-32">Google Maps</div>

    </div>

    </div>
    )

}

export default Albergue;