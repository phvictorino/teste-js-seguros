import React from "react";
import { MdWarning } from "react-icons/md";

import * as S from "./styles";

interface PropsData {
  text?: string;
}

const EmptyComponent: React.FC<PropsData> = ({
  text = "No movie found or selected",
}) => {
  return (
    <S.Container>
      <MdWarning color="orange" size={60} />
      {text}
    </S.Container>
  );
};

export default EmptyComponent;
