import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { Link} from 'react-router-dom';

import Pagination from './Pagination';

export const Adoptions = () => {

    const [ posts, setPosts] = useState([]);
    const [ loading,setLoading] = useState(false);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ postsPerPage, setPostsPerPage ] = useState(200);
  
    useEffect( () => {
     
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:8080/pets');
        setPosts(res.data);
        setLoading(false);
      }
  
      fetchPosts();
  
    },[]);
  
    console.log(posts);
  
  
    const indexOfLastPost  = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts     = posts.slice(indexOfFirstPost,indexOfLastPost);
  
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
return(

    <section className="Adoptions">

      <div className="bg-indigo-900 text-center py-4 lg:px-4">
      <Link to="/crear">
        <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Nuevo</span>
          <span className="font-semibold mr-2 text-left flex-auto">Descubre como funciona la plataforma.</span>
          <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </div>
      </Link>
      </div>
        <div className="grid md:grid-cols-4 md:gap-4 m-4">

            <Cards  className="grid md:grid-cols-4 md:gap-4" posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />

        </div>
    </section>
)

}

export default Adoptions