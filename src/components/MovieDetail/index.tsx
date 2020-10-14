import React, { useContext } from "react";
import GlobalContext from "../../contexts/global";
import NoMovieSelected from "../NoMovieSelected";

import * as S from "./styles";

const MovieDetail: React.FC = () => {
  const { movie } = useContext(GlobalContext);

  return (
    <>
      {!movie ? (
        <NoMovieSelected />
      ) : (
        <S.Container>
          <h2>{movie.Title}</h2>
          <S.DetailContainer>
            <img alt={movie.Title} src={movie.Poster} />
            <p>Teste</p>
          </S.DetailContainer>
        </S.Container>
      )}
    </>
  );
};

export default MovieDetail;
