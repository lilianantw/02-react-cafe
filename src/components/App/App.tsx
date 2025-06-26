import css from "./App.module.css";
import { useState } from "react";

import CafeInfo from "../CafeInfo/CafeInfo";
import { Votes } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";

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
      <VoteOptions
        onVote={handleVotes}
        onReset={resetVotes}
        canReset={
          votesStats.good > 0 || votesStats.neutral > 0 || votesStats.bad > 0
        }
      />
    </div>
  );
}

export default App;
