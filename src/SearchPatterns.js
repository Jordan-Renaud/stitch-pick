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
  const [isValidThread, setIsValidThread] = useState(true);

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
    const foundThread = threadData.find(
      (thread) => thread.number === newThread
    );

    if (!foundThread && (newThread === "" || !newThread)) {
      setIsValidThread(true);
      return;
    } else if (!foundThread) {
      setIsValidThread(false);
      return;
    } else {
      setIsValidThread(true);
    }

    const existingThreadIndex = threads.findIndex(
      (thread) => thread.name === foundThread.number
    );

    if (existingThreadIndex === -1) {
      setThreads([...threads, { name: foundThread.number, amount: 1 }]);
    } else {
      const updatedThreads = [...threads];
      updatedThreads[existingThreadIndex] = {
        name: foundThread.number,
        amount: updatedThreads[existingThreadIndex].amount + 1,
      };

      setThreads(updatedThreads);
    }
  }, [location.key]);

  function add(thread) {
    const existingThreadIndex = threads.findIndex((th) => th.name === thread);

    const updatedThreads = [...threads];
    updatedThreads[existingThreadIndex] = {
      name: thread,
      amount: updatedThreads[existingThreadIndex].amount + 1,
    };

    setThreads(updatedThreads);
  }

  function remove(thread) {
    const existingThreadIndex = threads.findIndex((th) => th.name === thread);
    const updatedThreads = [...threads];
    const newAmount = updatedThreads[existingThreadIndex].amount - 1;

    if (newAmount > 0) {
      updatedThreads[existingThreadIndex] = {
        name: thread,
        amount: newAmount,
      };
      setThreads(updatedThreads);
    } else {
      setThreads(updatedThreads.filter((th) => th.name !== thread));
    }
  }

  return (
    <div className="SearchPatterns">
      <div className="search-container">
        <div className={`thread-error ${isValidThread ? "hidden" : "visible"}`}>
          <div className="tooltip">
            <p>Please enter a valid DMC thread</p>
          </div>
        </div>
        <Search />
      </div>
      <div className="flex-container">
        {/* change testThreads to threads to be back in normal data */}
        {threads.map((thread, index) => {
          const shouldSpace =
            index === 6 || index === 13 || index === 22 || index === 33;
          return (
            <React.Fragment key={thread.name}>
              {shouldSpace ? <div className="col-spacer"></div> : null}
              <Thread
                threadNumber={thread.name}
                amount={thread.amount}
                add={add}
                remove={remove}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
