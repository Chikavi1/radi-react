import React from 'react'
import { useState } from 'react/cjs/react.development'
import SelectColonia from './SelectColonia'
import axios from 'axios'


const FormularioAdopcion = () => {

  const [ codigoPostal,setCodigoPostal ] = useState('');
  const [ selectColonia,setSelectColonia ] = useState([]);
  const [ curp, setCurp ] = useState("");
  
  const [ result,setResult ] = useState(false);
  const [ datos, setDatos  ] = useState({
    name: '',
    email: '',
    identification: '',
    phone: '',
    address: '',
    address2: '',
    interior_number: '',
    exterior_number: '',
    postal_code: '',
    city: '',
    state:''
  })

  const changeHandler = ({ target }) => {
    setCurp(target.value.toUpperCase())
  }

  const handleAPICP = (e) => {
    setSelectColonia([]);
    console.log(e.target.value.length);
        if( e.target.value.length == 5){
          axios.get(`https://api-sepomex.hckdrk.mx/query/info_cp/${e.target.value}?type=simplified`)
          .then((response) => {
            setDatos( { ...datos,
              // address2: response.data.response.colonia,
              city: response.data.response.municipio,
              state: response.data.response.estado
            });

            // setPais(response.data.response.pais);
           setSelectColonia(...[] ,response.data.response.asentamiento);
          })
          .catch((error) => {
            console.log(error);
          }); 
        }

    setCodigoPostal({
      codigoPostal,
      [e.target.name] : e.target.value
    })
  }

  const [num, setNum] = useState();

  const handleChange = (event) => {
      const value = event.target.value.replace(/\+|-/gi, "");
      if (value.length <= 5) {
        const number = parseInt(value);
        setNum(number);
      }
}
  

    const handleInputs = (e) => {

      // const re = /^[0-9\b]+$/;
      // if (e.target.value === '' || re.test(e.target.value)) {
      //   console.log('pasa');
      //   setnumeroExterior({
      //     [e.target.name] : e.target.value
      //   })
      // }
  
      setDatos({
        ...datos,
        [e.target.name] : e.target.value
    });
    
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setResult(true);

    }
return (
  <div className="FormularioAdopcion">

  { !result ? (
  <>

<h3 className="p-5 font-bold">CONTRATO DE ADOPCIÓN DE ANIMAL PARA COMPAÑÍA </h3>
    
    <p className="px-6 py-2 font-xl font-bold">Datos Personales</p>
   
   <form onSubmit={ (e) => handleSubmit(e) }>

    <div className="mb-3 pt-0 p-3">
      <input  type="text"
              name="name" 
              required
              placeholder="Nombre Completo"
              onChange={ (e) => handleInputs(e) } 
              className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
    </div>

    <div className="mb-3 pt-0 p-3">
        <input  type="email"
                name="email" 
                required
                onChange={ (e) => handleInputs(e) } 
                placeholder="Correo Electronico" 
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                />
    </div>

  <div className="grid grid-cols-2 gap-1">
    <div className="col-span-1 px-3	">
      <input  type="text"
        name="identification" 
        placeholder="CURP"
        maxLength={18} 
        required
        value={curp.toUpperCase()} 
        onChange={changeHandler}
        onBlur={ (e) => handleInputs(e) } 
        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
        />
    </div>

    <div className="col-span-1 px-3	">
      <input  type="tel"
        name="phone"
        required
        placeholder="Número de celular" 
        onChange={ (e) => handleInputs(e) } 

        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
        />
    </div>
  </div>
    

  <p className="px-6 py-2 font-xl font-bold mt-6">Dirección</p>
    <div className="mb-3 pt-0 p-3">
        <input  type="text"
                name="address"
                required
                onChange={ (e) => handleInputs(e) } 
                placeholder="Nombre de la Calle" 
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                />
    </div>

    <div className="grid grid-cols-2 gap-1">
      <div className="col-span-1 px-3	">
        <input  type="number"
        required
          name="exterior_number"
          maxLength="5" 
          value={num} 
          onChange={handleChange}  
          onBlur={ (e) => handleInputs(e) } 
          placeholder="Número exterior" 
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
      </div>
      <div className="col-span-1 px-3	">
        <input  type="number"
        required
          name="interior_number" 
          placeholder="Número interior" 
          onChange={ (e) => handleInputs(e) } 
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
      </div>
    
    </div>

    <div className="grid grid-cols-2 gap-1 py-3 ">
      <div className="col-span-1 px-3	">
        <input  type="number"
                name="postal_code" 
                required
                onChange={handleAPICP}
                onBlur={ (e) => handleInputs(e) } 
                placeholder="Código Postal" 
                className="py-3 px-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                />
      </div>

      <div className="col-span-1 px-3	">
         <SelectColonia handle={ (e) => handleInputs(e) }   opciones={selectColonia}/>
      </div>
    </div>
 


    <div className="grid grid-cols-2 gap-1 mb-6 ">
      <div className="col-span-1 px-3	">
        <input  type="text"
          readOnly
          value={datos.city}
          name="city"
          required
          // onChange={ (e) => handleInputs(e) } 
          placeholder="Municipio" 
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
          />
      </div>
      <div className="col-span-1 px-3	">
         <input  type="text"
            readOnly
            name="state"
            required
            value={datos.state}
            // onChange={ (e) => handleInputs(e) } 
            placeholder="Estado" 
            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            />
      </div>
    </div>        
      <button className="py-4 px-2 w-full bg-purple-600 text-white">
        Siguiente
      </button>

    </form>


  </>
  
  ) : (
  
  
  <>
   <h4 className="my-5 text-center  text-indigo-500 font-bold">Datos del donatario</h4>
    <div className="w-5/6 p-4 mx-8 my-3 bg-indigo-500 rounded-lg">
      <p className="text-white font-bold text-xl">{datos.name}</p>
      <p className="text-white font-bold">{datos.email}</p>
      <p className="text-white font-bold">{datos.address} {datos.exterior_number}-{datos.interior_number}, {datos.address2},{datos.city},{datos.state},{datos.postal_code}</p>
      <p className="text-white font-bold">{datos.phone}</p>
      <p className="text-white font-bold">{datos.identification}</p>
      {/* <p className="text-white font-bold">36-59-66-17</p> */}

    </div>

    
    <h4 className="my-5 text-center  text-yellow-500 font-bold">Datos del donante</h4>
    <div className="w-5/6 p-4 mx-8 my-3 bg-yellow-500 rounded-lg">
      <p className="text-white font-bold text-xl">Oceanican</p>
      <p className="text-white font-bold">3327276923</p>
      <p className="text-white font-bold">soporte@Oceanican.com</p>

    </div>


    <h4 className="my-5 text-center text-green-500 font-bold">Datos del animal donado</h4>
      <img className="rounded-t-lg w-5/6 mx-8 " src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80" />
    <div className="w-5/6 p-4 mx-8 mb-3 bg-green-200 rounded-b-lg">
      <p className="text-gray-700 font-bold text-3xl">Radi</p>
      <div class="px-6 py-4">
      <span class="inline-block bg-grey-lighter rounded-full px-3 mt-2 mx-1 py-1 bg-green-500 text-sm font-bold text-white mr-2">Perro</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 mt-2 mx-1 py-1 bg-green-500 text-sm font-bold text-white mr-2">Mestizo</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 mt-2 mx-1 py-1 bg-green-500 text-sm font-bold text-white">Masculino</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 mt-2 mx-1 py-1 bg-green-500 text-sm font-bold text-white">Mediano</span>
      <span class="inline-block bg-grey-lighter rounded-full px-3 mt-2 mx-1 py-1 bg-green-500 text-sm font-bold text-white">Esterilizado</span>

    </div>
    </div>
  
  </>)}


  </div>
)}

export default FormularioAdopcion