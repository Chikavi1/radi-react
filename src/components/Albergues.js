import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import CardsAlbergues from './CardsAlbergues';
import { Link} from 'react-router-dom';

import Pagination from './Pagination';


export const Albergues = () => {

  const [ posts, setPosts] = useState([]);
  const [ loading,setLoading] = useState(false);
  const [ currentPage, setCurrentPage] = useState(1);
  const [ postsPerPage, setPostsPerPage ] = useState(200);

  useEffect( () => {
     
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:8080/organizaciones');
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

  <section className="Albergues">

    <div className="grid md:grid-cols-4 md:gap-4 m-4">
      <CardsAlbergues  className="grid md:grid-cols-4 md:gap-4" posts={currentPosts} loading={loading} />
    </div>
  </section>
)

  }

export default Albergues