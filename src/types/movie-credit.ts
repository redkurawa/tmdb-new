// --- Tipe untuk entitas Cast (Pemeran) ---
export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null; // Bisa berupa string atau null
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

// --- Tipe untuk entitas Crew (Kru) ---
export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null; // Bisa berupa string atau null
  credit_id: string;
  department: string;
  job: string;
}

// --- Tipe utama untuk keseluruhan data film/kredit ---
export interface MovieCredits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
