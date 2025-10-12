export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[]; // biasanya berisi ID genre seperti 27 untuk Horror
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // format: "YYYY-MM-DD"
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
