import "./Thread.css";
import { threadData } from "./data/threadData";

let threadName = "";
let hex = "";

export default function Thread(props) {
  threadData.forEach((thread) => {
    if (thread.number === props.threadNumber) {
      threadName = thread.name;
      hex = thread.hex;
    }
  });

  return (
    <div className="Thread">
      <div className="darker-container">
        <p>{props.threadNumber}</p>
      </div>

      <div className="lighter-container">
        <p>{threadName}</p>
        <div
          style={{
            backgroundColor: hex,
          }}
          className="colour"
        ></div>
      </div>

      <div className="darker-container">
        <button className="blue-square">-</button>
        <input
          type="text"
          value={props.amount}
          className="blue-square thread-input"
        />
        <button className="blue-square">+</button>
      </div>
    </div>
  );
}
