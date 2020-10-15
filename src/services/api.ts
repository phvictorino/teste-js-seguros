import axios, { AxiosResponse } from "axios";
import Movie from "../types/Movie";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

const apikey = "fd1a42f";

export const getOneMovie = (id: string): Promise<AxiosResponse<Movie>> =>
  api.get("", { params: { i: id, apikey } });

export const findMovieByTitle = (
  title: string
): Promise<AxiosResponse<Movie[]>> =>
  api.get("", { params: { s: title, apikey } });

// export const findMoveExample = (): Movie => example;
