import React,{ useState, useContext, useEffect  } from 'react'
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import { CRMContext } from '../context/CRMContext';



const Login = (props) => {
  
  const [ auth, guardarAuth ] = useContext( CRMContext );

  const [ usuario,setUsuario ] = useState({
    email: '',
    password: ''
  });

  const [ error,mostrarError ] = useState(false);
 
  const [ mensajeError,setMensajeError ] = useState('');

  useEffect( () => { 
    const token = localStorage.getItem('token');
    if(token){ 
        guardarAuth({ token, auth: true });
        props.history.push('/'); 
    } 
},[])

  const handleInputs = (e) => {
      setUsuario({
        ...usuario,
        [e.target.name] : e.target.value
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email,password } = usuario;

    if(email.trim() != '' && password.trim() != ''){

      axios.post('http://localhost:8080/api/login',usuario)
        .then((response) => {
          if(response.status == 200){
            // console.log(response.data);

            const { token } = response.data;
            localStorage.setItem('token',token);

            guardarAuth({
              token,
              auth: true
            });

            props.history.push('/profile');


          }
        }
      ).catch((error)=>{
        if (error.response.status === 401) {
          mostrarError(true)
          setMensajeError('Ese Correo ya existe.');
          console.log(error.response.data.mensaje);
          setMensajeError(error.response.data.mensaje);
          mostrarError(true);
        }
      })


    }else{
      setMensajeError('Todos los campos son obligatorios.');
      mostrarError(true);
      return;
    }
  }
  
  
  return(
  <div className="login">
      <form className="form-horizontal" onSubmit={(e) => handleSubmit(e)} >
        

      
          <div className="py-6 mt-2">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                   <div className="hidden lg:block lg:w-1/2 bg-cover" 
                   style={{ "background-image": "url('https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')" 
                   }}>

                   </div>
      
                  <div className="hidden lg:block lg:w-2/2 bg-cover "
                  // style={{ "background-image":"url('https://images.unsplash.com/photo-1593263473380-5629bc43a68f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}
                  >
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
                  


                      <h2 className="text-2xl font-semibold text-gray-700 text-center">Radi</h2>
                      <p className="text-xl text-gray-600 text-center">¡Bienvenido!</p>
                      <a  href="" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                          <div className="px-4 py-3">
                              <svg className="h-6 w-6" viewBox="0 0 40 40">
                                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                                  <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                                  <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                              </svg>
                          </div>
                          <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Ingresa con tu cuenta de Google</h1>
                      </a>
                      <div className="mt-4 flex items-center justify-between">
                          <span className="border-b w-1/5 lg:w-1/4"></span>
                          <a href="#" className="text-xs text-center text-gray-500 uppercase"> Ingresa con tu correo</a>
                          <span className="border-b w-1/5 lg:w-1/4"></span>
                      </div>
                      <div className="mt-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">Correo Electronico</label>
                          <input onChange={ (e) => handleInputs(e) } className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" />
                      </div>
                      <div className="mt-4">
                          <div className="flex justify-between">
                              <label className="block text-gray-700 text-sm font-bold mb-2" >Contraseña</label>
                              <Link to="/forget" className="text-xs text-gray-500">Olvidaste tu contraseña?</Link>
                          </div>
                          <input onChange={ (e) => handleInputs(e) } className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" />
                      </div>
                      <div className="mt-8">
                          <button  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Ingresar</button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                          <span className="border-b w-1/5 md:w-1/4"></span>
                          <Link  to="/registrar" className="text-xs text-gray-500 uppercase">o Crea una cuenta</Link>
                          <span className="border-b w-1/5 md:w-1/4"></span>
                      </div>
                  </div>
              </div>
          </div>
      </form>
  </div>
)
                  }
export default withRouter(Login)