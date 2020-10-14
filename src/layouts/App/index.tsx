import React from "react";
import * as S from "./styles";
import MovieDetail from "../../components/MovieDetail";
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
        <MovieDetail />
      </S.Container>
      <GlobalStyle />
    </GlobalContextProvider>
  );
};

export default Index;
