import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../assets/css/AddEditPostCard.css'
import * as yup from 'yup'


function AddEditPostCard({ doesUserWantToAdd, postObj }) {


  const validationSchema = yup.object().shape({
    title: yup.string().required('*Required!'),
    postText: yup.string().required('*Required!'),
    categories: yup.string().required('*Required!'),
  });

  if (!doesUserWantToAdd) {
    var initialValues = {
      title: postObj.title,
      postText: postObj.postText,
      categories: postObj.categories,
    };
  } else {
    
    initialValues = {
      title: '',
      postText: '',
      categories: '',
    };
  }


  return (
    <div className='add-edit-post-card'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(data) => {
        alert(JSON.stringify(data));
      }}>
        <Form className='add-edit-post'>

          <h3>{doesUserWantToAdd ? 'Add Post' : 'Edit Post'}</h3>

          <label>Title: </label> <ErrorMessage component='span' name='title' />
          <Field type='text' name='title' />


          <label>PostText: </label><ErrorMessage name='postText' component='span' />
          <Field type='text' name='postText' />


          <label>Categories: </label><ErrorMessage name='categories' component='span' />
          <Field name='categories' component='select'>
            <option value=''>Select</option>
            <option>Comuter Science</option>
            <option>Programming</option>
            <option>Web Developing</option>
            <option>Other</option>
          </Field>

          <button type='submit'>{doesUserWantToAdd ? 'Add Post' : 'Edit Post'}</button>
        </Form>
      </Formik>

    </div>
  );
}

export default AddEditPostCard
