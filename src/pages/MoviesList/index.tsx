import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InputSearch from "../../components/InputSearch";
import GlobalContext from "../../contexts/global";

import * as S from "./styles";
import EmptyComponent from "../../components/EmptyComponent";

const MoviesList: React.FC = () => {
  const { movies } = useContext(GlobalContext);

  return (
    <>
      <InputSearch />
      {!movies || movies.length === 0 ? (
        <EmptyComponent text="Nothing to show" />
      ) : (
        <S.ListContainer>
          {movies?.map((movie) => (
            <Link to={`movie/${movie.imdbID}`}>
              <figure>
                <img alt={movie.Title} src={movie.Poster} />
                <figcaption>
                  <strong>{movie.Title}</strong>
                </figcaption>
              </figure>
            </Link>
          ))}
        </S.ListContainer>
      )}
    </>
  );
};

export default MoviesList;
