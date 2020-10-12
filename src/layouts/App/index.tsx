import React from "react";
import * as S from "./styles";
import MoviesList from "../../components/MoviesList";
import Header from "../../components/layout/Header";
import GlobalStyle from "../../styles/global";
import InputSearch from "../../components/InputSearch";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <InputSearch />
        <MoviesList />
      </S.Container>
      <GlobalStyle />
    </>
  );
};

export default Index;
