import { IGener } from "shared/types/movie.types";

export interface IGenerEditInput extends Omit<IGener, '_id'>{}