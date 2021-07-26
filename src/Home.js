import "./Home.css";
import Search from "./Search";

export default function Home() {
  return (
    <div className="Home">
      <div className="headings">
        <h1>Stitch Pick</h1>
        <div className="subheadings">
          <p>Use your own threads to pick a pattern.</p>
          <p>Currently showing DMC patterns.</p>
        </div>
        <Search />
      </div>
    </div>
  );
}
