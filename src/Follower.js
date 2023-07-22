import axios from 'axios'
import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from "./context/Context";
import { Icon, Button, Popup } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'
import { useHistory } from 'react-router';



const Follower = ({_id,  title, desc, createdAt, rating}) => {

const { user } = useContext(Context);
  let history = useHistory();
const handleDelete = async ()=>{
  try{
    console.log(_id)
await axios.delete("posts/"+_id, {
 data:{username: user._id}  }) 
.then(() => {
        history.push("/")
    })

window.location.replace("/");
  }
  catch(err){}
}


  
  return (
    <article className='card'>
         <Popup content='Usuń' className ='price-top' onClick={handleDelete} size='large'
         trigger={ <Icon circular name='cancel' className ='price-top' onClick={handleDelete}  />} />
  
      
   
      <h4>{title}</h4>
      <p>{desc}</p>
      {desc === 'Senny' &&
      <Icon  name='bed'></Icon> }
      <Rating icon='star'  defaultRating={rating}  maxRating={rating} disabled/>
  
      <h4>{new Date(createdAt).toDateString()}</h4>
      <Link to={`/dodaj/${_id}`} className='btn'>
        Więcej
      </Link>
      
    </article>
  )
}

export default Follower
