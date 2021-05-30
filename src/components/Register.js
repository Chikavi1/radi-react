import React from 'react'
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player'
import lottieJson from '../prueba.json';


const Register = () => {

  const [ usuario,setUsuario ] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [passwordShow,setPasswordShow] = useState(false);
  const [ error,mostrarError ] = useState(false);
  const [ mensajeCorreo,mostrarMensajeCorreo ] = useState(false);
  const [ mensajeError,setMensajeError ] = useState('');

  const handleSubmit = e => {

    e.preventDefault();

    const {name,email, password } = usuario;

    if( name.trim() != '' && email.trim() != '' && password.trim() != '' ){

      axios.post('http://localhost:8080/api/register',usuario)
        .then((response) => {
          if(response.status == 200){
            console.log(response.data.mensaje);
            mostrarMensajeCorreo(true);
          }
        }
      ).catch((error)=>{
        if (error.response.status === 401) {
          mostrarError(true)
          setMensajeError('Ese Correo ya existe.');
        }
      })


    }else{
      setMensajeError('Todos los campos son obligatorios.');
      mostrarError(true);
      return;
    }
  }

  const handleInputs = (e) => {

    setUsuario({
        ...usuario,
        [e.target.name] : e.target.value
    })
}

return   (
    <>
 <div className="Signin">


 



   <form className="form-horizontal" onSubmit={ (e) => { handleSubmit(e) } }>

    


    <div className="py-6 -mt-8">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">

            <div className="hidden lg:block lg:w-1/2 bg-cover"
            style={{ "background-image" : 
            "url('https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80')"  }}>
            </div>


            <div className="w-full p-8 lg:w-1/2">
              
  { error ?( 
    <div className="alert flex flex-row items-center bg-red-200 mb-7 p-5 rounded border-b-2 border-red-300">
    <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
      <span className="text-red-500">
        <svg fill="currentColor"
           viewBox="0 0 20 20"
           className="h-6 w-6">
          <path fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
        </svg>
      </span>
    </div>
    <div className="alert-content ml-4">
      <div className="alert-title font-semibold text-lg text-red-800">
        Error
      </div>
      <div className="alert-description text-sm text-red-600">
         <p>{ mensajeError }</p>
         {/*          <p> </p>  */}
      </div>
    </div>
  </div>



  ):null 
}
   
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
  <div>
  
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Radi</h2>
                <p className="text-xl text-gray-600 text-center">Registrate gratis</p>

              
                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    <input onChange={ (e) => handleInputs(e) }  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"  name="name" />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Correo Electronico</label>
                    <input onChange={ (e) => handleInputs(e) } className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" />
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                    <input 
                      onChange={ (e) => handleInputs(e) } 
                      type={passwordShow ? "text" : "password"} 
                      name="password" 
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"  
                      />
                </div>
                <p className="py-3 font-bold text-right" onClick={ () => setPasswordShow(!passwordShow) }>
                  { passwordShow? (<span>Ocultar </span>) : <span>Mostrar</span>} 
                </p>

               <div className="mt-8">
                    <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Registrate</button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/ingresar" className="text-xs text-gray-500 uppercase">o Ingresa con tu cuenta</Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
                </div>
)
}
            </div>
        </div>
    </div>
</form>
  </div>
 
 </>
)
}

export default Register