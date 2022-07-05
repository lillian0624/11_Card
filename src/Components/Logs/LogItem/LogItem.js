import React from "react";
import Calender from "./Calender/Calender";
import "./LogItem.css";

const LogItem = (props) => {
  return (
    <div className="item">
     <Calender date={props.date}/>

      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
    </div>
  );
};

export default LogItem;
