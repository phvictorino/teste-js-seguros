import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../../contexts/global";
import NoMovieSelected from "../NoMovieSelected";

import * as S from "./styles";
import MovieRatings from "../Ratings";

const MovieDetail: React.FC = () => {
  const { movie, selectMovie, setLoading } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    selectMovie(id);
  }, [id, selectMovie]);

  return (
    <>
      {!movie?.Title ? (
        <NoMovieSelected />
      ) : (
        <>
          <S.Container>
            <h2>{movie.Title}</h2>
            <p>
              {movie.Released} <i>|</i> {movie.Genre}
            </p>
            <hr />
            <S.Content>
              <img alt={movie.Title} src={movie.Poster} />
              <div>
                <MovieRatings
                  imdbRating={movie.imdbRating}
                  Ratings={movie.Ratings}
                />
                <dl>
                  <dt>Plot</dt>
                  <dd>{movie.Plot}</dd>
                </dl>
                <dl>
                  <dt>Awards</dt>
                  <dd>{movie.Awards}</dd>
                </dl>
                <dl>
                  <dt>Actors</dt>
                  <dd>{movie.Actors}</dd>
                </dl>
                <dl>
                  <dt>Writer</dt>
                  <dd>{movie.Writer}</dd>
                </dl>
                <dl>
                  <dt>Director</dt>
                  <dd>{movie.Director}</dd>
                </dl>
              </div>
            </S.Content>
          </S.Container>
        </>
      )}
    </>
  );
};

export default MovieDetail;
