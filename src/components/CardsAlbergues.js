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
            
                <Link to={`albergue/`} key={post.id}   data-aos="fade-up"  className="mb-10  sm:max-w-xs sm:w-full  mt-6 sm:flex-shrink-0  sm:px-2">
                    <div>
                        <div className="relative pb-5/6">
                            <img className="w-full object-cover rounded-lg shadow-md h-64"  src={post.photo} />
                        </div>
                            
                        <div className="relative px-2 -mt-16 ">
                            <div className="bg-white h-40 rounded-lg px-4 py-4 shadow-lg">
                               
                                <h4 className="mt-1 text-gray-900  font-semibold text-lg capitalize"> {post.name} </h4>
                                <div className="mt-1 text-left overflow-auto h-24 overflow-y-hidden"  >
                                    <span className="min-w-min text-gray-500 overflow-auto  text-left">{post.description}</span>
                                </div>
                                
                            </div>
                        </div>
                </div>
            </Link>



            ))}
        </>;
    
}

export default Posts