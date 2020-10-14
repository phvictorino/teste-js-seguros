import React from "react";
import { MdWarning } from "react-icons/md";

import * as S from "./styles";

const NoMovieSelected: React.FC = () => {
  return (
    <S.Container>
      <MdWarning color="orange" size={60} />
      No movie found
    </S.Container>
  );
};

export default NoMovieSelected;
