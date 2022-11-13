import { Categories } from "./categories";


export interface Movie {
    title: string;
    year: number;
    poster: string;
    category: Categories;
  }