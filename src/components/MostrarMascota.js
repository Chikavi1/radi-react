import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    // <section className="container mx-auto bg-gray-100">
    //     <div className="grid md:grid-cols-3 ">
    //         <div className="col-span-1">
    //             <div className="p-3 md:h-1/4 w-screen">
    //                 <img  className="rounded-lg md:max-h-96 md:w-72 w-full" src={mascota.photo} />
    //             </div>
                
    //         </div>
    //         <div className="rounded-t-3xl m-2 col-span-2 rounded-md bg-white p-4 max-h-80">
    //             <div className="grid grid-cols-12 ">


    //                 <h3 className="col-span-11 font-bold text-4xl text-left text-grey-600 capitalize">
    //                     {mascota.name}
                        
    //                 </h3>
    //                 <svg className=" fill-current text-green-600 col-span-1 object-right-top"
    //                     height="26" 
    //                     viewBox="0 0 512 512" 
    //                     width="26"
    //                     xmlns="http://www.w3.org/2000/svg">
    //                         <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#005c47"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/>
    //                 </svg>
    //             </div>
    //             <p className="text-left text-gray-600 font-bold capitalize">{mascota.race}</p>
    //             <p className="mt-3">Descripción</p>
    //             <p className="text-left  max-h-36 h-36 p-3 text-gray-900 font-semibold">{mascota.description}</p>
    //             <div className="grid  grid-cols-3 md:grid-cols-8 gap-3 text-center">
    //             <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
    //                     <span>Especie</span>
    //                     <p className="font-bold">{mascota.specie}</p>
    //                 </div>
                    
    //                 <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
    //                     <span>Edad</span>
    //                     <p className="font-bold">{mascota.age} Años</p>
    //                 </div>
                    
    //                 <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
    //                     <span>Tamaño</span>
    //                     <p className="font-bold">{mascota.size}</p>
    //                 </div>
    //                 <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
    //                     <span>Genero</span>
    //                     <p className="font-bold" >{ mascota.gender }</p>
    //                 </div>
    //                 <div className="cols-span-1 md:col-span-2 h-24 block bg-blue-500 text-white rounded-lg pt-2">
    //                     <span>Ciudad</span>
    //                     <p className="font-bold"> {mascota.city} </p>
    //                 </div>
    //                 <div className="col-span-1 h-24 block bg-blue-500 text-white rounded-lg pt-2">
    //                     <span>Color</span>
    //                     <p className="font-bold" >{ mascota.color }</p>
    //                 </div>
    //             </div>
    //         </div>
            
    //     </div>
    //         <div className="mt-3" >
    //             <p>Dale una segunda oportunidad,adoptalo!</p>
    //             <button className=" px-9 w-3/4 bg-purple-700 px-4 py-2 text-white font-bold rounded-md">Adoptar</button>
    //         </div>
    // </section>



//     <div class="relative h-32 w-32 bg-red-700">
//   <div class="absolute inset-x-0 bottom-0 h-16 bg-green-700">3</div>
// </div>


    // <section className=" bg-gray-100 h-screen relative overflow-y-auto ">
    //      <div className="grid md:grid-cols-3 ">
    //          <div className="col-span-1">
    //              <div className="p-3 md:h-1/4 w-screen">
    //                  <img  className="rounded-lg md:max-h-96 md:w-72 w-full" src={mascota.photo} />
    //              </div>
    //          </div>
    //     </div>

    //     <div className="rounded-t-3xl m-2 col-span-2 rounded-md bg-white p-4 max-h-80">
    //     <h2>Nombre</h2>
    //     <p>Lugar</p>

    //     <h2>Nombre</h2>
    //     <p>Lugar</p>

    //     <h2>Nombre</h2>
    //     <p>Lugar</p>
    //     <h2>Nombre</h2>
    //     <p>Lugar</p>

    //     <h2>Nombre</h2>
    //     <p>Lugar</p>
    //     <h2>Nombre</h2>
    //     <p>Lugar</p>

    //     <h2>Nombre</h2>
    //     <p>Lugar</p>
    //     <h2>Nombre</h2>
    //     <p>Lugar</p>

    //     <h2>Nombre</h2>
    //     <p>Lugar</p>
    //     <h2>Nombre</h2>
    //     <p>Lugar</p>
    //     <h2>Nombre</h2>
    //     <p>Lugar</p>
    //     <h2>Nombre</h2>
    //     <p>Lugar</p>
        
    //     </div>

    //     <footer class="absolute inset-x-0 bottom-0 h-16  bg-white z-10 overflow-hidden ">
    //         <div className="grid grid-cols-2 p-3">
    //             <div className="col-span-1 inline">
    //                 <img className="rounded-full h-14 w-14 inline border-red-500 " src="https://images.unsplash.com/photo-1486302913014-862923f5fd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
    //                 <p className="inline font-bold"> Luis R.</p>
    //             </div>
    //             <div className="col-span-1">
    //                 <button className="bg-purple-600 text-white px-3 py-5 w-full rounded-lg">Adoptar</button>
    //             </div>

    //         </div>
    //     </footer>


    // </section>
