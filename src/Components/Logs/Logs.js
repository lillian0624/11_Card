// import App from ".././App"
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志容器
const Logs = () => {
  return (
    <div className="logs">
      <LogItem />
      <LogItem />
      <LogItem />
    </div>
  );
};
export default Logs;
