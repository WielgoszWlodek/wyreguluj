import React, {useContext, useState, useEffect } from 'react'
import { Search, Input, Message, Pagination } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Homes from './Homes';
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import "./home.css";









function Homeclone() {

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
  
const [data1, setData1] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [apiUrl, setApiUrl] = useState('/posts/?user='+user._id+'&limit=4');
console.log(user._id)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(apiUrl);
      setLoadnig(false);
      setPost(res.data);
         console.log(res) 
    };
    getPost();
  }, [apiUrl]);




 
  
  useEffect(() => {
  	axios.get(apiUrl).then(response => {
      setData1(response.data.results);
    });
  }, [apiUrl]);

 const onChange = (e, pageInfo) => {
  	setActivePage(pageInfo.activePage);
    setApiUrl('/posts/?user='+user._id +'&skip='+pageInfo.activePage.toString()+'&limit=4');
  };
console.log(data1)

//http://localhost:5000/api/posts/?user=63de58aeedaf8df67b993be8&skip=4

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+ search);
      setPost1(res.data);
      console.log(res)
    };
    fetchPosts();
  }, [search]);



console.log(post.reverse());





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

        	<Pagination 
          
      activePage={activePage}
      onPageChange={onChange}
      totalPages={10}
      ellipsisItem={null}
      boundaryRange={0}
      defaultActivePage={1}
      
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      
    />
      <section className='followers'>
      <div className='container'>
          {searchInput.length > 1 ? (  filteredResults.slice(0).reverse().map((follower) => {
            return <Homes key={follower._id } {...follower} />
          })) :( post.slice(0).reverse().map((follower) => {
            return <Homes key={follower._id } {...follower} />
          })) }

      </div>
  
      
    
      </section>
      </>
)}
    </main>
  )
}

export default Homeclone







