import React, { useContext } from 'react'
import UserAvatarContainer from './UserAvatarContainer'
import '../assets/css/PostCard.css'
import { Link } from 'react-router-dom'

function PostCard({ post }) { 
  return (
    <div className='post-card'>

      <div className="top">
        <h3 className='title'>{post.title} </h3>
        <h5 className='categories'>#{post.categories}</h5>
      </div>

      <Link to='/singlePost' className='postText middle'>
        <p>{post.postText}</p>
      </Link>

      <UserAvatarContainer profileImage={post.postBy.profileImage} userName={post.postBy.userName} />
    </div>
  )
}

export default PostCard
