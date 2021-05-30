import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => (
    <div className="h-screen  bg-gray-100 flex items-center">
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
      <div className="max-w-lg">
        <img className="w-3/4 mx-5" src="https://i.imgur.com/EEjbFOm.jpg"/>
    </div>
   		<div className="max-w-md">
      		<div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Lo sentimos, no pudimos encontrar la página. </p>
          <p className="mb-8 font-semibold">Pero no te preocupes, puedes encontrar muchas cosas interesantes en nuestra página de inicio.</p>
          
          <Link to="/">
          <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Ir a página de inicio</button>
          </Link>
    </div>
    
  </div>
</div>
)

export default Page404

