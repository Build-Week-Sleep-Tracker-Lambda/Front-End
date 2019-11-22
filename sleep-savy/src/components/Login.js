import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
// import { withFormik, Form, Field } from 'formik'
// import * as Yup from "yup";

function Login(props) {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    console.log(user);
    e.preventDefault();
    axiosWithAuth()
      .post("https://sleepsavy.herokuapp.com/api/auth/login", user)
      .then(response => {
        console.log(response);
        let userId = response.data.id;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", userId);
        props.history.push("/sleep");
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div className="container">
      <h1 className="login-header">Login</h1>
      <form className="customForm" onSubmit={handleSubmit}>
        <label className="label" htmlFor="username">
          {" "}
          Username:{" "}
        </label>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          required
        />

        <label className="label" htmlFor="password">
          {" "}
          Password:{" "}
        </label>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

// function Login({ errors, touched }) {
//     return (
//         <div>
//             <h1>Login</h1>
//             <Form className='customForm'>
//                 {touched.username && errors.username && <p>{errors.username}</p>}
//                 <Field type="text" name="username" placeholder="Username" />
//                 {touched.password && errors.password && <p>{errors.password}</p>}
//                 <Field type="password" name="password" placeholder="Password" />
//                 <button type='submit'>Submit!</button>
//             </Form>
//         </div>
//     )
// }

// const FormikLoginForm = withFormik({
//     mapPropsToValues({ username, password }) {
//         return {
//             username: username || "",
//             password: password || ""
//         };
//     },

//     validationSchema: Yup.object().shape({
//         username: Yup.string()
//             .required(),
//         password: Yup.string()
//             .min(3)
//             .required()
//     }),

//     handleSubmit(values, { setStatus, resetForm }) {
//         console.log(values);
//         axios
//             .post('https://sleepsavy.herokuapp.com/api/auth/login', values)
//             .then(res => {
//                 setStatus(res.data);
//                 console.log(res);

//             })
//             .catch(err => console.log(err.response));
//         resetForm();
//     }
// })(Login);

// export default FormikLoginForm;
