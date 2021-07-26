import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SearchPatterns from "./SearchPatterns";
import AddPattern from "./AddPattern";
import MyThreads from "./MyThreads";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header className="link-directory">
          <Link id="home" to="/" className="link">
            Stitch Pick
          </Link>
          <Link id="about" to="/about" className="link">
            About
          </Link>
          <Link id="search-patterns" to="/search-patterns" className="link">
            Search Patterns
          </Link>
          <Link id="add-pattern" to="/add-pattern" className="link">
            Add Pattern
          </Link>
          <Link id="my-threads" to="/my-threads" className="link">
            My Threads
          </Link>
        </header>

        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/search-patterns">
              <SearchPatterns />
            </Route>
            <Route path="/add-pattern">
              <AddPattern />
            </Route>
            <Route path="/my-threads">
              <MyThreads />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
