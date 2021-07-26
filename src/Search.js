import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <input type="search" id="thread-search" placeholder="Search threads..." />
      <button id="search-button">Search</button>
    </div>
  );
}
