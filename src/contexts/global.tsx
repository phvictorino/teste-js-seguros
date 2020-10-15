import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Movie from "../types/Movie";
import { getOneMovie } from "../services/api";

interface ContextData {
  movie: Movie | null;
  setMovie: Dispatch<SetStateAction<Movie | null>>;
  findMovie(title: string): Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextData>({} as ContextData);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  const findMovie = useCallback(async (title: string) => {
    setLoading(true);
    const { data } = await getOneMovie(title);
    setMovie(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    getOneMovie("tt0086190")
      .then(({ data }) => setMovie(data))
      .finally(() => setLoading(false));
  }, [findMovie]);

  return (
    <GlobalContext.Provider
      value={{ movie, setMovie, findMovie, loading, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
