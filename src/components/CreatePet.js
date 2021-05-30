import React,{ useContext } from 'react'
import Formulario from './Formulario'

import { CRMContext } from '../context/CRMContext';


const CreatePet = () => {
  

  const [ auth, guardarAuth ] = useContext( CRMContext )
  console.log( auth );


  return(
  <div className="CreatePet">
    <Formulario/>
  </div>
)

  }

export default CreatePet