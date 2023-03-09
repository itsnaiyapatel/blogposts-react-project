import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import '../assets/css/LoginRegisterCard.css'

function LoginRegisterCard({isLogin, handleSubmit}) {

  let initialValues = {
    userName: '',
    password: '',
    cpassword: '',
  };

  let validationSchema = yup.object().shape({
    userName: yup.string().required('Required!').min(2, 'Too Short!').max(20, 'Too Long!'),
    password: yup.string().required('Required!'),
      // .matches(
      //   /^(?=.*[a-z])/,
      //   " Must Contain One Lowercase Character"
      // )
      // .matches(
      //   /^(?=.*[A-Z])/,
      //   "  Must Contain One Uppercase Character"
      // )
      // .matches(
      //   /^(?=.*[0-9])/,
      //   "  Must Contain One Number Character"
      // )
      // .matches(
      //   /^(?=.*[!@#\$%\^&\*])/,
      //   "  Must Contain  One Special Case Character"
      // )
      // .min(8, 'Too Short!'),
    cpassword: yup.string().required('Required!').oneOf([yup.ref('password'), null], 'Password must match!')  
  });

  if (isLogin) {
    initialValues = {};
    validationSchema = null;
  }

  return (
    <div className='login-register-card'>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>

      {({errors, touched}) => (
        <Form className='login-register-form'>

        <h3>{isLogin ? 'Login ' : 'Registration '}Form</h3>
        <label>Username: </label>
        <ErrorMessage component='span' name='userName'/>
        <Field type='text' name='userName' className={errors.userName && touched.userName ? 'input-error': '' } />
      
        <label>Password: </label>
        <ErrorMessage component='span' name='password'/>
        <Field type='password' name='password' className={errors.password && touched.password ? 'input-error': '' }/>

        {!isLogin &&
          <>
            <label>Confirm Password: </label>
            <ErrorMessage component='span' name='cpassword'/>
            <Field type='password' name='cpassword' className={errors.cpassword && touched.cpassword ? 'input-error': '' }/>
            
          </>}

        <button type='submit'>{isLogin ? 'Login' : 'Register'}</button>
      </Form>

      )}
        
      </Formik>

    </div>
  )
}

export default LoginRegisterCard