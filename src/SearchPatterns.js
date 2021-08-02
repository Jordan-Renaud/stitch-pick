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

  let testThreads = [
    { name: "800", amount: 1 },
    { name: "801", amount: 1 },
    { name: "803", amount: 1 },
    { name: "806", amount: 1 },
    { name: "807", amount: 1 },
    { name: "809", amount: 1 },
    { name: "813", amount: 1 },
    { name: "814", amount: 1 },
    { name: "815", amount: 1 },
    { name: "816", amount: 1 },
    { name: "817", amount: 1 },
    { name: "818", amount: 1 },
    { name: "819", amount: 1 },
    { name: "820", amount: 1 },
    { name: "800", amount: 1 },
  ];

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
      <div className="thread-error">
        <p>Please enter a valid DMC thread</p>
      </div>
      <div className="search-container">
        <Search />
      </div>
      <div className="flex-container">
        {threads.map((thread, index) => (
          <div className={`box${index + 1}`}>
            <Thread threadNumber={thread.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
