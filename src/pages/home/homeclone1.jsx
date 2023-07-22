import React, {useContext, useState, useEffect } from 'react'
import { Search, Input, Message } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Homes from './Homes';
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./home.css";








function Home() {

  const [loading, setLoadnig]= useState(true)

  const location = useLocation();
  const path = location.pathname.split("/")[2];
 
  console.log(path)

  const { user } = useContext(Context);
  


  const [title, setTitle] = useState({});
  const [desc, setDesc] = useState({});
  const [updateMode, setUpdateMode] = useState(false);

  
  const [page, setPage] = useState(0)
 

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [post, setPost] = useState([]);
  const [post1, setPost1] = useState([]);
  const { search } = useLocation();
  

console.log(user._id)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/?user="+user._id);
      setLoadnig(false);
      setPost(res.data);
         console.log(res) 
    };
    getPost();
  }, [user._id]);






  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+ search);
      setPost1(res.data);
      console.log(res)
    };
    fetchPosts();
  }, [search]);



console.log(post1._id);





  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = post.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
        }
    else{
        setFilteredResults(post)
    }
}
console.log( filteredResults)

window.addEventListener('load', () => {

  // document.querySelector('.loader-container').style.display = "none";
   document.body.style.overflow = "auto";
})

  return (


      
     
    <main>
       {loading ? (
        <div className="loader-container">
    <div className="loader"></div>
</div>
):(
      <>
      <div className='sercher'>
    
       <Input icon='search' className='szukaj'
                placeholder='Szukaj...'
                onChange={(e) => searchItems(e.target.value)}
            />
            </div>
      <div className='section-title'>                                   
        
        {/*<div className='underline'></div>*/}


      </div>

      
      <section className='followers'>
      <div className='container'>
          {searchInput.length > 1 ? (  filteredResults.slice(0).reverse().map((follower) => {
            return <Homes key={follower._id } {...follower} />
          })) :( post.slice(0).reverse().map((follower) => {
            return <Homes key={follower._id } {...follower} />
          })) }

      </div>
     {/*(post.filter(a => a.user === user).map(follower =>  {*/}
      
      
      </section>
      </>
)}
    </main>
  )
}

export default Home



