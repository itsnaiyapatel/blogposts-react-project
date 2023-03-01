import React from 'react'
import PostCard from '../components/PostCard'
import '../assets/css/Home.css'

function Home() {

  const post = {
    id: 'id',
    title: 'title',
    postText: 'postText',
    categories: 'categories',
    postBy: {profileImage: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg', userName: 'userName'},
  }
  

  return (
    <div className='home'>
      <PostCard post={post}/>
      <PostCard post={post}/>
      <PostCard post={post}/>
      <PostCard post={post}/>
    </div>
  )
}

export default Home
