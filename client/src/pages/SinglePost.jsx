import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import PostCard from "../components/PostCard";
import "../assets/css/SinglePost.css";
import axios from "../helper/axiosConfig";
import {AuthContext} from "../helper/AuthContext";
import CommentsSection from "../components/CommentsSection";

function SinglePost() {
  const {postId} = useParams();
  const navigate = useNavigate();

  const {auth} = useContext(AuthContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`/posts/byId/${postId}`).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, []);

  const deletePostBtn = (postId) => {
    axios.delete(`/posts/byId/${postId}`).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="single-post">
      <div className="left">
        <PostCard post={post} />
        {post?.User?.userName === auth.userName && (
          <div className="btns">
            <button
              type="submit"
              onClick={() => {
                navigate(`/editPost/${postId}`);
              }}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              type="submit"
              onClick={() => {
                deletePostBtn(post.id);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <CommentsSection postId={postId}/>
    </div>
  );
}

export default SinglePost;
