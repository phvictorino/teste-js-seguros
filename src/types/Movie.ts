export default interface Movie {
  Title: string;
  Poster: string;
  Released: string;
  Genre: string;
  Plot: string;
  Awards: string;
  Actors: string;
  Writer: string;
  Director: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  imdbRating: string;
}
