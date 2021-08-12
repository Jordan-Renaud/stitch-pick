import Search from "./Search";
import "./SearchPatterns.css";
import { threadData } from "./data/threadData";
import Thread from "./Thread.js";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import React, { useState, useEffect } from "react";

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
    { name: "3713", amount: 1 },
    { name: "761", amount: 1 },
    { name: "760", amount: 1 },
    { name: "3712", amount: 1 },
    { name: "347", amount: 1 },
    { name: "353", amount: 1 },
    { name: "352", amount: 1 },
    { name: "351", amount: 1 },
    { name: "350", amount: 1 },
    { name: "349", amount: 1 },
    { name: "3708", amount: 1 },
    { name: "3706", amount: 1 },
    { name: "3705", amount: 1 },
    { name: "3801", amount: 1 },
    { name: "666", amount: 1 },
    { name: "321", amount: 1 },
    { name: "3713", amount: 1 },
    { name: "761", amount: 1 },
    { name: "760", amount: 1 },
    { name: "3712", amount: 1 },
    { name: "347", amount: 1 },
    { name: "353", amount: 1 },
    { name: "352", amount: 1 },
    { name: "351", amount: 1 },
    { name: "350", amount: 1 },
    { name: "349", amount: 1 },
    { name: "3708", amount: 1 },
    { name: "3706", amount: 1 },
    { name: "3705", amount: 1 },
    { name: "3801", amount: 1 },
    { name: "666", amount: 1 },
    { name: "321", amount: 1 },
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
        {/* change testThreads to threads to be back in normal data */}
        {testThreads.map((thread, index) => {
          const shouldSpace =
            index === 6 || index === 13 || index === 22 || index == 33;
          return (
            <React.Fragment key={thread.name}>
              {shouldSpace ? <div className="col-spacer"></div> : null}
              <Thread threadNumber={thread.name} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
