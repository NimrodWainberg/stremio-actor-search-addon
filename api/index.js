const express = require('express');
const { addonBuilder, serveHTTP } = require('stremio-addon-sdk');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// API endpoint
app.get('/api/config', (req, res) => {
  const apiKey = req.headers['x-tmdb-api-key'] || process.env.TMDB_API_KEY || '';
  res.json({ hasApiKey: apiKey.length > 0 });
});

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
      name: '🎬 Actor Movies',
      type: 'movie',
      extra: [{ name: 'search', isRequired: true }]
    },
    {
      id: 'actor_search',
      name: '📺 Actor Series', 
      type: 'series',
      extra: [{ name: 'search', isRequired: true }]
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
  
  // For now, return empty results (needs TMDB API integration)
  return { metas: [] };
});

// Serve the addon through all routes
app.all('*', (req, res) => {
  serveHTTP(addon.getInterface())(req, res);
});

// Export for Vercel
module.exports = app;
