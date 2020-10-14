import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Movie from "../types/Movie";
import { findMoveExample } from "../services/api";

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
  const [movie, setMovie] = useState<Movie | null>(null);

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
