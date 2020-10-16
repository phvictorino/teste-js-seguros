import axios, { AxiosResponse } from "axios";
import Movie from "../types/Movie";

interface OmdbResponse {
  Search: Movie[];
}

const apikey = "fd1a42f";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey,
  },
});

export const getOneMovie = (id: string): Promise<AxiosResponse<Movie>> =>
  api.get("", { params: { i: id } });

export const findMoviesByTitle = (
  title: string
): Promise<AxiosResponse<OmdbResponse>> =>
  api.get("", { params: { s: title } });

// export const findMoveExample = (): Movie => example;
