import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Movie from "../types/Movie";
import { findMoveExample } from "../services/api";

import example from "../services/example.json";

interface ContextData {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  movie: Movie | null;
  setMovie: Dispatch<SetStateAction<Movie | null>>;
  findMovie(): Promise<void>;
}

const GlobalContext = createContext<ContextData>({} as ContextData);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState<Movie | null>(example);

  const findMovie = async () => {
    const movieResponse = await findMoveExample();
    setMovie(movieResponse);
  };

  return (
    <GlobalContext.Provider
      value={{ text, setText, movie, setMovie, findMovie }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
