import GameBoard from "../components/gameBoard/GameBoard";
import ScoreBoard from "../components/scoreBoard/ScoreBoard";

export default async function Page() {
  return (
    <div>
      <ScoreBoard />
      <GameBoard />
    </div>
  );
}
