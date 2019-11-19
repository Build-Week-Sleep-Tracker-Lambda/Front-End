import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components"; 

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const SignUp = () =>{
    const [user, setUser] = useState({
        username:"",
        password:""
    })
    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault(
            axios.post("https://reqres.in/api/users/", user)
            .then(response => { 
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
        )
    }
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label>Username
                <Input className="input" type="text" name="username" value={user.username} onChange={handleChange} required/>
                </label>
                <label>Password
                <Input type="password" name="password" value={user.password} onChange={handleChange} required/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp

// function SignUp({ errors, touched, status }) {
//     const [users, setUsers] = useState({
//         username:"",
//         password:""
//     });
  
//     useEffect(() => {
//       status && setUsers(users => [...users, status]);
//     }, [status]);
  
//     return (
 
//       <div>
//         <Form>
//           <Field type="text" name="username" placeholder="Username" />
//           {touched.username && errors.username && <p className="errors">{errors.username}</p>}
//           <Field type="password" name="password" placeholder="Password" />
//           {touched.password && errors.password && (
//             <p className="errors">{errors.password}</p>
//           )}
//           <button type="submit">Submit</button>
//         </Form>
//       </div>

//     );
//   }
  
  
//   const FormikSignUpForm = withFormik({
//     mapPropsToValues({ name, password }) {
//       return {
//         name: name || "",
//         password: password || "",
//       };
//     },
  
//     validationSchema: Yup.object().shape({
//       name: Yup.string()
//         .min(3)
//         .required("We need a name!"),
//       password: Yup.string()
//         .min(6)
//         .required("Password, please!")
//     }),
//     handleSubmit(values, { setStatus, resetForm }) {
//       axios
//         .post("https://sleepsavy.herokuapp.com/api/auth/register", values)
//         .then(res => {
//           setStatus(res.data);
//           console.log(res.data);
//         })
//         .catch(err => console.log(err.response));
//       resetForm();
//     }
//   })(SignUp);
//   export default FormikSignUpForm;