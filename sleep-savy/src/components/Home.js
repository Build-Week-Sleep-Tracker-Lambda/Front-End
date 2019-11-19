import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';

function Home() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('https://sleepsavy.herokuapp.com/')
            .then(res => {
                console.log(res);
                setEntries(res.data.message);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
        <h1>Home</h1>
        <div>
            <p>{entries}</p>
        </div>
        </div>
    );
};

export default Home