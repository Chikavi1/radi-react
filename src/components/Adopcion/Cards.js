import React from 'react'
import { Link } from 'react-router-dom';

export const Posts = ({posts,loading}) => {
    
    if( loading ){
        return  <div className="block" >
        <div className="">
            <img src="https://i.ibb.co/MBWZJ8Z/undraw-loading-frh4.png" width="350" />
            <h2 className="text-center  text-gray-800 font-bold"> Cargando ...</h2>
        </div>
    </div>
    }

    return <>
   
            { posts.map(post => (
            
                <Link to={`mascotas/${post.id}`} key={post.id}   data-aos="fade-up"  className="mb-10  sm:max-w-xs sm:w-full  mt-6 sm:flex-shrink-0  sm:px-2">
                    <div>
                        <div className="relative pb-5/6">
                            <img className="w-full object-cover rounded-lg shadow-md h-64"  src={`http://localhost:8080/${post.photo}`} />
                        </div>
                            
                        <div className="relative px-2 -mt-16 ">
                            <div className="bg-white h-40 rounded-lg px-4 py-4 shadow-lg">
                                <div className="flex">
                                    <span v-if="pet.estatus == 2" className="inline-block py-1 px-2 leading-none bg-green-200 text-green-800 rounded-full  font-medium uppercase tracking-wide text-xs">
                                    Adopción
                                        </span>
                                    <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                                        <span v-if="pet.color">{post.color}</span>
                                    
                                        <span v-if="pet.age"> &middot; {post.age} años </span>
                                    </div>
                                </div>
                                <h4 className="mt-1 text-gray-900  font-semibold text-lg capitalize"> {post.name} </h4>
                                <div className="mt-1 text-left "  >
                                    <span className="text-gray-500 text-left">{post.description}</span>
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-400">
                                    {post.city}
                                </div>
                            </div>
                        </div>
                </div>
            </Link>



            ))}
        </>;
    
}

export default Posts