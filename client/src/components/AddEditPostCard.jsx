import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../assets/css/AddEditPostCard.css";
import * as yup from "yup";

function AddEditPostCard({ doesUserWantToAdd, postObj, handleSubmit }) {
  const validationSchema = yup.object().shape({
    title: yup.string().required("Required!").max(50, "Too Long!").min(5, "Too Short!"),
    postText: yup.string().required("Required!").max(500, "Too Long!").min(5, "Too Short!"),
    categories: yup
      .string()
      .required("Required!")
      .oneOf(["Programing", "Comuter Science", "Web Developing", "Other"]),
  });

  if (!doesUserWantToAdd) {
    var initialValues = {
      title: postObj.title,
      postText: postObj.postText,
      categories: postObj.categories,
    };
  } else {
    initialValues = {
      title: "",
      postText: "",
      categories: "",
    };
  }

  return (
    <div className="add-edit-post-card">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({errors, touched }) => (
          
          <Form className="add-edit-post">
            <h3>{doesUserWantToAdd ? "Add Post" : "Edit Post"}</h3>

            <label>Title: </label>
            <ErrorMessage component="span" name="title" />
            <Field type="text" name="title" className={errors.title && touched.title ? 'input-error' : ''} />

            <label>PostText: </label>
            <ErrorMessage name="postText" component="span" />
            <Field type="text" name="postText" className={errors.postText && touched.postText ? 'input-error' : ''} />

            <label>Categories: </label>
            <ErrorMessage name="categories" component="span" />
            <Field name="categories" component="select" className={errors.categories && touched.categories ? 'input-error' : ''}>
              <option value="">Select</option>
              <option>Comuter Science</option>
              <option>Programming</option>
              <option>Web Developing</option>
              <option>Other</option>
            </Field>

            <button type="submit">
              {doesUserWantToAdd ? "Add Post" : "Edit Post"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddEditPostCard;
