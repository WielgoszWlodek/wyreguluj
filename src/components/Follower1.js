import React from 'react'
import { Link } from 'react-router-dom'

const Follower1 = ({ ...follower }) => {

  //albo: const Follower = ({ avatar_url, html_url, login }) => {
 const {id, title, desc} = follower
  return (
    <article className='card'>
      
      <h4>{follower.title}</h4>
      <h5>{follower.desc}</h5>
      <Link to={`/dodaj/${follower._id}`} className='btn'>
        view profile
      </Link>
      
    </article>
  )
}

export default Follower1
