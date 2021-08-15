import Search from "./Search";
import "./MyThreads.css";
import { threadData } from "./data/threadData";
import Thread from "./Thread.js";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import React, { useState, useEffect } from "react";

export default function MyThreads() {
  const location = useLocation();
  let newThread = queryString.parse(location.search).thread;
  const [threads, setThreads] = useState([]);
  const [isValidThread, setIsValidThread] = useState(true);

  //to add threads to screen from search
  useEffect(() => {
    handleAddThread(newThread);
  }, [location.key]);

  //to add threads to local storage when threads changes
  useEffect(() => {
    if (threads.length === 0) return;
    localStorage.setItem("threadData", JSON.stringify(threads));
  }, [threads]);

  useEffect(() => {
    const data = localStorage.getItem("threadData");
    setThreads(JSON.parse(data));
  }, []);

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

  function handleAddThread(th) {
    const foundThread = threadData.find((thread) => thread.number === th);

    if (!foundThread && (th === "" || !th)) {
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
      add(th);
    }
  }

  return (
    <div className="MyThreads">
      <div className="search-container">
        <div className={`thread-error ${isValidThread ? "hidden" : "visible"}`}>
          <div className="tooltip">
            <p>Please enter a valid DMC thread</p>
          </div>
        </div>
        <Search onAddThread={handleAddThread} />
      </div>
      <div className="flex-container">
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
