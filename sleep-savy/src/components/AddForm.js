import React, { useState } from "react";
import Emoji from "./Emoji";
import { axiosWithAuth } from "./axiosWithAuth";

const AddForm = props => {
  const [entry, setEntry] = useState({
    bedTime: "00:00",
    wakeTime: "00:00",
    mood: 1
  });

  const handleChange = e => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    const id = localStorage.getItem("user");
    e.preventDefault();
    axiosWithAuth()
      .post(`https://sleepsavy.herokuapp.com/api/sleep/${id}/user`, entry)
      .then(res => {
        console.log(res.data);
        props.history.push("/sleep");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="add-form-container">
      <h1 className="title">Add Sleep Entry</h1>
      <form className="customForm" onSubmit={handleSubmit}>
        <label className="label" htmlFor="bedTime">
          Bed Time:
        </label>
        <input
          className="time-input"
          type="time"
          name="bedTime"
          value={entry.bedTime}
          onChange={handleChange}
        />

        <label className="label" htmlFor="wakeTime">
          Wake Time:
        </label>
        <input
          className="time-input"
          type="time"
          name="wakeTime"
          value={entry.wakeTime}
          onChange={handleChange}
        />

        <label className="label" htmlFor="mood">
          Mood when you wake up:
        </label>
        <select className="time-input-sel" name="mood" onChange={handleChange}>
          <option value="mood not selected">Choose Mood</option>
          <Emoji symbol="😡" value={1} />
          <Emoji symbol="😐" value={2} />
          <Emoji symbol="🙂" value={3} />
          <Emoji symbol="😍" value={4} />
        </select>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
