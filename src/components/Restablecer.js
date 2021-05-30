import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player'
import lottieJson from '../prueba.json';

const Restablecer = (props) => {

    const [password,setPassword] = useState();
    const [ mensajeCorreo,mostrarMensajeCorreo ] = useState(false);
    const [passwordShow,setPasswordShow] = useState(false);

    useEffect( ( ) => {

        axios.get(`http://localhost:8080/reestablecer/${ props.match.params.id }`)
        .then( (res) => {
            if(res.data.estatus){
                console.log('tiene permisos de editar');
            }
        })
    },[])

    const handleInputs = e =>{
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(password);

        axios.post(`http://localhost:8080/reestablecer/${ props.match.params.id }`,{
            password:password
        })
        .then( (res) => {
            console.log(res);
        });


    }


    return(
        <div >
      <form className="form-horizontal" onSubmit={ e => handleSubmit(e) } >
        

      
          <div className="py-6 mt-2">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                   <div className="hidden lg:block lg:w-1/2 bg-cover" 
                   style={{ "backgroundImage": "url('https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')" 
                   }}>

                   </div>
      
                  <div className="hidden lg:block lg:w-2/2 bg-cover "
                  >
                  </div>
      
      
                  <div className="w-full p-8 lg:w-1/2">


               
                  
                  { mensajeCorreo ?( 
<div className="mx-2 ">
  <center> 
  <Lottie
    loop
    animationData={lottieJson}
    play
    style={{ width: 150, height: 150 }}
    />
  </center>
  <p className="font-thin text-gray-600">Te hemos enviado un link a tu correo electronico,checa tu bandeja de entrada o en tu carpeta de spam.</p>
  <p className="text-gray-600">Una vez verificado, podras ingresar sesión.</p>
  <Link to="/ingresar">
   <button className="px-6 py-3 bg-purple-700 text-white rounded-sm mt-3 w-full">Entendido
   </button>
   </Link>
</div>
):(
<>
                      <h2 className="text-2xl font-semibold text-gray-700 text-center">Radi</h2>
                     
                      <div className="mt-4 flex items-center justify-between">
                          <span className="border-b w-1/5 lg:w-1/4"></span>
                          <a href="#" className="text-xs text-center text-gray-500 uppercase"> Ingresa tu nueva contraseña</a>
                          <span className="border-b w-1/5 lg:w-1/4"></span>
                      </div>
                      <div className="mt-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">Nueva Contraseña</label>
                          <input 
                            onChange={ e => handleInputs(e) } 
                            placeholder="Ingresa tu nueva Contraseña" 
                            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" 
                            type={passwordShow ? "text" : "password"} 
                            name="password" />
                      </div>
                     
                      <p className="py-3 font-bold text-right" onClick={ () => setPasswordShow(!passwordShow) }>
                  { passwordShow? (<span>Ocultar </span>) : <span>Mostrar</span>} 
                </p>


                      <div className="mt-8">
                          <button  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Cambiar</button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                          <span className="border-b w-1/5 md:w-1/4"></span>
                          <span className="border-b w-1/5 md:w-1/4"></span>
                      </div>
</>
)}
                  </div>
              </div>
          </div>
      </form>
  </div>
)

}

export default Restablecer