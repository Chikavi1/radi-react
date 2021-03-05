import React from 'react'

const Banner = () => (
    <div className="py-16">
    <div className="container m-auto px-6 mt-10">
   
     <div className="lg:flex justify-between items-center">
   
          <div className="lg:w-5/12 ">
            <img data-aos="fade-right" src="https://i.ibb.co/PWqDb43/Whats-App-Image-2021-02-09-at-10-30-53-AM.jpg"
            style={{width:'500px'}} alt="" className="rounded" />
          </div>
   
         <div className="lg:w-6/12 lg:p-0 p-7">
            <h1 data-aos="zoom-out-up" className="text-4xl font-bold leading-tight mb-5 "> ¿Cuál es la función de Radi? </h1>
   
            <p className="text-xl">Creemos que la mejor forma de combatir un problema es juntarnos, la plataforma se creó con el propósito de unir fuerzas con organizaciones, voluntariados, personas como tú y yo para hacer un cambio sin fin de lucro.
            </p>
   
            <div className="py-5">
                 <a href="#" className="text-black rounded-full py-2 px-5 text-lg font-semibold  inline-block border hover:bg-white hover:text-black">¿Cómo funciona?</a>
                 <a href="/login" className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">Ingresar</a>
            </div>
   
          </div>
   
      </div>
   
    </div>
   </div>
   
)

export default Banner


 