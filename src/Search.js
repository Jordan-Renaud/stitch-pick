import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { threadData } from "./data/threadData";
import MiniThread from "./MiniThread";

export default function Search({ onAddThread }) {
  const [thread, setThread] = useState("");
  const history = useHistory();
  const searchResults = threadData.filter((th) => {
    if (thread.length >= 2) {
      return th.number.toLowerCase().includes(thread.trim().toLowerCase());
    }
    return false;
  });

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
        {searchResults
          .sort((a, b) => {
            const aNum = parseInt(a.number, 10);
            const bNum = parseInt(b.number, 10);

            if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
              return 0;
            }

            if (aNum < bNum) return -1;
            if (aNum > bNum) return 1;

            return 0;
          })
          .map((th) => (
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
