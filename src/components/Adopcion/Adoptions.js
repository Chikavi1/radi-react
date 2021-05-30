import React,{ useState,useEffect,useContext } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Pagination from '../Pagination';

import '../../Mascotas.css';
// import '../../CrearMascota.css';



export const Adoptions = () => {


    const [ posts, setPosts] = useState([]);
    const [ loading,setLoading] = useState(false);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ postsPerPage ] = useState(18);

    const [showSearch,setShowSearch] = useState(false);

    const initialState = {
      specie: "",
      gender: "",
      size: "",
      race: ""
    };

    const [busqueda,setBusqueda] = useState(initialState)

    useEffect( () => {
     
      const fetchPosts = async () => {
        setLoading(true);
        const { specie,gender,size,race } = busqueda;

        const res = await axios.get(`http://localhost:8080/pets?size=${size}&gender=${gender}&specie=${specie}`,{
          // headers:{
          //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoaWthdmlAaG90bWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNjE2OTkxOTEyLCJleHAiOjE2MTY5OTU1MTJ9.e1gYLsW-Mes_9obeidUOsT3vTmHH_j4TMS0LTR1JTD4`
          // }
        });
        setCurrentPage(1);
        setPosts(res.data);
        
        setLoading(false);
      }
  
      fetchPosts();
  
    },[busqueda]);

    useEffect( () => {

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' });
    },[currentPage])
  
  
  
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

      {/* <div className="bg-indigo-900 text-center py-4 lg:px-4">
      <Link to="/crear">
        <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Nuevo</span>
          <span className="font-semibold mr-2 text-left flex-auto">Descubre como funciona la plataforma.</span>
          <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
      </Link>
      </div> */}


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
        
        <div className="md:mx-36 grid md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-1 m-4 jumbotron">
            <Cards  className="grid md:grid-cols-4 md:gap-4" posts={currentPosts} loading={loading} />

        </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
</>)

}

export default Adoptions