import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import CardsAlbergues from '../CardsAlbergues';
import { Link} from 'react-router-dom';

import Pagination from '../Pagination';


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
    console.log('se limpio');
    setBusqueda({
      
      ...initialState
  })
  }

  return(

  <>
  { showSearch != true? 
          (   <button
            onClick={ () => setShowSearch(true) }
            class="flex fading-searc mx-auto inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded-full ripple hover:bg-indigo-100 focus:outline-none"
          >
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            Buscar
          </button>):
            
            null }

<div className={ showSearch != true ? 'fading container mt-3 mx-auto flex justify-center items-center p-2 md:p-0 ':"z-0 container mt-3 mx-auto flex justify-center items-center p-2 md:p-0" }>
                <form  className={ showSearch != true ? "hidden border w-full md:w-3/4 border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg" :"border w-full md:w-3/4 border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg"}>
                   
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="grid  grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                            <div class="col-span-1 mb-3 mt-3 pt-0 p-3 w-full">
                            <select onChange={ (e) => handleInputs(e) } placeholder="seleccione especie"  name="specie" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="0">Seleccione especie</option>
                              <option value="dog">Perro</option>
                              <option value="cat">Gato</option>
                            </select>
                            </div>
                            <div class="col-span-1 mb-3 mt-3 pt-0 p-3 w-full">
                            <select  onChange={ (e) => handleInputs(e) } name="gender" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="">Seleccione Genero</option>
                              <option value="0">Hembra</option>
                              <option value="1">Macho</option>
                            </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                            <div class="mb-3 mt-3 pt-0 p-3 w-full ">
                            <select  onChange={ (e) => handleInputs(e) } name="size" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="0">Seleccione Talla</option>
                              <option value="CH">Chico</option>
                              <option value="M">Mediano</option>
                              <option value="G">Grande</option>
                              
                            </select>
                            </div>
                            <div class="mb-3 mt-3 pt-0 p-3 w-full ">
                            <select onChange={ (e) => handleInputs(e) }  name="race" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
                              <option value="0">Seleccione Raza</option>
                              <option value="mestizo">Mestizo</option>
                              <option value="criollo">Criollo</option>
                            </select>
                            </div>
                        </div>
                    </div>
                      <p onClick={ () => clearSearch() }
      
      className="text-right text-blue-500 font-semibold">Restablecer Busqueda</p>
                    <div class="flex justify-center"  >
                    <button
            onClick={ (e) => { e.preventDefault(); setShowSearch(false)} }
            class="flex font-bold fading-searc mx-auto inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded-full ripple hover:bg-indigo-100 focus:outline-none"
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
)

  }

export default Albergues