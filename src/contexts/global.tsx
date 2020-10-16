import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Movie from "../types/Movie";
import { getOneMovie, findMoviesByTitle } from "../services/api";

interface ContextData {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  movie: Movie | null;
  setMovie: Dispatch<SetStateAction<Movie | null>>;
  movies: Movie[] | null;
  setMovies: Dispatch<SetStateAction<Movie[] | null>>;
  findMovies(filterParam?: string, pageParam?: number): Promise<void>;
  selectMovie(id: string): Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  pages: number;
  selectedPage: number;
  changePage(page: number): void;
}

const GlobalContext = createContext<ContextData>({} as ContextData);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);

  const findMovies = useCallback(
    async (filterParam?: string, pageParam?: number) => {
      setLoading(true);
      setFilter(filterParam || filter);
      const { data } = await findMoviesByTitle(
        filter,
        pageParam || selectedPage
      );
      setMovies(data.Search);
      setPages(Math.round(data.totalResults / 10));
      setLoading(false);
    },
    [filter, selectedPage]
  );

  const selectMovie = useCallback(async (id: string) => {
    setLoading(true);
    const { data } = await getOneMovie(id);
    setMovie(data);
    setLoading(false);
  }, []);

  const changePage = useCallback(
    (page: number) => {
      setSelectedPage(page);
      findMovies("", page);
    },
    [findMovies]
  );

  return (
    <GlobalContext.Provider
      value={{
        filter,
        setFilter,
        movie,
        setMovie,
        movies,
        setMovies,
        findMovies,
        loading,
        setLoading,
        selectMovie,
        pages,
        selectedPage,
        changePage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
