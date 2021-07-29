import Search from "./Search";
import "./SearchPatterns.css";
import { threadData } from "./data/threadData";
import Thread from "./Thread.js";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useState, useEffect } from "react";

export default function SearchPatterns() {
  const location = useLocation();
  let newThread = queryString.parse(location.search).thread;
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    threadData.forEach((thread) => {
      if (thread.number === newThread) {
        console.log("found");
        setThreads([...threads, { name: newThread, amount: 1 }]);
      }
    });
  }, [newThread]);

  console.log(threads);

  return (
    <div className="SearchPatterns">
      <div>
        <p>Please enter a valid DMC thread</p>
      </div>
      <div className="search-container">
        <Search />
      </div>
      <div className="flex-container">
        {threads.map((thread) => (
          <Thread threadNumber={thread.name} />
        ))}
      </div>
    </div>
  );
}
