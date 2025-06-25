import css from "./App.module.css";
import { useState } from "react";

import CafeInfo from "../CafeInfo/CafeInfo";
import { Votes } from "../../types/votes";

function App() {
  const [votesStats, setVotesStats] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVotes = (key: keyof Votes) => {
    setVotesStats((prevVotes) => ({
      ...prevVotes,
      [key]: prevVotes[key] + 1,
    }));
  };

  const resetVotes = () => {
    setVotesStats({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <button onClick={() => handleVotes("good")}>Update Good</button>
      <button onClick={() => handleVotes("neutral")}>Update Neutral</button>
      <button onClick={() => handleVotes("bad")}>Update bad</button>
      <button onClick={resetVotes}>Reset</button>
    </div>
  );
}

export default App;
