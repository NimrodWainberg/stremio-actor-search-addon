# 🚀 Deployment Guide

Deploy your Stremio addon to run 24/7 for free!

## 🌟 Recommended: Vercel

### Why Vercel?
- ✅ **Free tier** with generous limits
- ✅ **Automatic HTTPS** 
- ✅ **Global CDN** for fast performance
- ✅ **Always-on** for web services
- ✅ **Auto-deploy** from GitHub
- ✅ **Custom domains** supported

### Quick Deploy to Vercel

1. **Push your code to GitHub** (already done!)
   - Your repo: https://github.com/NimrodWainberg/stremio-actor-search-addon

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (use GitHub for easy integration)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **That's it!** Vercel will:
   - Build your TypeScript code
   - Deploy it globally
   - Provide a HTTPS URL
   - Set up automatic deployments

4. **Get your URL:**
   - Vercel will provide a URL like: `https://stremio-actor-search-addon.vercel.app`
   - Use this URL in Stremio: `https://your-url.vercel.app/manifest.json`

### Environment Variables (Optional)

If you want to set a default TMDB API key:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add: `TMDB_API_KEY` = `your_default_api_key`
4. Redeploy

## 🎯 Alternative: Render

### Quick Deploy to Render

1. Go to [render.com](https://render.com)
2. Sign up and create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node

5. Deploy!

**Note:** Render's free tier spins down after 15 minutes of inactivity but wakes up on request.

## 🚀 Alternative: Railway

### Quick Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Start a new project
3. Deploy from GitHub
4. Railway will detect your Node.js app
5. Add environment variables if needed
6. Deploy!

## 💻 Alternative: Replit

### Quick Deploy to Replit

1. Go to [replit.com](https://replit.com)
2. Create a new Repl
3. Choose "Node.js" template
4. Import your code or copy the files
5. Click "Run" to start
6. Use the provided URL

## 📱 Using Your Deployed Addon

Once deployed:

1. **Get your URL** (e.g., `https://your-app.vercel.app`)
2. **Add to Stremio:**
   - Open Stremio
   - Go to Settings > Addons
   - Click "Add repository"
   - Enter: `https://your-app.vercel.app/manifest.json`
   - Click "Install"

3. **Configure API Key:**
   - Visit: `https://your-app.vercel.app/`
   - Follow the setup instructions
   - Enter your TMDB API key

## 🔧 Custom Domain Setup

### Vercel Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Your addon will be accessible at your custom domain

## 📊 Monitoring

### Vercel Analytics

- Go to your Vercel project
- View analytics, logs, and performance
- Monitor uptime and usage

### Health Checks

Your addon includes a health check at `/api/config`

## 🔄 Automatic Updates

All platforms support automatic deployments when you push to GitHub:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Your addon will automatically rebuild and deploy!

## 🆚 Platform Comparison

| Feature | Vercel | Render | Railway | Replit |
|---------|--------|--------|---------|--------|
| Free Tier | ✅ Yes | ✅ Yes | ✅ Limited | ✅ Yes |
| Always-on | ✅ Yes | ⚠️ Spins down | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| Custom Domain | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| Auto Deploy | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| Global CDN | ✅ Yes | ❌ No | ❌ No | ❌ No |

## 💡 Tips

1. **Use Vercel** for best performance and reliability
2. **Set up custom domain** for professional appearance
3. **Monitor usage** to stay within free tier limits
4. **Keep API keys secure** - use environment variables
5. **Test locally** before deploying

## 🐛 Troubleshooting

**Build fails:**
- Check TypeScript compilation: `npm run build`
- Verify all dependencies are installed
- Check Vercel build logs

**Addon not working:**
- Verify the manifest URL is accessible
- Check API key configuration
- Review server logs

**Performance issues:**
- Consider upgrading to paid tier
- Optimize API calls
- Implement caching

## 📞 Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Render**: [render.com/docs](https://render.com/docs)
- **Railway**: [railway.app/docs](https://railway.app/docs)

---

**Happy deploying! 🚀**
