import { Link } from "react-router-dom";
import WalletAddress from "../components/WalletAddress";

const Guide = () => {
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
        <h3>How to play</h3>

        <div>
          <span className="help">
            Click as many beer mugs as you can within 15 seconds!
          </span>
        </div>
      </div>
    </main>
  );
};

export default Guide;
