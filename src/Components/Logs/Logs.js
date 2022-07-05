// import App from ".././App"
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志容器
const Logs = () => {
  return (
    <div className="logs">
      <LogItem date = {new Date()} desc={"learning"} time={"1h"}/>
      <LogItem date = {new Date()} desc={"working"} time={"3h"}/>
      <LogItem />
    </div>
  );
};
export default Logs;
