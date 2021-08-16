import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MyThreads from "./MyThreads";
import AddPattern from "./AddPattern";
import SearchPatterns from "./SearchPatterns";
import useThreads from "./hooks/threads";

export default function App() {
  const { threads, add, remove, handleAddThread } = useThreads();

  return (
    <div className="App">
      <Router>
        <header className="link-directory">
          <Link id="home" to="/" className="link">
            Stitch Pick
          </Link>

          <Link id="my-threads" to="/my-threads" className="link">
            My Threads
          </Link>
          <Link id="search-patterns" to="/search-patterns" className="link">
            Search Patterns
          </Link>
          <Link id="add-pattern" to="/add-pattern" className="link">
            Add Pattern
          </Link>
        </header>

        <div className="content-container">
          <Switch>
            <Route path="/my-threads">
              <MyThreads
                threads={threads}
                onAddThread={handleAddThread}
                onAdd={add}
                onRemove={remove}
              />
            </Route>
            <Route path="/search-patterns">
              <SearchPatterns />
            </Route>
            <Route path="/add-pattern">
              <AddPattern />
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
