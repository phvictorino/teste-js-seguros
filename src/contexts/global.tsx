import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Movie from "../types/Movie";

interface ContextData {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  movie: Movie | null;
  setMovie: Dispatch<SetStateAction<Movie | null>>;
}

const GlobalContext = createContext<ContextData>({} as ContextData);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState<Movie | null>(null);
  return (
    <GlobalContext.Provider value={{ text, setText, movie, setMovie }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
