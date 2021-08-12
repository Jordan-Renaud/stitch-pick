import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

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
    history.push(
      `/search-patterns?${queryString.stringify({
        thread: thread.trim(),
      })}`
    );
  }

  return (
    <div className="Search">
      <input
        type="search"
        id="thread-search"
        placeholder="Add threads..."
        onChange={getThread}
        onKeyPress={handleKeypress}
      />
      <button id="search-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
