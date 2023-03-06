import React from 'react'
import AddEditPostCard from '../components/AddEditPostCard'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddPost() {
  
  let navigate = useNavigate();
  const addPostBtn = (data) => {
    axios.post('http://localhost:3001/posts/addpost', data).then((res) => {
      alert(res.data.message);
      navigate('/');
    })
  }
  return (
    <div>
      <AddEditPostCard doesUserWantToAdd={true} handleSubmit={addPostBtn} />
    </div>
  )
}

export default AddPost