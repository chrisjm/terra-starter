import { Link } from "react-router-dom";
import * as query from "../contracts/query";
import { useConnectedWallet } from "@terra-money/wallet-provider";
import { useEffect, useState } from "react";
import WalletAddress from "../components/WalletAddress";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    setLoading(true);
    const fetchScores = async () => {
      if (connectedWallet && connectedWallet.network.name === "testnet") {
        const scores = (await query.getScores(connectedWallet)).scores;
        console.log(scores);
        return scores;
      }
    };

    fetchScores().then((scores) => {
      setScores(scores);
      setLoading(false);
    });
  }, [connectedWallet]);

  const renderScores = (scores) => {
    if (!scores || scores.length < 1) {
      return <div>No scores available :(</div>;
    }

    return scores.map((score, index) => {
      return (
        <div key={index} className="score">
          <span>
            {score[0].slice(0, 5) + "..." + score[0].slice(-4)}:{" "}
            {score[1].toString().padStart(2, "0")}
          </span>
        </div>
      );
    });
  };

  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">
            <h1>🍻 Prost the Most 🍻</h1>
            <p>Only you can prost the most and save humanity!</p>
          </div>
        </Link>
        <WalletAddress />
      </header>

      <div className="score-board-container">
        <h3>Scoreboard</h3>
        {loading ? <div>Loading...</div> : renderScores(scores)}
      </div>
    </main>
  );
};

export default Leaderboard;
