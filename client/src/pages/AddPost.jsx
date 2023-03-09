import React, { useContext } from 'react'
import AddEditPostCard from '../components/AddEditPostCard'
import axios from '../helper/axiosConfig'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../helper/AuthContext'


function AddPost() {

  const { auth } = useContext(AuthContext)
  
  let navigate = useNavigate();
  const addPostBtn = (data) => {
    data.UserId = auth.id;
    axios.post('/posts/addpost', data).then((res) => {
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