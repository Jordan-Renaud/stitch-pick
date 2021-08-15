import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { threadData } from "./data/threadData";
import { byThread } from "./sorting";
import MiniThread from "./MiniThread";

export default function Search({ onAddThread }) {
  const [thread, setThread] = useState("");
  const [isValidThread, setIsValidThread] = useState(true);
  const history = useHistory();
  const searchResults = threadData.filter((th) => {
    if (thread.length >= 2) {
      return th.number.toLowerCase().includes(thread.trim().toLowerCase());
    }
    return false;
  });

  function handleClick(event) {
    event.preventDefault();
    const foundThread = threadData.find((th) => th.number === thread);

    if (!foundThread && (thread === "" || !thread)) {
      setIsValidThread(true);
      sendThread();
      return;
    } else if (!foundThread) {
      setIsValidThread(false);
      return;
    } else {
      setIsValidThread(true);
      sendThread();
    }
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
      <div className={`thread-error ${isValidThread ? "hidden" : "visible"}`}>
        <div className="tooltip">
          <p>Please enter a valid DMC thread</p>
        </div>
      </div>
      <div className="flex">
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
      <div
        className={`search-popup ${
          searchResults.length === 0 ? "hidden" : "visible"
        }`}
      >
        {searchResults.sort(byThread).map((th) => (
          <MiniThread
            key={th.number}
            hex={th.hex}
            number={th.number}
            onClick={onAddThread}
          />
        ))}
      </div>
    </div>
  );
}
