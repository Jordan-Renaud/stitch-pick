import Search from "./Search";
import "./SearchPatterns.css";
import Thread from "./Thread.js";

export default function SearchPatterns() {
  return (
    <div className="SearchPatterns">
      <div className="search-container">
        <Search />
      </div>
      <div className="flex-container">
        <Thread threadNumber="310" />
        <Thread threadNumber="3713" />
        <Thread threadNumber="3755" />
        <Thread threadNumber="702" />
        <Thread threadNumber="445" />
      </div>
    </div>
  );
}
