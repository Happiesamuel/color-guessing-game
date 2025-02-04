export default function Preloader() {
  return (
    <div>
      <h1 data-testid="gameTitle" className="text-zinc-200 text-3xl">
        <span className="text-[#32c3bd]">Colour </span>
        <span className="text-[#f1b038]">Guessing </span>
        <span className="text-[#a9bec9]">Game</span>
      </h1>
      <div className="loader-container mt-2">
        <div className="loader-bar"></div>
      </div>
    </div>
  );
}
