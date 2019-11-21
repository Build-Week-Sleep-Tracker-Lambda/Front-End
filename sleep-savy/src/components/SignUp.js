import React, { useState, useContext } from "react";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
import styled from "styled-components";
import { axiosWithAuth } from "./axiosWithAuth";
import UserContext from "../context/UserContext";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #D9C2ED;
  width: 40%;
  margin: 0 auto;
  border-radius: 5px;
  }
`;

const Label = styled.label`
  font-size: 20px;
  padding: 30px;
  margin-top: -10px;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #431070;
  border: 2px solid #431070;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  margin: 30px;
  &:hover {
    background-color: #8b3ad6;
    color: white;
  }
`;

const SignUp = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const { userID, setUserID } = useContext(UserContext);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    axiosWithAuth()
      .post("https://sleepsavy.herokuapp.com/api/auth/register", user, {
        headers: { Authorization: "token" }
      })
      .then(response => {
        console.log(response);
        props.history.push("/");
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  return (
    <div className="container">
      <h1>Registration</h1>
      <form className="customForm" onSubmit={handleSubmit}>
        <Label>
          <label>Username</label>
        </Label>
        <Input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          required
        />
        <Label>
          <label>Password</label>
        </Label>
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;

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
