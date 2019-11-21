import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

const Card = styled.div`
  width: 30%;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 #35373b;
  margin-top: 5%;
  background-color: rgb(0, 0, 20);
  color: white;
`;

const SleepCard = ({ entry, entries, setEntries, totalTime }) => {
  console.log("totaltime", totalTime);

  const deleteEntry = id => {
    console.log("id", id);
    axiosWithAuth()
      .delete(`https://sleepsavy.herokuapp.com/api/sleep/${id}`)
      .then(res => {
        console.log("entry was deleted", res);

        let newEntries = entries.filter(entry => {
          return entry.id !== id;
        });
        setEntries(newEntries);
      })
      .catch(err => console.log("error deleting", err));
  };

  return (
    <Card id={entry.id}>
      <div className="btns">
        <button className="cards-btn" onClick={() => deleteEntry(entry.id)}>
          Delete
        </button>
        <Link to={`/edit/${entry.id}`}>
          <button className="cards-btn">Edit</button>
        </Link>
      </div>
      <h2>Bed Time : {entry.bedTime}</h2>
      <h2>Wake Time : {entry.wakeTime}</h2>
      <h2>Mood : {entry.mood}</h2>
      <h2>Total Time in Bed : {totalTime}</h2>
    </Card>
  );
};

export default SleepCard;
