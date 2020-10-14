import React, { useContext } from "react";
import GlobalContext from "../../contexts/global";
import NoMovieSelected from "../NoMovieSelected";

import * as S from "./styles";

const MoviesList: React.FC = () => {
  const { movie } = useContext(GlobalContext);

  return (
    <S.Container>
      {!movie ? <NoMovieSelected /> : <div>Lista de filmes</div>}
    </S.Container>
  );
};

export default MoviesList;
