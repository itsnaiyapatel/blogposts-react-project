import React from "react";
import PostCard from "../components/PostCard";
import "../assets/css/SinglePost.css";
import { useParams } from "react-router-dom";
import axios from "../helper/axiosConfig";
import { useEffect } from "react";

import { useState } from "react";

function SinglePost() {

  const commentList = [
    {
      id: 1,
      commentBody: "hey",
      commentBy: "Naiya Patel",
    },
    {
      id: 2,
      commentBody: "I really liked Chikki.",
      commentBy: "Sonu Patel",
    },
    { id: 3,
      commentBody: "hey",
      commentBy: "Naiya Patel",
    },
  ];

  let { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`/posts/byId/${id}`).then((res) => {
      setPost(res.data);
    });
  }, []);

  return (
    <div className="single-post">
      <div className="left">
        <PostCard post={post} key={post.id} />
        <div className="btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <div className="right">
        <div className="right-top">
          <textarea placeholder="Comment here.." required></textarea>
          <button>Submit</button>
        </div>

        <div className="comments-list">
          {commentList.map((cmtObj) => {
            return (
              <div className="comment" key={cmtObj.id}>
                <span className="comment-by">@{cmtObj.commentBy + " "}</span>
                {cmtObj.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
