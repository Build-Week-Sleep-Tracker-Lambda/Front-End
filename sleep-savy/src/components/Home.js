import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SleepCard from "./SleepCard";

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
  const [totalTime, setTotalTime] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("user");
    axiosWithAuth()
      .get(`https://sleepsavy.herokuapp.com/api/sleep/${id}/user`)
      .then(res => {
        // console.log("res", res.data);
        setEntries(res.data);

        const parseNum = res.data.map(n => {
          // Bedtime
          const bedHoursArr = [];
          const bedMinArr = [];

          // Waketime
          const wakeHoursArr = [];
          const wakeMinArr = [];

          // Split bedtime.
          const bedTimeArr = n.bedTime.split(":");
          bedHoursArr.push(parseInt(bedTimeArr[0]));
          bedMinArr.push(parseInt(bedTimeArr[1]));

          // Split wake time.
          const wakeTimeArr = n.wakeTime.split(":");
          wakeHoursArr.push(parseInt(wakeTimeArr[0]));
          wakeMinArr.push(parseInt(wakeTimeArr[1]));

          const len = bedHoursArr.length;

          for (let i = 0; i < len; i++) {
            const bedTimeMinutes = bedHoursArr[i] * 60;
            const wakeTimeMinutes = wakeHoursArr[i] * 60;
            let totalMinutes = wakeTimeMinutes - bedTimeMinutes;

            const minuteCalc = wakeMinArr[i] - bedMinArr[i];

            let minutes;
            if (minuteCalc < 0) {
              minutes = minuteCalc + 60;
              totalMinutes -= 60;
            } else minutes = minuteCalc;

            const hoursInBed =
              totalMinutes < 0 ? totalMinutes / 60 + 24 : totalMinutes / 60;

            return `${hoursInBed}:${minutes < 10 ? 0 : ""}${minutes}`;
          }
        });
        console.log(parseNum);
        setTotalTime(parseNum);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <h1>Sleep Log</h1>
        <Link to="/add">
          <AddButton>Add Sleep Entry</AddButton>
        </Link>
        <Log>
          {entries.map((entry, i) => (
            <SleepCard
              setEntries={setEntries}
              entry={entry}
              entries={entries}
              totalTime={totalTime[i]}
            />
          ))}
        </Log>
      </div>
    </div>
  );
}

export default Home;
