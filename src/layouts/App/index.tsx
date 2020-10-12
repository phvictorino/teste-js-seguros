import React from "react";
import * as S from "./styles";
import MoviesList from "../../components/MoviesList";
import Header from "../../components/layout/Header";
import GlobalStyle from "../../styles/global";
import InputSearch from "../../components/InputSearch";
import { GlobalContextProvider } from "../../contexts/global";

const Index: React.FC = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <S.Container>
        <InputSearch />
        <MoviesList />
      </S.Container>
      <GlobalStyle />
    </GlobalContextProvider>
  );
};

export default Index;
