import "./Thread.css";
import { threadData } from "./data/threadData";

export default function Thread({ threadNumber, amount, add, remove }) {
  const { name, hex } = threadData.find(
    (thread) => thread.number === threadNumber
  );

  return (
    <div className="Thread">
      <div className="darker-container">
        <p>{threadNumber}</p>
      </div>

      <div className="lighter-container">
        <p>{name}</p>
        <div
          style={{
            backgroundColor: hex,
          }}
          className="colour"
        ></div>
      </div>

      <div className="darker-container">
        <button className="blue-square" onClick={() => remove(threadNumber)}>
          -
        </button>
        <input
          type="text"
          value={amount}
          className="blue-square thread-input"
        />
        <button className="blue-square" onClick={() => add(threadNumber)}>
          +
        </button>
      </div>
    </div>
  );
}
