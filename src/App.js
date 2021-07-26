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
        <div>
          <header>
            <Link id="home" to="/">
              Home
            </Link>
            <Link id="about" to="/about">
              About
            </Link>
            <Link id="search-patterns" to="/search-patterns">
              Search Patterns
            </Link>
            <Link id="add-pattern" to="/add-pattern">
              Add Pattern
            </Link>
            <Link id="my-threads" to="/my-threads">
              My Threads
            </Link>
          </header>
        </div>

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
