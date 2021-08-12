import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { threadData } from "./data/threadData";
import MiniThread from "./MiniThread";

export default function Search() {
  const [thread, setThread] = useState("");
  const history = useHistory();

  function handleClick(event) {
    event.preventDefault();
    sendThread();
  }

  function getThread(e) {
    setThread(e.target.value);
  }

  function handleKeypress(e) {
    if (e.key === "Enter") {
      sendThread();
    }
  }

  function sendThread() {
    setThread("");
    history.push(
      `/my-threads?${queryString.stringify({
        thread: thread.trim(),
      })}`
    );
  }

  return (
    <div className="Search">
      <div>
        <input
          type="search"
          id="thread-search"
          placeholder="Add threads..."
          onChange={getThread}
          onKeyPress={handleKeypress}
          value={thread}
        />

        <button id="search-button" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="search-popup">
        {threadData
          .filter((th) => {
            if (thread.length >= 2) {
              return th.number
                .toLowerCase()
                .includes(thread.trim().toLowerCase());
            }
            return false;
          })
          .map((th) => (
            <MiniThread key={th.number} hex={th.hex} number={th.number} />
          ))}
      </div>
    </div>
  );
}