<>

    <body className="visible md:hidden flex flex-col h-screen  max-h-screen overflow-y-auto">
        <main className="flex-1 max-w-screen overflow-y-auto h-5/12">
        <div className="grid md:grid-cols-3 ">
            <div className="col-span-1 h-1/2">
                <div className="p-3 md:h-1/4 w-screen bg-gray-100">
                    <img  className="rounded-lg w-screen max-h-96  md:max-h-96 md:w-72" style={{ objectFit: 'cover' }} src={`http://localhost:8080/${mascota.photo}`} />
                </div>
                
            </div>
            <div className="rounded-t-3xl m-2 col-span-2 rounded-md bg-white p-4 max-h-80">
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
                <p className="text-left text-gray-600 font-bold capitalize mb-2">{mascota.race}</p>
                <div className="grid  grid-cols-3 md:grid-cols-8 gap-3 text-center pt-2">
                <div className="col-span-1 h-24 block bg-gray-100 rounded-lg ">
                        <span>Especie</span>
                        <p className="font-bold">{mascota.specie}</p>
                    </div>
                    
                    <div className="col-span-1 h-24 block bg-gray-100 rounded-lg ">
                        <span>Edad</span>
                        <p className="font-bold">{mascota.age} Años</p>
                    </div>
                    
                    <div className="col-span-1 h-24 block bg-gray-100 rounded-lg ">
                        <span>Tamaño</span>
                        <p className="font-bold">{mascota.size}</p>
                    </div>
                    <div className="col-span-1 h-24 block bg-gray-100 rounded-lg ">
                        <span>Genero</span>
                        <p className="font-bold" >{ mascota.gender }</p>
                    </div>
                    <div className="cols-span-1 md:col-span-2 h-24 block bg-gray-100 rounded-lg ">
                        <span>Ciudad</span>
                        <p className="font-bold"> {mascota.city} </p>
                    </div>
                    <div className="col-span-1 h-24 block bg-gray-100 rounded-lg ">
                        <span>Color</span>
                        <p className="font-bold" >{ mascota.color }</p>
                    </div>
                </div>
                <p className="mt-3 text-2xl	font-bold mt-2">Descripción</p>
                <p className="text-left   h-auto  text-gray-900 font-semibold">
            { mascota.description }
                </p>
        <div className="mt-2 h-48 -m-6 w-screen bg-red-400">
            <div className="col-span-1">

                <div class="flex flex-col bg-white m-auto p-auto">
<h1
        class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
      >
        Vacunas
      </h1>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div class="inline-block px-3">
            <div
              class="w-48 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-48 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-48 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-48 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-48 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-48 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-48 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
</div>









            </div>
        </div>
            </div>
         </div>
        

        </main>
        <footer className="p-4 bg-gray-50 h-52  inset-x-0 bottom-0">
                 <div className="grid grid-cols-2 ">
                 <div className="col-span-1 inline">
                     <img className="rounded-full h-14 w-14 inline border-red-500 " src="https:images.unsplash.com/photo-1486302913014-862923f5fd48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
                     <p className="inline font-bold"> Luis R.</p>
                 </div>
                 <div className="col-span-1">
                     <Link to="/formulario">
                     <button  className="bg-purple-600 text-white px-1 py-4 w-full rounded-lg">Adoptar</button>
                     </Link>
                 </div>
                 </div>
                 <div className="grid grid-cols-1 mt-10">
                    <div className="col-span-1">
                        <p className="p-3  text-center">No tardas mas de 5 minutos en registrar tu solicitud para poder adoptar!</p>
                    </div>
                 </div>

        </footer>

    </body>

    <body className="lg:visible invisible">
        jaja ve a la version de movil
    </body>

</>


)

}

export default MostrarMascota;