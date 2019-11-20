import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosWithAuth';
import { Link } from  'react-router-dom';
import styled from 'styled-components';
import SleepCard from './SleepCard';
import axios from 'axios';

const Log = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const AddButton = styled.button`
    border: 1px solid grey;
`;

function Home() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('https://sleepsavy.herokuapp.com/api/sleep')
            .then(res => {
                console.log(res.data);
                setEntries(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div>
                <h1>Sleep Log</h1>
                <Link to='/add'><AddButton>Add Sleep Entry</AddButton></Link>
            <Log>
                {entries.map(entry => (
                    <SleepCard setEntries={setEntries} entry={entry} entries={entries} />
                ))}
            </Log>
            </div>
        </div>
    );
};

export default Home