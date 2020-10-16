import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import Movie from "../types/Movie";
import { getOneMovie, findMoviesByTitle } from "../services/api";

interface ContextData {
  movie: Movie | null;
  setMovie: Dispatch<SetStateAction<Movie | null>>;
  movies: Movie[] | null;
  setMovies: Dispatch<SetStateAction<Movie[] | null>>;
  findMovies(title: string): Promise<void>;
  selectMovie(id: string): Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextData>({} as ContextData);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(false);

  const findMovies = useCallback(async (title: string) => {
    setLoading(true);
    const { data } = await findMoviesByTitle(title);
    setMovies(data.Search);
    setLoading(false);
  }, []);

  const selectMovie = useCallback(async (id: string) => {
    setLoading(true);
    const { data } = await getOneMovie(id);
    setMovie(data);
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   getOneMovie("tt0086190")
  //     .then(({ data }) => setMovie(data))
  //     .finally(() => setLoading(false));
  // }, [findMovie]);

  return (
    <GlobalContext.Provider
      value={{
        movie,
        setMovie,
        movies,
        setMovies,
        findMovies,
        loading,
        setLoading,
        selectMovie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
