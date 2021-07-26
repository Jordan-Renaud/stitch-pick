import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
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

export default App;
