import Search from "./Search";
import "./MyThreads.css";
import Thread from "./Thread.js";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import React, { useEffect } from "react";
import { byThread } from "./sorting";

export default function MyThreads({ threads, onAddThread, onAdd, onRemove }) {
  const location = useLocation();
  const { thread: newThread } = queryString.parse(location.search);

  //to add threads to screen from search
  useEffect(() => {
    if (!newThread) return;

    onAddThread(newThread);
  }, [newThread]);

  return (
    <div className="MyThreads">
      <div className="search-container">
        <Search onAddThread={onAddThread} />
      </div>
      <div className="flex-container">
        {threads.sort(byThread).map((thread, index) => {
          const shouldSpace =
            index === 6 || index === 13 || index === 22 || index === 33;

          return (
            <React.Fragment key={thread.number}>
              {shouldSpace ? <div className="col-spacer"></div> : null}
              <Thread
                threadNumber={thread.number}
                amount={thread.amount}
                add={onAdd}
                remove={onRemove}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
