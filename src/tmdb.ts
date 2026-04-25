// TMDB API integration
// This file will handle all TMDB API calls

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface TMDBTVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface TMDBPerson {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department: string;
}

export class TMDBClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async fetch<T>(endpoint: string): Promise<T> {
    const url = `${TMDB_BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${this.apiKey}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.statusText}`);
    }
    
    return response.json();
  }

  async searchPerson(query: string): Promise<TMDBPerson[]> {
    const data = await this.fetch<{ results: TMDBPerson[] }>(`/search/person?query=${encodeURIComponent(query)}`);
    return data.results;
  }

  async getPersonCredits(personId: number): Promise<{ cast: (TMDBMovie | TMDBTVShow)[] }> {
    return this.fetch(`/person/${personId}/combined_credits`);
  }

  getImageUrl(path: string | null, size: string = 'w500'): string | null {
    if (!path) return null;
    return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
  }
}
