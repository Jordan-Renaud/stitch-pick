import "./Home.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

export default function Home() {
  const history = useHistory();

  function handleAddThread(threadNumber) {
    history.push(
      `/my-threads?${queryString.stringify({
        thread: threadNumber.trim(),
      })}`
    );
  }

  return (
    <div className="Home">
      <div className="headings">
        <h1>Stitch Pick</h1>
        <div className="subheadings">
          <p>Use your own threads to pick a pattern.</p>
          <p>Currently showing DMC patterns.</p>
        </div>
        <Search onAddThread={handleAddThread} />
      </div>
    </div>
  );
}
