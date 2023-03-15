import React, {useEffect, useState} from "react";
import UserAvatarContainer from "./UserAvatarContainer";
import "../assets/css/PostCard.css";
import {Link} from "react-router-dom";
import axios from "../helper/axiosConfig";
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai";

function LikeSection({post}) {

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (post_id) => {
    axios.post("/likes", {postId: post_id}).then((res) => {
      if (res.data.isLiked) {
        console.log("adding 1");
      } else {
        console.log("-ve one");
      }
      setIsLiked(res.data.isLiked);
    });
  };

  return (
    <div className="like-section">
      <div
        className="like-btn"
        onClick={() => handleLike(post.id)}
        style={{cursor: "pointer"}}
      >
        {isLiked ? <AiOutlineDislike size={35} /> : <AiOutlineLike size={35} />}
      </div>
      <div className="like-count">{post.Likes?.length}</div>
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
