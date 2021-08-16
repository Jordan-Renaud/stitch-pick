import { threadData } from "../data/threadData";

export default function checkIfThreadIsValid(thread) {
  const foundThread = threadData.find((th) => th.number === thread);
  console.log(foundThread);
  return !!foundThread;
}
