import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai";

import UserAvatarContainer from "./UserAvatarContainer";
import "../assets/css/PostCard.css";
import axios from "../helper/axiosConfig";
import {AuthContext} from "../helper/AuthContext";

function LikeSection({post}) {
  const {auth} = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState(false);
  const [likesArray, setLikesArray] = useState([]);

  useEffect(() => {
    setLikesArray(post.Likes);
    post?.Likes?.map((likeObj) => {
      if (likeObj.UserId == auth.id) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    });
  }, []);

  const likeBtn = (postId) => {
    axios.post("/likes", {postId: postId}).then((res) => {
      if (res.data.isLiked) {
        setIsLiked(true);
        return setLikesArray([...likesArray, 0]);
      } else {
        setIsLiked(false);
        const tempArray = likesArray;
        tempArray.pop();
        return setLikesArray(tempArray);
      }
    });
  };

  return (
    <div className="like-section">
      <div className="like-btn" onClick={() => likeBtn(post.id)}>
        {isLiked ? <AiOutlineDislike size={40} /> : <AiOutlineLike size={40} />}
      </div>
      <div className="like-count">{likesArray.length}</div>
    </div>
  );
}

function PostCard({post}) {
  return (
    <div className="post-card">
      <div className="top">
        <h3 className="title">{post.title} </h3>
        <h5 className="categories">#{post.categories}</h5>
      </div>

      <Link to={`/singlePost/${post.id}`} className="postText middle">
        <p>{post.postText}</p>
      </Link>

      <div className="bottom">
        {post?.User?.profileImage && (
          <UserAvatarContainer
            profileImage={`http://localhost:3001/${post.User.profileImage}`}
            userName={post.User.userName}
          />
        )}
        <LikeSection post={post} />
      </div>
    </div>
  );
}

export default PostCard;
