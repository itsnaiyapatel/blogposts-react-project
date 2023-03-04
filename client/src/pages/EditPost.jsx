import React from 'react'
import AddEditPostCard from '../components/AddEditPostCard'

function EditPost() {
  const post = {
    id: 'id',
    title: 'title',
    postText: 'postText',
    categories: 'Programming',
    postBy: { profileImage: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg', userName: 'userName' },
  }

  return (
    <div>
      <AddEditPostCard doesUserWantToAdd={false} postObj={post} />
    </div>
  )
}

export default EditPost