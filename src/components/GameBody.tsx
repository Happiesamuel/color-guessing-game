import { useEffect, useState } from "react";
import { useColor } from "../context/GameContext";
import { generateRandomColors } from "../utils/helper";

export default function GameBody() {
  const { dispatch, selectedColor, targetColorNumber, status, showMessage } =
    useColor();
  const [shuffle, setshuffle] = useState<string[]>([
    ...generateRandomColors(6),
  ]);
  const targetColor = shuffle[targetColorNumber];

  useEffect(
    function () {
      if (selectedColor === targetColor) {
        dispatch({ type: "correct" });
        dispatch({ type: "showMessage", payload: true });
        setTimeout(() => {
          dispatch({ type: "refreshTargetNumber" });
          setshuffle(generateRandomColors(6));
        }, 1000);
      }
      if (selectedColor !== targetColor) {
        dispatch({ type: "inCorrect" });
        dispatch({ type: "showMessage", payload: true });
        setTimeout(() => {
          dispatch({ type: "showMessage", payload: false });
        }, 1000);
      }
      if (selectedColor === "") {
        dispatch({ type: "setStatus" });
        dispatch({ type: "showMessage", payload: false });
      }
      return () => {
        dispatch({ type: "setStatus" });
      };
    },
    [selectedColor, targetColor, dispatch, setshuffle, shuffle]
  );

  return (
    <div className="w-full space-y-4">
      <div
        style={{ backgroundColor: `${targetColor}` }}
        className={`w-full  h-[130px] rounded-lg`}
        data-testid="colorBox"
      />
      <div className="grid grid-cols-3 w-full gap-3">
        {shuffle.map((color) => (
          <button
            key={color}
            disabled={status === "correct"}
            onClick={() => dispatch({ type: "selectColor", payload: color })}
            data-testid="colorOption"
            style={{ backgroundColor: `${color}` }}
            className={`  h-[80px] w-full rounded-lg cursor-pointer transition-all duration-200 hover:scale-[1.08]  ${
              selectedColor === color && status === "wrong" && showMessage
                ? "border-4 border-red-500"
                : selectedColor === color && status === "correct"
                ? "border-4 border-green-500"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
