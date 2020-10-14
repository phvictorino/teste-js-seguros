import axios, { AxiosResponse } from "axios";
import Movie from "../types/Movie";
import example from "./example.json";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

// export const findMove = (text: string): Promise<AxiosResponse<Movie>> =>
//   api.get("", { params: { t: text } });

export const findMoveExample = (): Movie => example;
