// TypeScript type definitions for the addon

export interface StremioMeta {
  id: string;
  type: 'movie' | 'series';
  name: string;
  poster?: string;
  background?: string;
  description?: string;
  releaseInfo?: string;
  rating?: string;
  genres?: string[];
}

export interface CatalogArgs {
  type: 'movie' | 'series';
  id: string;
  extra?: {
    search?: string;
    [key: string]: any;
  };
}

export interface CatalogResponse {
  metas: StremioMeta[];
}
