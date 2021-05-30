import React, { useState, useContext, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { CRMContext } from '../context/CRMContext';


const NavBar = (props) => {

    const [usuario,setUsuario] = useState({})
    const [ auth, guardarAuth ] = useContext( CRMContext )
    
    const parseJwt = token => {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    useEffect( () => { 
        const token = localStorage.getItem('token');
        if(token){ 
            setUsuario( parseJwt(token) );
            guardarAuth({ token, auth: true });
        } 
    },[auth.token])


   
    
   
    const cerrarSesion = () => {
        // auth.auth = false y el token se remueve
        guardarAuth({
            token: '',
            auth: false
        });

        setUsuario({});


        localStorage.setItem('token', '');

        // redireccionar
        props.history.push('/ingresar');
    }


    const [Navbar,setNavbar] = useState(false);
    return(
       
    <header  className="header my-6 ">
    <div className="container z-50 px-2 sm:px-8 lg:px-10 xl:px-10 mx-auto">
            <div className="header-wrapper flex items-center justify-between">

                <div className="header-logo">
                    <h1 className="font-semibold lg:ml-12 text-black leading-relaxed text-lg">
                      <Link className="sm:pl-4 ml-4" to="/">Radi</Link>
                    </h1>
                </div>

                <div className="toggle md:hidden">
                    <button onClick={ ()=>{setNavbar(!Navbar) } } >
                        <svg
                            className="h-6 w-6 fill-current text-black"
                            fill="none" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div className="navbar hidden md:block ">
                    <ul className="flex space-x-8 text-sm font-semibold">
                        <li> <Link to="/donaciones">Donaciones</Link></li>
                        <li> <Link to="/albergues">Albergues</Link></li>
                        <li> <Link to="/perdidos">Perdidos</Link> </li>
                        {/* <li> <Link to="/patrocinadores">Patrocinadores</Link> </li> */}
                        <li>
                          <Link to="/adoptar" className="cta bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded text-white font-normal">Adopta</Link></li>
                        { auth.auth ? 
                        (   
                        <>
                           <Link to="/profile">
                                 { usuario.name }
                           </Link>
                            <li 
                            onClick={cerrarSesion}
                            className="text-red-500 font-bold cursor-pointer	"> 
                               Salir
                            </li>
                            
                        
                        </>
                        ):null    
                    }
                    </ul>
                </div>

                
            </div>

            
    </div>

    {Navbar}

        
        
        { Navbar && (
            <ul class="z-10 md:hidden  bg-white w-full h-full absolute flex flex-col p-3 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/adoptar" onClick={ ()=>{setNavbar(!Navbar) } }>Adoptar</Link>
                </li>
 
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/perdidos" onClick={ ()=>{setNavbar(!Navbar) } }>Perdidos</Link>
                </li>
                
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/albergues" onClick={ ()=>{setNavbar(!Navbar) } }>Albergues</Link>
                </li>

                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/donaciones" onClick={ ()=>{setNavbar(!Navbar) } }>Donaciones</Link>
                </li>

               
               
                <hr/>
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/crear" onClick={ ()=>{setNavbar(!Navbar) } }>Agregar Mascota</Link>
                </li>
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/albergues/crear" onClick={ ()=>{setNavbar(!Navbar) } }>Crear Albergue</Link>
                </li>

                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/perdidos" onClick={ ()=>{setNavbar(!Navbar) } }>Reporta Perdido</Link>
                </li>
                <hr/>
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/QA" onClick={ ()=>{setNavbar(!Navbar) } }>Preguntas Frecuentes</Link>
                </li>
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/patrocinadores" onClick={ ()=>{setNavbar(!Navbar) } }>Patrocinadores</Link>
                </li>
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/blog" onClick={ ()=>{setNavbar(!Navbar) } }>Blog</Link>
                </li>

                <hr/>
                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/ingresar" onClick={ ()=>{setNavbar(!Navbar) } }>Iniciar Sesión </Link>
                </li>

                <li>
                    <Link  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="/registrar" onClick={ ()=>{setNavbar(!Navbar) } }>Registrate</Link>
                </li>
                
                <hr/>
            </ul>
        )  }

</header>
      
    
)
}

export default withRouter(NavBar)