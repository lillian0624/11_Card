import React from "react";
import Calender from "./Calender/Calender";
import "./LogItem.css";

const LogItem = (props) => {
  return (
    <div className="item">
     <Calender/>

      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <dev className="time">{props.time}</dev>
      </div>
    </div>
  );
};

export default LogItem;
