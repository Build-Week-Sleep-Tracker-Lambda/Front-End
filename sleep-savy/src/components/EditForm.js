import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Emoji from "./Emoji";
import { axiosWithAuth } from "./axiosWithAuth";

const EditForm = props => {
  let { id } = useParams();
  console.log(id);
  const [entry, setEntry] = useState({
    id: id,
    bedTime: "00:00",
    wakeTime: "00:00",
    mood: 1
  });

  const update = e => {
    e.preventDefault();
    console.log("update", entry);

    axiosWithAuth()
      .put(`https://sleepsavy.herokuapp.com/api/sleep/${id}`, entry)
      .then(res => {
        console.log(res);
        props.history.push("/sleep");
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = e => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-form-container">
      <h1 className="title">Edit Sleep Entry</h1>
      <form className="customForm" onSubmit={update}>
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

export default EditForm;
