import React from 'react'
import AddEditPostCard from '../components/AddEditPostCard'

function AddPost() {
  return (
    <div>
      <AddEditPostCard doesUserWantToAdd={true} />
    </div>
  )
}

export default AddPost