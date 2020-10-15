import React from "react";
import * as S from "./styles";
import MovieDetail from "../../components/MovieDetail";
import Header from "../../components/layout/Header";
import GlobalStyle from "../../styles/global";
import InputSearch from "../../components/InputSearch";
import { GlobalContextProvider } from "../../contexts/global";
import Loading from "../../components/Loading";

const Index: React.FC = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <S.Container>
        <InputSearch />
        <MovieDetail />
        <Loading />
      </S.Container>
      <GlobalStyle />
    </GlobalContextProvider>
  );
};

export default Index;
