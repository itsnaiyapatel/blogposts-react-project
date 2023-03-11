import React, {useContext} from "react";
import PostCard from "../components/PostCard";
import "../assets/css/SinglePost.css";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../helper/axiosConfig";
import {useEffect} from "react";
import {Formik, Field, ErrorMessage, Form} from "formik";
import {useState} from "react";
import * as yup from "yup";
import {AuthContext} from "../helper/AuthContext";

function SinglePost() {
  let {postId} = useParams();

  let navigate = useNavigate();

  const [post, setPost] = useState({});
  const {auth} = useContext(AuthContext);
  const [commentList, setCommentList] = useState([]);

  const validationSchema = yup.object().shape({
    commentBody: yup.string().required("Required!"),
  });

  const submitBtn = (data) => {
    data.UserId = auth.id;
    data.PostId = postId;
    axios.post("/comments", data).then((res) => {
      setCommentList([...commentList, {...data, userName: auth.userName}]);
    });
  };

  const deleteCommentBtn = (commentId) => {
    axios.delete(`/comments/${commentId}`).then((res) => {
      setCommentList(
        commentList.filter((commentObject) => {
          return commentObject.id !== commentId;
        })
      );
    });
  };

  const deletePostBtn = (postId) => {
    axios.delete(`/posts/byId/${postId}`).then((res) => {
      console.log(res.data.message);
      navigate("/");
    });
  };

  useEffect(() => {
    axios.get(`/posts/byId/${postId}`).then((res) => {
      setPost(res.data);
    });

    axios.get(`/comments/${postId}`).then((res) => {
      setCommentList(res.data);
    });
  }, [commentList.length]);

  return (
    <div className="single-post">
      <div className="left">
        <PostCard post={post} key={post.id} />

        {post.userName === auth.userName && (
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

      <div className="right">
        <Formik
          initialValues={{commentBody: ""}}
          validationSchema={validationSchema}
          onSubmit={submitBtn}
        >
          {({errors, touched}) => (
            <Form className="right-top">
              <ErrorMessage
                component="span"
                name="commentBody"
                style={{color: "red", fontSize: "0.7rem"}}
              />
              <Field
                component="textarea"
                type="text"
                name="commentBody"
                placeholder="Comment here.."
                className={
                  errors.commentBody && touched.commentBody ? "input-error" : ""
                }
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>

        <div className="comments-list">
          {commentList.map((cmtObj) => {
            return (
              <div className="comment" key={cmtObj.id}>
                <span className="comment-by">@{cmtObj.userName + " "}</span>
                {cmtObj.commentBody}

                {cmtObj.userName === auth.userName && (
                  <button
                    type="submit"
                    onClick={() => {
                      deleteCommentBtn(cmtObj.id);
                    }}
                  >
                    X
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
