import { useState } from "react";
import GameBody from "./components/GameBody";
import GameFooter from "./components/GameFooter";
import GameHeader from "./components/GameHeader";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <div className="h-[100vh] bg-[#1a2b33] flex flex-col items-center justify-center w-full">
      {!loading ? (
        <div className="w-[90%] p-8 rounded-xl  shadow-2xl bg-[#1e3640] lg:w-[45%] flex items-center text-center justify-center flex-col">
          <GameHeader />
          <GameBody />
          <GameFooter />
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
