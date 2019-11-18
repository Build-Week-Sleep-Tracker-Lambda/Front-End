import React, { useState } from 'react';
import axios from 'axios'


function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('https://sleepsavy.herokuapp.com/api/auth/login', user)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.payload)
                props.history.push('/')
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Username
                    <input
                        type='text'
                        name='username'
                        value={user.username}
                        onChange={handleChange}
                    />
                </label>
                <label> Password
                    <input
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <button type='submit'>Submit</button>
        </div>
    )
}

export default Login