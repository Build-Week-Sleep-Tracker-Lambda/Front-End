import React, { useState } from 'react';
import axios from 'axios'
// import { withFormik, Form, Field } from 'formik'
// import * as Yup from "yup";


function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = e => {
        console.log(user)
        e.preventDefault();
        axios
            .post('https://sleepsavy.herokuapp.com/api/auth/login', user)
            .then(response => {
                console.log(response)
                sessionStorage.setItem('token', response.data.payload)
                props.history.push('/')
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form className='customForm' onSubmit={handleSubmit}>
                <label htmlFor='username'> Username: </label>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={user.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='password'> Password: </label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login

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


