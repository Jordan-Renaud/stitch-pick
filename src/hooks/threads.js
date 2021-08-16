import { threadData } from "../data/threadData";
import { useState, useEffect } from "react";

export default function useThreads() {
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
    if (!foundThread) return;

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

  return { threads, add, remove, handleAddThread };
}
