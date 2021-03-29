import React from 'react'

const SelectColonia = ({handle,opciones}) =>
{

    console.log(opciones);

    return (
        <>
        <select required onChange={  handle } name="address2" className="py-3 px-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full">
          <option>Selecciona una opcion</option>
        { opciones.map(opcion => (
            <option key={opcion}>{ opcion }</option>
            
           ))}
    </select>
  
  </>

)
}

export default SelectColonia