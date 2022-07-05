import React from "react";
import Calender from "./Calender/Calender";
import "./LogItem.css";

const LogItem = () => {
  return (
    <div className="item">
     <Calender/>

      <div className="content">
        <h2 className="desc">learn react</h2>
        <dev className="time">45min</dev>
      </div>
    </div>
  );
};

export default LogItem;
