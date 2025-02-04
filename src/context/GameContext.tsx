import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

interface State {
  selectedColor: string;
  status: string;
  targetColorNumber: number;
  score: number;
  showMessage: boolean;
}
interface Value extends State {
  dispatch: Dispatch<{
    type: string;
    payload?: string | boolean;
  }>;
}

const initialState: State = {
  selectedColor: "",
  targetColorNumber: Math.floor(Math.random() * 6),
  status: "empty",
  score: 0,
  showMessage: false,
};
const GameContext = createContext<Value>({
  ...initialState,
  dispatch: () => {},
});
function reducer(
  state: State,
  action: { type: string; payload?: string | boolean }
): State {
  switch (action.type) {
    case "selectColor":
      return { ...state, selectedColor: action.payload as string };
    case "correct":
      return {
        ...state,
        status: "correct",
        score: state.score + 1,
      };
    case "inCorrect":
      return { ...state, status: "wrong", score: state.score };
    case "showMessage":
      return { ...state, showMessage: action.payload as boolean };
    case "refreshTargetNumber":
      return {
        ...state,
        status: "empty",
        targetColorNumber: Math.floor(Math.random() * 6),
        selectedColor: "",
      };
    case "setStatus":
      return { ...state, status: "empty" };
    case "newGame":
      return { ...initialState };
    default:
      return { ...state };
  }
}
export default function GameProvider({ children }: { children: ReactNode }) {
  const [
    { selectedColor, status, score, showMessage, targetColorNumber },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider
      value={{
        dispatch,
        showMessage,
        targetColorNumber,
        status,
        selectedColor,
        score,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useColor() {
  const context = useContext(GameContext);
  if (context === undefined) console.log("Wrong context!");
  return context;
}
