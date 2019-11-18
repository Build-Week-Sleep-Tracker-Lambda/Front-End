import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components"; 



function SignUp({ errors, touched, status }) {
    const [users, setUsers] = useState({
        username:"",
        password:""
    });
  
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);
  
    return (
 
      <div>
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && <p className="errors">{errors.username}</p>}
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          <button type="submit">Submit</button>
        </Form>
      </div>

    );
  }
  
  
  const FormikSignUpForm = withFormik({
    mapPropsToValues({ name, password }) {
      return {
        name: name || "",
        password: password || "",
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3)
        .required("We need a name!"),
      password: Yup.string()
        .min(6)
        .required("Password, please!")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
      axios
        .post("#", values)
        .then(res => {
          setStatus(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err.response));
      resetForm();
    }
  })(SignUp);
  export default FormikSignUpForm;