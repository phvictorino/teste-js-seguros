import React from "react";
import { MdStar } from "react-icons/md";
import Movie from "../../types/Movie";

import * as S from "./styles";
import colors from "../../utils/colors";

const MovieRatings: React.FC<Pick<Movie, "Ratings" | "imdbRating">> = ({
  Ratings,
  imdbRating,
}) => {
  return (
    <S.Container>
      <div>
        <strong>IMDb Rating</strong>
        <p>
          <MdStar color={colors.accent} />
          {imdbRating}
        </p>
      </div>
      {Ratings &&
        Ratings.map((rating) => (
          <div key={rating.Source}>
            <strong>{rating.Source}</strong>
            <p>
              <MdStar color={colors.accent} />
              {rating.Value}
            </p>
          </div>
        ))}
    </S.Container>
  );
};

export default MovieRatings;
