import { useColor } from "../context/GameContext";

export default function GameFooter() {
  const { status, score, dispatch, showMessage } = useColor();
  return (
    <div className="w-full mt-6 space-y-2">
      {showMessage ? (
        <p
          className={`${
            status === "empty"
              ? "hidden"
              : status === "correct"
              ? "text-green-500"
              : "text-red-500"
          } text-lg status-message`}
          data-testid="gameStatus"
        >
          {status === "empty"
            ? ""
            : status === "correct"
            ? "Correct! 🎉🎉🎉"
            : "❌ Wrong! Try again."}
        </p>
      ) : (
        ""
      )}
      <div
        data-testid="score"
        className="flex items-center justify-center gap-2 text-zinc-300 "
      >
        <p>Score : </p>
        <p>{score}</p>
      </div>
      <button
        onClick={() => dispatch({ type: "newGame" })}
        data-testid="newGameButton"
        className="bg-[#32c3bd] hover:scale-[1.06] duration-500 transition-all cursor-pointer p-1.5 text-zinc-100 rounded-md w-full"
      >
        New Game
      </button>
    </div>
  );
}
