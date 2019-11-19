import React, { useState } from 'react';
import axios from 'axios'


function Login(props) {
    const [user, setUser] = useState({ username: '', password: '' })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = e => {
        console.log(user)
        e.preventDefault();
        axios
            .post('https://reqres.in/api/users/', user)
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
        <div className='container'>
            <form className='customForm' onSubmit={handleSubmit}>
                <label htmlFor='username'> Username </label>
                <input
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor='password'> Password </label>
                <input
                    type='password'
                    name='password'
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