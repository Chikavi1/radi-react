import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import CardsAlbergues from '../CardsAlbergues';
import { FaMapMarkedAlt } from  "react-icons/fa";

import Pagination from '../Pagination';
import { IconContext } from "react-icons";

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
const initialState = {
  specie: "",
  gender: "",
  size: "",
  race: ""
};

export const Albergues = () => {

  const [ posts, setPosts] = useState([]);
  const [ loading,setLoading] = useState(false);
  const [ currentPage, setCurrentPage] = useState(1);
  const [ postsPerPage, setPostsPerPage ] = useState(200);
  const [showSearch,setShowSearch] = useState(false);
  const [busqueda,setBusqueda] = useState(initialState)

  const [ mapa,setMapa ] = useState(false);

// se va a borrar
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
// se va a borrar

  useEffect( () => {
     
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:8080/organizaciones');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();

  },[]);


  const indexOfLastPost  = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts     = posts.slice(indexOfFirstPost,indexOfLastPost);


  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleInputs = (e) =>{
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  const clearSearch = () => {
    setBusqueda({
      
      ...initialState
  })
  }


  const activateMap = () => {
    setMapa(!mapa);
    console.log('activando mapa');
  }

  return(

  <>
<button
          onClick={ () => activateMap() }
          class="fixed z-40 bottom-2 right-2  p-0 w-12 h-12 bg-purple-600 rounded-full hover:bg-purple-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
         
            
          <IconContext.Provider value={{ className: "mx-3", size: "1.5em" }}>
            <div>
            <FaMapMarkedAlt color="white"/>
            </div>
          </IconContext.Provider>
         

          
        </button>



{ mapa?(
  <MapContainer style={{ width:'100%',height:'60em',zIndex:'0' }}  center={state.currentLocation} zoom={state.zoom} >
  <TileLayer
      url="https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
      />
 
      <Marker key="12" position={state.currentLocation} icon={IconLocation} >
          <Popup>
              Oceanican
          </Popup>
      </Marker>
</MapContainer>

):(
 <>

{ showSearch != true? 
          (   <button
            onClick={ () => setShowSearch(true) }
            className="flex fading-searc mx-auto inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded-full ripple hover:bg-indigo-100 focus:outline-none"
          >
             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            Buscar
          </button>):
            
            null }
            

<div className={ showSearch != true ? 'fading container mt-3 mx-auto flex justify-center items-center p-2 md:p-0 ':"z-0 container mt-3 mx-auto flex justify-center items-center p-2 md:p-0" }>
                <form  className={ showSearch != true ? "hidden border w-full md:w-3/4 border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg" :"border w-full md:w-3/4 border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg"}>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                            <div className="col-span-1 mb-3 mt-3 pt-0 p-3 w-full">
                            <select onChange={ (e) => handleInputs(e) } placeholder="seleccione especie"  name="specie" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="0">Seleccione especie</option>
                              <option value="dog">Perro</option>
                              <option value="cat">Gato</option>
                            </select>
                            </div>
                            <div className="col-span-1 mb-3 mt-3 pt-0 p-3 w-full">
                            <select  onChange={ (e) => handleInputs(e) } name="gender" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="">Seleccione Genero</option>
                              <option value="0">Hembra</option>
                              <option value="1">Macho</option>
                            </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                            <div className="mb-3 mt-3 pt-0 p-3 w-full ">
                            <select  onChange={ (e) => handleInputs(e) } name="size" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="0">Seleccione Talla</option>
                              <option value="CH">Chico</option>
                              <option value="M">Mediano</option>
                              <option value="G">Grande</option>
                              
                            </select>
                            </div>
                            <div className="mb-3 mt-3 pt-0 p-3 w-full ">
                            <select onChange={ (e) => handleInputs(e) }  name="race" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="0">Seleccione Raza</option>
                              <option value="mestizo">Mestizo</option>
                              <option value="criollo">Criollo</option>
                            </select>
                            </div>
                        </div>
                    </div>
                      <p onClick={ () => clearSearch() }
      
      className="text-right text-blue-500 font-semibold">Restablecer Busqueda</p>
                    <div className="flex justify-center"  >
                    <button
            onClick={ (e) => { e.preventDefault(); setShowSearch(false)} }
            className="flex font-bold fading-searc mx-auto inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded-full ripple hover:bg-indigo-100 focus:outline-none"
          >
            Ocultar busqueda
          </button>

                      </div>
                </form>
            </div>
        


    <h2 className="text-4xl m-3 font-semibold text-gray-600">Albergues</h2>

    <div className="grid md:grid-cols-4 md:gap-4 m-4">
      <CardsAlbergues  className="grid md:grid-cols-4 md:gap-4" posts={currentPosts} loading={loading} />
    </div>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
 </>

)}



   
    
  </>
)

  }

export default Albergues