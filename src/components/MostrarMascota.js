import React,{ useState,useEffect } from 'react';
import axios from 'axios';


export const MostrarMascota = (props) => {

   const { id } = props.match.params;
    const [mascota,setMascota] = useState({
        albumId: 1,
        id: 1,
        title: '',
        url: '',
        thumbnailUrl:''
    })

   console.log(id);

   const fetchPet = async () => {
        const mascota = await axios.get(`http://localhost:8080/pets/${id}`);
        console.log(mascota);
        setMascota(mascota.data);

   }

   useEffect( () => {
       fetchPet()
   },[])

return(

    <section className="container mx-auto">
        <div className="grid md:grid-cols-3 ">
            <div className=" col-span-1">
                <div className="p-3 h-1/4">
                    <img  className="rounded-lg max-h-96" src={mascota.photo} />
                </div>
                
            </div>
            <div className="col-span-2 rounded-md bg-gray-100 p-4 max-h-80">
                <div className="grid grid-cols-12 ">


                    <h3 className="col-span-11 font-bold text-4xl text-left text-grey-600 capitalize">
                        {mascota.name}
                        
                    </h3>
                    <svg className=" fill-current text-green-600 col-span-1 object-right-top"
                        height="26" 
                        viewBox="0 0 512 512" 
                        width="26"
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#005c47"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/>
                    </svg>
                </div>
                <p className="text-left text-gray-600 font-bold capitalize">{mascota.race}</p>

                <p className="text-left  max-h-36 h-36 p-3 ">{mascota.description}</p>
                <div className="grid grid-cols-8 gap-3 text-center">
                <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
                        <span>Especie</span>
                        <p className="font-bold">{mascota.specie}</p>
                    </div>

                    
                    <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
                        <span>Edad</span>
                        <p className="font-bold">{mascota.age} Años</p>
                    </div>
                    
                    <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
                        <span>Tamaño</span>
                        <p className="font-bold">{mascota.size}</p>
                    </div>
                    <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
                        <span>Genero</span>
                        <p className="font-bold" >{ mascota.gender }</p>
                    </div>
                    <div className="col-span-2 h-24 block bg-blue-500 text-white rounded-lg pt-2">
                        <span>Ciudad</span>
                        <p className="font-bold"> {mascota.city} </p>
                    </div>
                    <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
                        <span>Color</span>
                        <p className="font-bold" >{ mascota.color }</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <p>Dale una segunda oportunidad,adoptalo!</p>
                <button className=" px-9 w-3/4 bg-purple-700 px-4 py-2 text-white font-bold rounded-md">Adoptar</button>
            </div>
        </div>
    </section>
)

}

export default MostrarMascota;