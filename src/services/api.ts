import axios, { AxiosResponse } from "axios";
import Movie from "../types/Movie";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const findMove = (text: string): Promise<AxiosResponse<Movie>> =>
  api.get("", { params: { t: text } });
