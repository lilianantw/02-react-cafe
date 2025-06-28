import css from "./App.module.css";
import { useState } from "react";

import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes } from "../../types/votes";
import type VoteOptions from "../VoteOptions/VoteOptions";
import type VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
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

  const totalVotes = votesStats.good + votesStats.neutral + votesStats.bad;
  const positiveRate =
    totalVotes === 0 ? 0 : Math.round((votesStats.good / totalVotes) * 100);
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
      {totalVotes > 0 ? (
        <VoteStats
          votes={votesStats}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
