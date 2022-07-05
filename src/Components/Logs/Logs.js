// import App from ".././App"
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志容器
const Logs = () => {
  return (
    <div className="logs">
      <LogItem date = {new Date(2021,10,30,10,0)} desc={"learning"} time={"1h"}/>
      <LogItem date = {new Date(2023,5,23,5,35)} desc={"working"} time={"3h"}/>
      <LogItem />
    </div>
  );
};
export default Logs;
