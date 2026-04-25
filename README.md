# Stremio Actor Search Addon

A Stremio addon that allows users to search for actors and view all their movies and series.

## Features

- 🔍 Search for actors by name
- 🎬 View all movies featuring the actor
- 📺 View all TV series featuring the actor
- 🎨 Built with TypeScript for type safety
- 🚀 Fast and responsive
- 📱 Works with Stremio on all platforms

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API key (free from [themoviedb.org](https://www.themoviedb.org/settings/api))

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd ~/Documents/projects/stremio-plugin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Get a TMDB API key:**
   - Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
   - Sign up for a free account
   - Request an API key
   - Copy your API key

4. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your TMDB API key:
   ```env
   TMDB_API_KEY=your_actual_api_key_here
   PORT=7000
   ```

## Development

Run in development mode with hot reload:
```bash
npm run dev:watch
```

Or run without hot reload:
```bash
npm run dev
```

## Building

Build the TypeScript code to JavaScript:
```bash
npm run build
```

## Production

Run the built version:
```bash
npm start
```

## Usage

1. **Start the addon server:**
   ```bash
   npm run dev
   ```

2. **Add to Stremio:**
   - Open Stremio
   - Go to Settings > Addons
   - Click "Add repository"
   - Enter: `http://localhost:7000/manifest.json`
   - Click "Install"

3. **Use the addon:**
   - The addon will appear in your addons list
   - Search for an actor name (e.g., "Tom Hanks", "Leonardo DiCaprio")
   - Browse their movies and series

## Project Structure

```
stremio-plugin/
├── src/
│   ├── index.ts          # Main addon server
│   ├── tmdb.ts           # TMDB API client
│   └── types.ts          # TypeScript definitions
├── dist/                 # Compiled JavaScript (generated)
├── manifest.json         # Stremio addon manifest
├── package.json          # Node.js dependencies
├── tsconfig.json         # TypeScript configuration
├── .env.example          # Environment variables template
├── .env                  # Your environment variables (create this)
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## API Endpoints

- `GET /manifest.json` - Addon manifest
- `GET /catalog/movie/actor_search/search=:query` - Search movies by actor
- `GET /catalog/series/actor_search/search=:query` - Search series by actor

## How It Works

1. User searches for an actor name in Stremio
2. Addon receives the search query
3. Addon searches TMDB for the person
4. Addon fetches all credits for that person
5. Results are filtered by type (movie/series)
6. Formatted results are returned to Stremio

## Customization

### Change the port:
Edit `.env`:
```env
PORT=8080
```

### Change addon name/description:
Edit `manifest.json` and `src/index.ts`

### Add more features:
- Add genre filtering
- Add year filtering
- Add sorting options
- Add more metadata

## Troubleshooting

**Addon not appearing in Stremio:**
- Make sure the server is running
- Check that the URL is correct: `http://localhost:7000/manifest.json`
- Try accessing the manifest URL in your browser

**No search results:**
- Verify your TMDB API key is correct
- Check the console for error messages
- Try a different actor name

**Build errors:**
- Make sure all dependencies are installed: `npm install`
- Check that Node.js version is 16 or higher

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

MIT License - feel free to use this project for any purpose.

## Credits

- Uses [TMDB API](https://www.themoviedb.org/) for movie/series data
- Built with [Stremio Addon SDK](https://github.com/Stremio/stremio-addon-sdk)
