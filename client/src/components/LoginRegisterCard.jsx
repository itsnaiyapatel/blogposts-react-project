import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import '../assets/css/LoginRegisterCard.css'


function LoginRegisterCard({isLogin}) {


  let initialValues = {
    userName: '',
    password: '',
    cpassword: '',
  };

  let validationSchema = yup.object().shape({
    userName: yup.string().required('Required!'),
    password: yup.string().required('Required!'),
    cpassword: yup.string().required('Required!').oneOf([yup.ref('password'), null], 'Password must match!')  
  });

  if (isLogin) {
    initialValues = {};
    validationSchema = null;
  }


  return (
    <div className='login-register-card'>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(data) => alert(JSON.stringify(data))}>

        <Form className='login-register-form'>

          <h3>{isLogin ? 'Login ' : 'Registration '}Form</h3>
          <label>Username: </label>
          <Field type='text' name='userName' />
          <span><ErrorMessage className='errormsg' name='userName'/>
          </span>
          <label>Password: </label>
          <Field type='password' name='password' />
          <span><ErrorMessage name='password'/></span>

          {!isLogin &&
            <>
              <label>Confirm Password: </label>
              <Field type='password' name='cpassword' />
              <span><ErrorMessage name='cpassword'/></span>

            </>}

          <button type='submit'>{isLogin ? 'Login' : 'Register'}</button>
        </Form>
      </Formik>

    </div>
  )
}

export default LoginRegisterCard