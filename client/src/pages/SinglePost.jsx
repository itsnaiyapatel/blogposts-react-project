import React, { useContext } from 'react'
import PostCard from '../components/PostCard'
import '../assets/css/SinglePost.css'

function SinglePost() {

  const post = {
    id: 'id',
    title: 'title',
    postText: 'postText',
    categories: 'categories',
    postBy: { profileImage: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg', userName: 'userName' },
  }

  const commentList = [{
    commentBody: 'hey',
    commentBy: 'Naiya Patel'
  },
  {
    commentBody: 'I really liked Chikki.',
    commentBy: 'Sonu Patel'
  },
  {
    commentBody: 'hey',
    commentBy: 'Naiya Patel'
  },
  {
    commentBody: 'I really liked Chikki.',
    commentBy: 'Sonu Patel'
  },{
    commentBody: 'hey',
    commentBy: 'Naiya Patel'
  },
  {
    commentBody: 'I really liked Chikki.',
    commentBy: 'Sonu Patel'
  }
,{
  commentBody: 'hey',
  commentBy: 'Naiya Patel'
},
{
  commentBody: 'I really liked Chikki.',
  commentBy: 'Sonu Patel'
},{
  commentBody: 'hey',
  commentBy: 'Naiya Patel'
},
{
  commentBody: 'I really liked Chikki.',
  commentBy: 'Sonu Patel'
},{
  commentBody: 'hey',
  commentBy: 'Naiya Patel'
},
{
  commentBody: 'I really liked Chikki.',
  commentBy: 'Sonu Patel'
},{
  commentBody: 'hey',
  commentBy: 'Naiya Patel'
},
{
  commentBody: 'I really liked Chikki.',
  commentBy: 'Sonu Patel'
}]


  return (
    <div className='single-post'>
      <div className="left">
        <PostCard post={post} />
        <div className="btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div className="right">

        <div className="right-top">
          <textarea placeholder="Comment here..">
          </textarea>
          <button>Submit</button>
        </div>

        <div className="comments-list">
          {commentList.map((cmtObj) => {
            return (
              <div className="comment">
                <span className='comment-by'>@{cmtObj.commentBy + ' '}</span>
              {cmtObj.commentBody}
            </div>
            )
            
          })}
          
        </div>
      </div>

    </div>
  )
}

export default SinglePost
