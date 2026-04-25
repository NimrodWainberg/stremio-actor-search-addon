# 🆓 Free Deployment Guide

Deploy your Stremio addon for FREE - no credit card required!

## 🏆 **Recommended Free Options**

### 1. **Replit** (Best Always-On Free)
- ✅ **100% Free** - No payment ever
- ✅ **Always-on** - No spin-down
- ✅ **Easy deployment** - Import from GitHub
- ✅ **HTTPS included** - Automatic SSL
- ✅ **Perfect for Stremio addons**

### 2. **Render** (Good Alternative)
- ✅ **Free tier** available
- ✅ **Auto-deploy from GitHub**
- ✅ **Automatic HTTPS**
- ⚠️ **Spins down after 15 mins** (wakes up on request)

### 3. **Glitch** (Simple & Free)
- ✅ **Completely free**
- ✅ **Always-on**
- ✅ **Easy to use**
- ✅ **Great for Node.js apps**

## 🚀 **Deploy to Replit (Recommended)**

### Step 1: Create Replit Account
1. Go to [replit.com](https://replit.com)
2. Sign up (free, no credit card)
3. Choose "Sign up with GitHub" for easy integration

### Step 2: Import Your Project
1. Click "Create Repl"
2. Choose "Import from GitHub"
3. Enter: `NimrodWainberg/stremio-actor-search-addon`
4. Click "Import"

### Step 3: Configure and Run
1. Replit will automatically detect it's a Node.js project
2. Click "Run" button (top right)
3. Wait for installation and build
4. Your addon will be running!

### Step 4: Get Your URL
1. Look at the "Webview" or "Ports" tab
2. Copy the URL (e.g., `https://stremio-actor-search-addon.yourname.replit.app`)
3. This is your public URL!

### Step 5: Use in Stremio
1. Open Stremio
2. Go to Settings > Addons
3. Click "Add repository"
4. Enter: `https://your-replit-url.replit.app/manifest.json`
5. Click "Install"

### Step 6: Configure API Key
1. Visit: `https://your-replit-url.replit.app/`
2. Follow the setup instructions
3. Enter your TMDB API key

## 🎯 **Deploy to Render (Alternative)**

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up (free)
3. Connect your GitHub account

### Step 2: Create Web Service
1. Click "New +"
2. Select "Web Service"
3. Connect your GitHub repository
4. Select: `NimrodWainberg/stremio-actor-search-addon`

### Step 3: Configure
- **Name**: `stremio-actor-search-addon`
- **Region**: Choose nearest
- **Branch**: `main`
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### Step 4: Deploy
1. Click "Create Web Service"
2. Wait for deployment (2-3 minutes)
3. Get your URL from Render dashboard

### Step 5: Use in Stremio
- Add: `https://your-app.onrender.com/manifest.json`

## 🎨 **Deploy to Glitch (Simplest)**

### Step 1: Create Glitch Account
1. Go to [glitch.com](https://glitch.com)
2. Sign up (free)

### Step 2: Create Project
1. Click "New Project"
2. Choose "glitch-hello-node" template
3. Delete template files

### Step 3: Import Your Code
1. Copy all files from your GitHub repo
2. Paste into Glitch editor
3. Or use "Import from GitHub" feature

### Step 4: Run
1. Click "Show" button
2. Your addon will be live!
3. Get your Glitch URL

## 📊 **Free Platform Comparison**

| Feature | Replit | Render | Glitch |
|---------|--------|--------|--------|
| **100% Free** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Always-On** | ✅ Yes | ⚠️ Spins down | ✅ Yes |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Custom Domain** | ❌ No | ✅ Yes | ❌ No |
| **Auto-Deploy** | ✅ Yes | ✅ Yes | ❌ No |
| **GitHub Integration** | ✅ Yes | ✅ Yes | ⚠️ Manual |
| **Setup Difficulty** | 🟢 Easy | 🟢 Easy | 🟢 Easy |

## 💡 **Pro Tips**

### For Replit:
- Use "Always On" feature in settings
- Enable "Background Worker" for better performance
- Set up environment variables in Replit secrets

### For Render:
- The free tier spins down but wakes up quickly
- First request may take 10-30 seconds to wake up
- Subsequent requests are fast

### For Glitch:
- Projects go to sleep after inactivity
- Wake up on first request
- Great for testing and personal use

## 🔧 **Environment Variables**

### Replit:
1. Go to your Replit project
2. Click "Secrets" (lock icon)
3. Add: `TMDB_API_KEY` = `your_key`
4. Redeploy

### Render:
1. Go to your Render service
2. Navigate to "Environment"
3. Add environment variables
4. Redeploy

### Glitch:
1. Click ".env" file
2. Add: `TMDB_API_KEY=your_key`
3. Save and restart

## 🚨 **Troubleshooting**

**Replit not working:**
- Check the "Console" tab for errors
- Make sure all dependencies are installed
- Verify the port is correct (7000)

**Render spinning down:**
- This is normal for free tier
- First request takes longer to wake up
- Consider upgrading for always-on

**Glitch sleeping:**
- Click "Remix" to wake it up
- Or make a request to wake it
- Projects sleep after inactivity

## 📈 **Monitoring**

### Replit:
- Check "Console" for logs
- Monitor "Network" for requests
- View "Storage" for usage

### Render:
- View logs in dashboard
- Monitor metrics
- Check deployment status

### Glitch:
- View logs in console
- Monitor project status
- Check storage usage

## 🎯 **Recommendation**

**For personal use:** Replit (easiest, always-on)
**For production:** Render (more features)
**For testing:** Glitch (simplest)

## 🌐 **Your URLs**

Once deployed, you'll have:
- **Setup page**: `https://your-platform.com/`
- **Manifest**: `https://your-platform.com/manifest.json`
- **API config**: `https://your-platform.com/api/config`

## 📞 **Support**

- **Replit**: [docs.replit.com](https://docs.replit.com)
- **Render**: [render.com/docs](https://render.com/docs)
- **Glitch**: [glitch.com/help](https://glitch.com/help)

---

**Happy free hosting! 🆓🚀**
