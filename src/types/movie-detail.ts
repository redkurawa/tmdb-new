// --- Tipe-tipe Pembantu (Auxiliary Types) ---

// 1. Tipe untuk objek Genre
interface Genre {
  id: number;
  name: string;
}

// 2. Tipe untuk Company dan Studio yang memproduksi
interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

// 3. Tipe untuk Negara Produksi
interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

// 4. Tipe untuk Bahasa yang Diucapkan
interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// 5. Tipe untuk Collection (Jika film ini bagian dari sebuah seri)
interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

// --- Tipe Utama (Main Type) ---

/**
 * Interface untuk data detail film lengkap
 */
export interface MovieDetail {
  adult: boolean;
  backdrop_path: string | null; // Bisa string path atau null
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[]; // Array of string codes (e.g., "US")
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string; // Biasanya dalam format 'YYYY-MM-DD'
  revenue: number;
  runtime: number | null; // Beberapa data mungkin memiliki runtime null
  spoken_languages: SpokenLanguage[];
  status: string; // e.g., "Released"
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
