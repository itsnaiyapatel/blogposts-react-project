import React, {useEffect, useState} from "react";
import AddEditPostCard from "../components/AddEditPostCard";
import axios from "../helper/axiosConfig";
import {useNavigate, useParams} from "react-router-dom";

function EditPost() {  

  let {postId} = useParams();
  let navigate = useNavigate();

  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`/posts/byId/${postId}`).then((res) => {
      setPost(res.data);
    });
  }, []);

  const editPostBtn = (data) => {
    axios.put(`/posts/byId/${postId}`, data).then((res) => {
      console.log(res.data.message);
      navigate(`/singlePost/${postId}`);
    });
  }

  return (
    <div>
      <AddEditPostCard doesUserWantToAdd={false} postObj={post} key={post.id} handleSubmit={editPostBtn} />
    </div>
  );
}

export default EditPost;
