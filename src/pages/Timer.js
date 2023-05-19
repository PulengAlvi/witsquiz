import { QuizContext } from "./quiz";
import { endpoint_val } from  './home';
//import { getTimer } from './home';
import { Timevalue, setValueTime, Home} from './home';
// Use the getTimer value in your code


import React, { useState, useEffect } from 'react';

function Timer() {
  //const getTimer = Home();
  console.log(Timevalue);

  
  const [myString, setMyString] = useState("01:00");
  const [minutesStr, secsStr] = myString.split(":");
  const minutes = parseInt(minutesStr, 10);
  const seconds = parseInt(secsStr, 10);

  const [time, setTime] = useState(minutes * 60 + seconds);
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setDisplayTime("Time's up!!");
    } else {
      const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
      const seconds = (time % 60).toString().padStart(2, "0");
      setDisplayTime(`${minutes}:${seconds}`);
    }
  }, [time]);

  return <div>{displayTime}</div>;
};

export default Timer;
