import React from "react";
import * as S from "./styles";
import Logo from "../../shared/Logo";

const Header: React.FC = () => (
  <S.Container>
    <S.Content>
      <Logo />
      <S.Title>
        <span>Detailed</span>
        <span>Movies</span>
      </S.Title>
    </S.Content>
  </S.Container>
);

export default Header;
