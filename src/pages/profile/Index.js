import React, { useContext, useEffect, useState } from 'react'

import { CRMContext } from '../../context/CRMContext';
import Dashboard from './Dashboard';
import Messages from './Messages';
import Notifications from './Notifications';
import MyPets from './MyPets';
import Orders from './Orders';
import Favorites from './Favorites';
import Configuration from './Configuration';
import NewPassword from './NewPassword';


const profile = (props) => {

    const [ usuario,setUsuario ] = useState({})
    const [ auth, guardarAuth ] = useContext( CRMContext )
    const { id,name,email } = usuario;
    const [ menu,setMenu ]   = useState(1);
   

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
        }else{
            props.history.push('/');
        }
    },[auth.token])



    return(

        <div class="flex flex-wrap bg-gray-100 w-full h-screen ">
        <div class="w-2/12 bg-white rounded p-3 bg-blue-8000 shadow-lg hidden md:block">
            <div class="flex items-center space-x-4 p-2 mb-5">
                <img class="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta" />
                <div>
                    <h4 class="font-bold text-lg text-gray-700 capitalize font-poppins tracking-wide">{ name }</h4>
                    <span class="text-sm tracking-wide flex items-center space-x-1">
                        <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg><span class="text-gray-600 font-semibold">Verificado</span>
                    </span>
                </div>
            </div>
            <ul class="space-y-2 text-sm">
                <li>
                    <a onClick={ () => setMenu(1) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span>Principal</span>
                    </a>
                </li>
                <li>
                    <a onClick={ () => setMenu(2) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </span>
                        <span>Notificaciones</span>
                    </a>
                </li>
                <li>
                    <a onClick={ () => setMenu(3) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                            </svg>
                        </span>
                        <span>Mensajes</span>
                    </a>
                </li>
                <li>
                    <a onClick={ () => setMenu(4) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span>Mis Mascotas</span>
                    </a>
                </li>
                <li>
                    <a onClick={ () => setMenu(5) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </span>
                        <span>Ordenes</span>
                    </a>
                </li>
                <li>
                    <a onClick={ () => setMenu(6) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class=" text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </span>
                        <span>Favoritos</span>
                    </a>
                </li>
                <li>
                    <a onClick={ () => setMenu(7) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </span>
                        <span>Configuración</span>
                    </a>
                </li>
                <li>
                    <a onClick={ () => setMenu(8) } class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        <span>Cambiar mi contraseña</span>
                    </a>
                </li>
                <li>
                    <a  class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </span>
                        <a  class="block px-4 py-2 ml-6 md:p-2 lg:px-4" to="#dashboard" >Cerrar sesión</a>

                    </a>
                </li>
            </ul>
        </div>
    
        <div class="w-full bg-red-8000 md:w-7/12">
            <div class="p-4 text-gray-500">
                <div>
                    { menu == 1? (
                        <Dashboard/>
                    ): null}
                    
                    { menu == 2? (
                        <Notifications/>

                    ): null}

                    { menu == 3? (
                        <Messages/>

                    ): null}


                    { menu == 4? (
                        <MyPets/>

                    ): null}

                    { menu == 5? (
                      <Orders/>
                    ): null}


                    { menu == 6? (
                        <Favorites/>
                    ): null}


                    { menu == 7? (
                         <Configuration/>
                    ): null}

                    { menu == 8? (
                       <NewPassword/>
                    ): null}



                </div>
            </div>
        </div>

        <div class="w-3/12 hidden bg-white  md:block py-6">
            <div>
                <h3 className="text-center  font-light	">Mi puntaje</h3>
                <h2 className="text-center font-bold text-4xl text-gray-500"> 430 </h2>
            </div>

            <div class="p-4 text-gray-500">
                <p className="text-gray-800 font-semibold">Mascotas Sugeridas</p>
                <span className="text-xs">Basado en tus preferencias</span>
                
                <div className="flex flex-wrap my-4">
            {/* primera */}
                    <div className="w-3/12 ">
                        <img className="rounded-full p-2 flex items-center justify-center" src="https://images.unsplash.com/photo-1546644719-338fa016d442?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=493&q=80"/>
                    </div>
                    <div className="w-6/12 px-1 my-2">
                        <p className="font-bold truncate ">Radiador</p> 
                        <p className="text-sm font-semibold">Mestizo</p>
                    </div>
                    <div class="w-3/12 my-2">
                        <div class="rounded-full bg-green-200 px-2 font-bold my-1 py-1 ">agregar</div>
                    </div>
            {/* segunda */}
                    <div className="w-3/12 ">
                        <img className="rounded-full p-2 flex items-center justify-center" src="https://images.unsplash.com/photo-1585948010778-3dd336d7d92f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    </div>
                    <div className="w-6/12 px-1 my-2">
                        <p className="font-bold truncate ">Pilueta</p> 
                        <p className="text-sm font-semibold">chihuaha</p>
                    </div>
                    <div class="w-3/12 my-2">
                        <div class="rounded-full bg-green-200 px-2 font-bold my-1 py-1 ">agregar</div>
                    </div>
            {/* tercera */}
                    <div className="w-3/12 ">
                        <img className="rounded-full p-2 flex items-center justify-center" src="https://images.unsplash.com/photo-1546644719-338fa016d442?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=493&q=80"/>
                    </div>
                    <div className="w-6/12 px-1 my-2">
                        <p className="font-bold truncate ">Radiador</p> 
                        <p className="text-sm font-semibold">Mestizo</p>
                    </div>
                    <div class="w-3/12 my-2">
                        <div class="rounded-full bg-green-200 px-2 font-bold my-1 py-1 ">agregar</div>
                    </div>
            {/* cuarta */}
            <div className="w-3/12 ">
                        <img className="rounded-full p-2 flex items-center justify-center" src="https://images.unsplash.com/photo-1546644719-338fa016d442?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=493&q=80"/>
                    </div>
                    <div className="w-6/12 px-1 my-2">
                        <p className="font-bold truncate ">Radiador</p> 
                        <p className="text-sm font-semibold">Mestizo</p>
                    </div>
                    <div class="w-3/12 my-2">
                        <div class="rounded-full bg-green-200 px-2 font-bold my-1 py-1 ">agregar</div>
                    </div>
                </div>
            </div>

            <div class="rounded-full mx-8 py-3 px-6 bg-purple-500 font-semibold text-center text-white">Refrescar</div>

        </div>


    </div>




        
)
}

export default profile