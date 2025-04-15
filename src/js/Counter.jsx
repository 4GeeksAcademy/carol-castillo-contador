import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import '../styles/index.css';

export default function ClockCounter() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (number) => (number < 10 ? "0" + number : "" + number);

  const formatTime = (totalSeconds) => {
    const hours = format(Math.floor(totalSeconds / 3600) % 100);
    const minutes = format(Math.floor((totalSeconds % 3600) / 60));
    const seconds = format(totalSeconds % 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  const timeString = formatTime(secondsElapsed);

  return (
    <div className="d-flex flex-column align-items-center p-4">
      <div className="d-flex gap-2 ">
        <div
          className="card text-center p-0 card-style"
          style={{ width: "3rem", height: "4rem" }}
        >
          <div className="card-body d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faClock}/>
          </div>
        </div>
        {timeString.split("").map((char, index) => (
          <div
            className="card text-center p-0 card-style"
            style={{ width: "3rem", height: "4rem" }}
            key={index}
          >
            <div className="card-body d-flex align-items-center justify-content-center">
              <h5 className="color-card">{char}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}