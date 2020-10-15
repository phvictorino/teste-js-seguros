import React, { useContext } from "react";
import { PacmanLoader } from "react-spinners";

import * as S from "./styles";
import colors from "../../utils/colors";
import GlobalContext from "../../contexts/global";

const Loading: React.FC = () => {
  const { loading } = useContext(GlobalContext);

  return (
    <>
      {loading && (
        <S.Container>
          <PacmanLoader color={colors.accent} size={40} />
        </S.Container>
      )}
    </>
  );
};

export default Loading;
