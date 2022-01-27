import React, { useState } from "react";

const Time = () => {
  const [currentTime, updatedTime] = useState(new Date().toLocaleTimeString());

  const setTime = () => {
    updatedTime(new Date().toLocaleTimeString());
  };

  return (
    <>
      <div className="Time">
        <h1>{currentTime}</h1>
        <button onClick={setTime} className="button">
          Get Current Time
        </button>
      </div>
    </>
  );
};

export default Time;
