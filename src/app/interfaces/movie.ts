import { Categories } from "./categories";


export interface Movie {
    title: string;
    year: number;
    poster: string;
    category: Categories;
  }

  export interface Series extends Movie {
    seasons?: 1;
    endyear?: number;
    episodes: number;
  }