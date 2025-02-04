export default function GameHeader() {
  return (
    <div className="space-y-1 mb-3">
      <h1 data-testid="gameTitle" className="text-zinc-200 text-3xl">
        Colour Guessing Game
      </h1>
      <p
        className="text-zinc-400 text-lg tracking-[px]"
        data-testid="gameInstructions"
      >
        Click on each of the small boxes to guess the correct colour!
      </p>
    </div>
  );
}
