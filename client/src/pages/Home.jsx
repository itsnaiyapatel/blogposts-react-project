import React, { useEffect, useState } from "react";

import PostCard from "../components/PostCard";
import "../assets/css/Home.css";
import axios from "../helper/axiosConfig";

function Home() {
  const [allPosts, setAllPosts] = useState([]);


  useEffect(() => {
    axios.get("/posts").then((res) => {
      setAllPosts(res.data);
    });
  }, []);
  

  return (
    <div className="home">
      {allPosts.map((post) => {        
        return <PostCard post={post} key={post.id}/>;
      })}
    </div>
  );
}

export default Home;
