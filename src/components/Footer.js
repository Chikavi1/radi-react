import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Empezando
            </div>

            <Link to="/adoptar" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adoptar
            </Link>
            <Link to="/perdidos" href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Perros perdidos
            </Link>
          
            <Link to="/donaciones" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Donar
            </Link>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Compartir
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                 Guia
            </a>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Core Concepts
            </div>

            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Utility-First
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Responsive Design
            </a>
           
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Extracting Components
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adding New Utilities
            </a>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Aportes
            </div>

            <Link to="/albergues" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Albergues
            </Link>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Voluntario
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Patrocinadores
            </a>
            <a href="/QA" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Preguntas y Respuestas
            </a>
           
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Redes Sociales
            </div>

            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Facebook
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Instagram
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Twitter
            </a>
            <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                YouTube
            </a>
        </div>
    </div>

    <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div className="mt-2">
                © Copyright 2020-2021. Todos los Derechos Reservados.
            </div>

            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-facebook-f"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-twitter-alt"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-youtube"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-linkedin"></i>
                </a>
                <a href="#" className="w-6 mx-1">
                    <i className="uil uil-instagram"></i>
                </a>
            </div>
        </div>
    </div>
</footer>
)

export default Footer