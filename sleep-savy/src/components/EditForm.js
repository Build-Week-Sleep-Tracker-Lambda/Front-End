import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Emoji from './Emoji';

const EditForm = props => {
    let { id } = useParams();
    console.log(id)
    const [entry, setEntry] = useState({
        id: id,
        bedTime: '00:00',
        wakeTime: '00:00',
        mood: 1
    });

    const update = e => {
        e.preventDefault();
        console.log('update', entry)

        axios
            .put(`https://sleepsavy.herokuapp.com/api/sleep/${entry.id}`, entry)
            .then(res => {
                console.log(res);
                props.history.push('/sleep');
            })
            .catch(err => console.log(err.response))
    }

    const handleChange = e => {
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="add-form-container">
            <h1>Edit Workout</h1>
            <form className="add-form" onSubmit={update}>
            <label className="time-label"> Bed Time:
                <input className="time-input" 
                    type="time"
                    name="bedTime"
                    value={entry.bedTime}
                    onChange={handleChange}
                />
                </label>

                <label className="time-label"> Wake Time:
                <input className="time-input" 
                    type="time"
                    name="wakeTime"
                    value={entry.wakeTime}
                    onChange={handleChange}
                />
                </label>

                <label className="time-label">Mood when you wake up:
                
                <select className="select-input" name="mood" onChange={handleChange}>
                    <option value='mood not selected'>Choose Mood</option>
                    <Emoji symbol="😡" value={1}/>
                    <Emoji symbol="😐" value={2}/>
                    <Emoji symbol="🙂" value={3}/>
                    <Emoji symbol="😍" value={4}/>
                </select>
                
                </label>
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    );
};

export default EditForm
