# Stremio Actor Search Addon

A user-friendly Stremio addon that allows users to search for actors and view all their movies and series with a simple web-based configuration interface.

## ✨ Features

- 🔍 **Easy Actor Search** - Search for any actor and instantly see all their movies and TV shows
- 🎨 **Beautiful Web Interface** - Modern, responsive setup page
- 🔐 **Secure API Key Storage** - Your TMDB API key is stored locally on your device
- 🚀 **Quick Setup** - Get started in under 2 minutes
- 📱 **Cross-Platform** - Works on all Stremio platforms
- 🎬 **Rich Metadata** - High-quality posters, backdrops, ratings, and descriptions

## 🚀 Quick Start

### For Users

1. **Start the addon server:**
   ```bash
   npm install
   npm run dev
   ```

2. **Open the setup page:**
   - Navigate to `http://localhost:7000/`
   - Follow the simple setup instructions
   - Enter your free TMDB API key

3. **Add to Stremio:**
   - Open Stremio
   - Go to Settings > Addons
   - Click "Add repository"
   - Enter: `http://localhost:7000/manifest.json`
   - Click "Install"

4. **Start searching:**
   - The addon will appear in your addons list
   - Search for any actor name (e.g., "Tom Hanks", "Leonardo DiCaprio")
   - Browse their complete filmography!

### Getting a TMDB API Key

1. Visit [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Sign up for a free account
3. Request an API key (it's completely free!)
4. Copy the key and paste it in the setup page

## 🛠️ For Developers

### Installation

```bash
# Clone the repository
git clone https://github.com/NimrodWainberg/stremio-actor-search-addon.git
cd stremio-actor-search-addon

# Install dependencies
npm install

# Run in development mode
npm run dev

# Or with hot reload
npm run dev:watch
```

### Building

```bash
npm run build
```

### Production

```bash
npm start
```

## 📁 Project Structure

```
stremio-plugin/
├── public/
│   ├── index.html          # Setup and configuration page
│   ├── configure.html      # Configuration redirect
│   └── stremio-client.js   # Client-side API key management
├── src/
│   ├── index.ts            # Main addon server
│   ├── tmdb.ts             # TMDB API client
│   └── types.ts            # TypeScript definitions
├── manifest.json           # Stremio addon manifest
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
TMDB_API_KEY=your_tmdb_api_key_here
PORT=7000
```

### Web Interface Configuration

Users can also configure their API key through the web interface at:
- `http://localhost:7000/` - Main setup page
- `http://localhost:7000/configure` - Configuration page

The API key is stored in the browser's localStorage for security and convenience.

## 🌐 API Endpoints

- `GET /` - Setup and configuration page
- `GET /configure` - Configuration page
- `GET /manifest.json` - Stremio addon manifest
- `GET /catalog/movie/actor_search/search=:query` - Search movies by actor
- `GET /catalog/series/actor_search/search=:query` - Search series by actor
- `GET /api/config` - Check configuration status

## 🎯 How It Works

1. **User searches for an actor** in Stremio
2. **Addon receives the search query** via Stremio's addon API
3. **Addon searches TMDB** for the person using the configured API key
4. **Addon fetches all credits** for that person
5. **Results are filtered** by type (movie/series)
6. **Formatted results** are returned to Stremio with rich metadata

## 🔒 Security

- API keys are stored locally in the user's browser (localStorage)
- No API keys are sent to third-party servers
- TMDB API calls are made directly from the addon server
- Setup page uses HTTPS when deployed

## 🎨 Customization

### Change the port:
Edit `.env`:
```env
PORT=8080
```

### Change addon branding:
Edit `manifest.json` and `public/index.html`

### Add more features:
- Genre filtering
- Year filtering  
- Sorting options
- Actor filmography statistics
- Watchlist integration

## 🐛 Troubleshooting

**Addon not appearing in Stremio:**
- Make sure the server is running
- Check that the URL is correct: `http://localhost:7000/manifest.json`
- Try accessing the manifest URL in your browser

**No search results:**
- Verify your TMDB API key is configured
- Check the console for error messages
- Try a different actor name

**Setup page not loading:**
- Ensure the addon server is running
- Check that port 7000 is not already in use
- Try accessing `http://localhost:7000/` directly

**Build errors:**
- Make sure all dependencies are installed: `npm install`
- Check that Node.js version is 16 or higher

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features  
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - feel free to use this project for any purpose.

## 🙏 Credits

- Uses [TMDB API](https://www.themoviedb.org/) for movie/series data
- Built with [Stremio Addon SDK](https://github.com/Stremio/stremio-addon-sdk)
- Powered by [Express.js](https://expressjs.com/)
- Written in [TypeScript](https://www.typescriptlang.org/)

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check existing discussions
- Review the troubleshooting section

---

**Made with ❤️ for the Stremio community**
