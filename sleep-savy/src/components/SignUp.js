import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components"; 

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

function SignUp({ errors, touched, status }) {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);
  
    return (
        <Wrapper>
      <div>
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && <p className="errors">{errors.name}</p>}
          <Field type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
          <Field type="checkbox" name="terms" />
          <button type="submit">Submit</button>
        </Form>
        {users.map(user => (
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        ))}
      </div>
      </Wrapper>
    );
  }
  
  
  const FormikSignUpForm = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
      return {
        name: name || "",
        email: email || "",
        password: password || "",
        terms: terms || false
      };
    },
  
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3)
        .required("We need a name!"),
      email: Yup.string()
        .email()
        .required("We need your email!"),
      password: Yup.string()
        .min(6)
        .required("Password, please!")
    }),
    handleSubmit(values, { setStatus, resetForm }) {
      axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
          setStatus(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err.response));
      resetForm();
    }
  })(SignUp);
  export default FormikSignUpForm;