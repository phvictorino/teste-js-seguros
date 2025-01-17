import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GlobalContext from "../../contexts/global";
import EmptyComponent from "../EmptyComponent";

import * as S from "./styles";
import MovieRatings from "../Ratings";

const MovieDetail: React.FC = () => {
  const { movie, selectMovie } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    selectMovie(id);
  }, [id, selectMovie]);

  return (
    <>
      {!movie?.Title ? (
        <EmptyComponent />
      ) : (
        <>
          <S.Container>
            <h2>{movie.Title}</h2>
            <p>
              {movie.Released} <i>|</i> {movie.Genre}
            </p>
            <hr />
            <S.Content>
              <div>
                <Link to="/">Back to list</Link>
                <img alt={movie.Title} src={movie.Poster} />
              </div>
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
