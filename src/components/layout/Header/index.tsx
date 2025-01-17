import React from "react";
import * as S from "./styles";
import Logo from "../../shared/Logo";

const Header: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.LinkLogo to="/">
        <Logo />
      </S.LinkLogo>
      <S.Title>
        <span>Movies</span>
        <span>Repo</span>
      </S.Title>
    </S.Content>
  </S.Container>
);

export default Header;
