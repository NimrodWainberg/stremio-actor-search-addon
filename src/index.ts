import 'dotenv/config';
import express from 'express';
import { addonBuilder, serveHTTP } from 'stremio-addon-sdk';
import { TMDBClient } from './tmdb';

const app = express();
const PORT = process.env.PORT || 7000;
const TMDB_API_KEY = process.env.TMDB_API_KEY || '';

if (!TMDB_API_KEY) {
  console.warn('Warning: TMDB_API_KEY not set. Set it in .env file for full functionality.');
}

const tmdbClient = new TMDBClient(TMDB_API_KEY);

// Build the addon
const addon = new addonBuilder({
  id: 'stremio-actor-search-addon',
  version: '1.0.0',
  name: 'Actor Search Addon',
  description: 'Search for actors and view all their movies and series',
  logo: 'https://i.imgur.com/your-logo.png',
  resources: ['catalog'],
  types: ['movie', 'series'],
  catalogs: [
    {
      id: 'actor_search',
      name: 'Actor Movies',
      type: 'movie',
      extra: [
        {
          name: 'search',
          isRequired: true
        }
      ]
    },
    {
      id: 'actor_search',
      name: 'Actor Series',
      type: 'series',
      extra: [
        {
          name: 'search',
          isRequired: true
        }
      ]
    }
  ]
});

// Define catalog handler
addon.defineCatalogHandler(async (args) => {
  const { type, extra } = args;
  const searchQuery = extra?.search;

  if (!searchQuery) {
    return { metas: [] };
  }

  console.log(`Searching for ${type} with actor: ${searchQuery}`);

  try {
    // Search for the person
    const people = await tmdbClient.searchPerson(searchQuery);
    
    if (people.length === 0) {
      return { metas: [] };
    }

    // Get the first matching person's credits
    const person = people[0];
    const credits = await tmdbClient.getPersonCredits(person.id);

    // Filter by type and convert to Stremio format
    const metas = credits.cast
      .filter(item => {
        if (type === 'movie') {
          return 'title' in item;
        } else if (type === 'series') {
          return 'name' in item;
        }
        return false;
      })
      .map(item => {
        const isMovie = 'title' in item;
        return {
          id: `${type}/${item.id}`,
          type: type,
          name: isMovie ? item.title : item.name,
          poster: tmdbClient.getImageUrl(item.poster_path) || '',
          background: tmdbClient.getImageUrl(item.backdrop_path, 'w780') || '',
          description: item.overview || `Starring ${person.name}`,
          releaseInfo: isMovie 
            ? item.release_date?.substring(0, 4) 
            : item.first_air_date?.substring(0, 4),
          rating: item.vote_average ? (item.vote_average * 10).toFixed(0) : undefined
        };
      });

    return { metas };

  } catch (error) {
    console.error('Error searching for actor:', error);
    return { metas: [] };
  }
});

// Serve the addon
serveHTTP(addon.getInterface(), { port: PORT, cache: 3600 });

app.listen(PORT, () => {
  console.log(`Stremio Actor Search Addon running on port ${PORT}`);
  console.log(`Manifest available at: http://localhost:${PORT}/manifest.json`);
  if (!TMDB_API_KEY) {
    console.log('⚠️  Warning: TMDB_API_KEY not configured. Set it in .env file for full functionality.');
  }
});
