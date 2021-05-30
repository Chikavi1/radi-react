import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../withoutscrollbar.css'

const dashboard = (props) => {

    return(

      <>

<Tabs className="bg-white">
   
    <TabList className="grid grid-cols-10 ">
                {/* <Tab className="text-gray-600 py-4 px-6 block hover:text-gray-500 focus:outline-none text-gray-500 border-b-2 font-medium border-gray-500"> */}
        <Tab className="col-start-5	 col-span-1	text-gray-600 py-4 px-6 block hover:text-gray-500 focus:outline-none">
            Citas
        </Tab>
        <Tab className=" col-span-1	 text-gray-600 py-4 px-6 block hover:text-gray-500 focus:outline-none">
            Cátalogo
        </Tab>
        <Tab className=" col-span-1	 text-gray-600 py-4 px-6 block hover:text-gray-500 focus:outline-none">
            Configuración
        </Tab>
    </TabList>

            <TabPanel>
                <h2 className="text-4xl	p-7 font-light	"><span className="font-bold">Lunes</span> 21 Abril</h2>

                <div className="mt-7 ml-8 flex overflow-x-scroll hide-scroll-bar">
                    
                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Radi</p>
                        <p className="font-extralight w-52">9:00 am - 10:00 am</p>
                        <p>Cita</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Firulais</p>
                        <p className="font-extralight w-52 ">10:00 am - 11:00 am</p>
                        <p>Cita</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                    </div>
                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                    </div>

                    <div className=" px-12 w-96 h-36 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                    </div>

                </div>



                <h2 className="text-4xl	p-7 font-light	"><span className="font-bold">Martes</span> 22 Abril</h2>

                <div className="mt-7 ml-8 flex overflow-x-scroll hide-scroll-bar">
                    
                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Radi</p>
                        <p className="font-extralight w-52">9:00 am - 10:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Firulais</p>
                        <p className="font-extralight w-52 ">10:00 am - 11:00 am</p>
                        <p>2da Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>
                    </div>
                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>

                    <div className=" px-12 w-96 h-36 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>
                </div>

                <h2 className="text-4xl	p-7 font-light	"><span className="font-bold">Miercoles</span> 23 Abril</h2>

                <div className="mt-7 ml-8 flex overflow-x-scroll hide-scroll-bar">
                    

                   

                    <div className="my-24 px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">No tienes Citas</p>
                       
                    </div>
                </div>


                <h2 className="text-4xl	p-7 font-light	"><span className="font-bold">Jueves</span> 24 Abril</h2>

                        <div className="mt-7 ml-8 flex overflow-x-scroll hide-scroll-bar">
                            

                        

                        <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Radi</p>
                        <p className="font-extralight w-52">9:00 am - 10:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Firulais</p>
                        <p className="font-extralight w-52 ">10:00 am - 11:00 am</p>
                        <p>2da Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>
                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>
                    </div>
                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>

                    <div className=" px-12 w-96 h-36 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>

                    <div className=" px-12 w-96 mx-3  w-96">
                        <p className=" text-3xl">Solovino</p>
                        <p className="font-extralight w-52 ">2:00 pm - 12:00 am</p>
                        <p>Cita</p>
                        <p className="text-purple-800 font-bold">Ver detalle</p>

                    </div>
                        </div>
            </TabPanel>
            
            <TabPanel>
            <h2 className="text-4xl	p-7 font-light	"><span className="font-bold">Servicios</span></h2>
            <div className="mt-7 ml-8 flex overflow-x-scroll hide-scroll-bar">

            <div className=" px-12 w-96 mx-3  w-96">
                <p className=" text-3xl">Consulta</p>
                <p className="font-extralight w-52 ">1 Hora.</p>
                <p>$ 125 MXN</p>
                <p className="text-purple-800 font-bold">Editar</p>
            </div>

            <div className=" px-12 w-96 mx-3  w-96">
                <p className=" text-3xl">Estetica</p>
                <p className="font-extralight w-52 ">1 Hora.</p>
                <p>$ 225 MXN</p>
                <p className="text-purple-800 font-bold">Editar</p>
            </div>


            <div className=" px-12 w-96 mx-3  w-96">
                <p className=" text-3xl">Spa</p>
                <p className="font-extralight w-52 ">1 Hora.</p>
                <p>$ 425 MXN</p>
                <p className="text-purple-800 font-bold">Editar</p>
            </div>
        </div>
            <h2 className="text-4xl	p-7 font-light	"><span className="font-bold">Productos</span></h2>

            <div className="mt-7 ml-8 flex overflow-x-scroll hide-scroll-bar">

                <div className=" px-12 w-96 mx-3  w-96">
                    <p className=" text-3xl">Collar </p>
                    <p>$ 95 MXN</p>
                    <p className="text-purple-800 font-bold">Editar</p>
                </div>

                <div className=" px-12 w-96 mx-3  w-96">
                    <p className=" text-3xl">Pechera</p>
                    {/* <p className="font-extralight w-52 ">1 Hora.</p> */}
                    <p>$ 145 MXN</p>
                    <p className="text-purple-800 font-bold">Editar</p>
                </div>


                <div className=" px-12 w-96 mx-3  w-96">
                    <p className=" text-3xl">Juguete balon</p>
                    {/* <p className="font-extralight w-52 ">1 Hora.</p> */}
                    <p>$ 155 MXN</p>
                    <p className="text-purple-800 font-bold">Editar</p>
                </div>
                </div>
            </TabPanel>
        
</Tabs>

       
      </>
        
)
}

export default dashboard