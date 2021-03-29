import React,{useState} from 'react'

export const Pagination = ({ postsPerPage,totalPosts,paginate }) => {
    
    const pageNumbers = [];
    const [indice,setIndice] = useState(1);

    for(let i = 1;i <= Math.ceil(totalPosts / postsPerPage ); i++ )
    {
        pageNumbers.push(i);
    }
    
    const disminuir = () => {

      if(indice <= 1){
        return;
      }
      paginate(indice-1);
      setIndice(indice-1);
    }

    const aumentar = () => {
     if(indice >= Math.ceil(totalPosts / postsPerPage ) ){
      return;
     }
    
     paginate(indice+1);
     setIndice(indice+1);


    }


    return (
      <div className=" p-5">
        
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
       
      </nav>

      <div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700">
        <div  onClick={ disminuir }  class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
            <div class="w-12 h-12  flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-purple-600">{indice}</div>
        </div>
        <div   onClick={ aumentar } class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
</div>

      </div>

    )
}

export default Pagination