import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as S from "./styles";
import MovieDetail from "../../components/MovieDetail";
import Header from "../../components/layout/Header";
import GlobalStyle from "../../styles/global";
import { GlobalContextProvider } from "../../contexts/global";
import Loading from "../../components/Loading";
import MoviesList from "../../pages/MoviesList";

const Index: React.FC = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <S.Container>
          <Switch>
            <Route path="/" exact>
              <MoviesList />
            </Route>
            <Route path="/movie/:id" exact>
              <MovieDetail />
            </Route>
          </Switch>
        </S.Container>
      </BrowserRouter>
      <GlobalStyle />
      <Loading />
    </GlobalContextProvider>
  );
};

export default Index;
