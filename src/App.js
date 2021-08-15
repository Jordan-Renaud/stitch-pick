import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import MyThreads from "./MyThreads";
import AddPattern from "./AddPattern";
import SearchPatterns from "./SearchPatterns";
import { threadData } from "./data/threadData";

export default function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("threadData");

    if (data) {
      console.log("gettting local storage", data);
      setThreads(JSON.parse(data));
    }
  }, []);

  //to add threads to local storage when threads changes
  useEffect(() => {
    console.log("Setting local storage", threads);
    localStorage.setItem("threadData", JSON.stringify(threads));
  }, [threads]);

  function add(thread) {
    const existingThreadIndex = threads.findIndex((th) => th.number === thread);
    const updatedThreads = [...threads];
    updatedThreads[existingThreadIndex] = {
      number: thread,
      amount: updatedThreads[existingThreadIndex].amount + 1,
    };

    setThreads(updatedThreads);
  }

  function remove(thread) {
    const existingThreadIndex = threads.findIndex((th) => th.number === thread);
    const updatedThreads = [...threads];
    const newAmount = updatedThreads[existingThreadIndex].amount - 1;

    if (newAmount > 0) {
      updatedThreads[existingThreadIndex] = {
        number: thread,
        amount: newAmount,
      };
      setThreads(updatedThreads);
    } else {
      setThreads(updatedThreads.filter((th) => th.number !== thread));
    }
  }

  function handleAddThread(th) {
    const foundThread = threadData.find((thread) => thread.number === th);

    const existingThreadIndex = threads.findIndex(
      (thread) => thread.number === foundThread.number
    );

    if (existingThreadIndex === -1) {
      console.log("found::", th);
      setThreads([...threads, { number: foundThread.number, amount: 1 }]);
    } else {
      add(th);
    }
  }
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
