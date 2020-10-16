import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InputSearch from "../../components/InputSearch";
import GlobalContext from "../../contexts/global";

import * as S from "./styles";

const MoviesList: React.FC = () => {
  const { movies } = useContext(GlobalContext);

  return (
    <>
      <InputSearch />
      <S.ListContainer>
        {movies?.map((movie) => (
          <Link to={`movie/${movie.imdbID}`}>
            <img alt={movie.Title} src={movie.Poster} />
            <div>
              <strong>{movie.Title}</strong>
            </div>
          </Link>
        ))}
      </S.ListContainer>
    </>
  );
};

export default MoviesList;
