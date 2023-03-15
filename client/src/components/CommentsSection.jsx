import React, {useContext, useEffect, useState} from "react";
import {Formik, Field, ErrorMessage, Form} from "formik";
import * as yup from "yup";

import {AuthContext} from "../helper/AuthContext";
import axios from "../helper/axiosConfig";

function CommentsSection({postId}) {
  const [commentList, setCommentList] = useState([]);

  const validationSchema = yup.object().shape({
    commentBody: yup.string().required("Required!"),
  });

  const {auth} = useContext(AuthContext);

  useEffect(() => {
    axios.get(`/comments/${postId}`).then((res) => {
      setCommentList(res.data);
    });
  }, [commentList.length]);

  const commentBtn = (data, {resetForm}) => {
    data.UserId = auth.id;
    data.PostId = postId;
    axios.post("/comments", data).then((res) => {
      setCommentList([...commentList, {...data, userName: auth.userName}]);
      resetForm();
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
  return (
    <div className="comments-section right">
      <Formik
        initialValues={{commentBody: ""}}
        validationSchema={validationSchema}
        onSubmit={commentBtn}
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
            <button type="submit">Comment</button>
          </Form>
        )}
      </Formik>
      {commentList.length !== 0 && (
        <div className="comments-list">
          {commentList.map((cmtObj) => {
            return (
              <div className="comment" key={cmtObj.id*1000}>
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
      )}
    </div>
  );
}

export default CommentsSection;
