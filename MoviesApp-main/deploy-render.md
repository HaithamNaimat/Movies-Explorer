# Deploy React Vite Project on Render

## Prerequisites
- GitHub repository with your React project pushed
- Render account (free)

---

## Step 1: Push Project to GitHub

```bash
# Initialize git if not done
git init

# Create .gitignore
echo "node_modules" > .gitignore
echo "dist" >> .gitignore

# Add and commit
git add .
git commit -m "Ready for deployment"

# Create GitHub repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## Step 2: Connect GitHub to Render

1. Go to [render.com](https://render.com) and sign up
2. Click **"New +"** → **"Web Service"**
3. Click **"Connect a GitHub repo"**
4. Find and select your repository
5. Click **"Connect"**

---

## Step 3: Configure Build Settings

Fill in these fields:

| Setting | Value |
|---------|-------|
| **Name** | movies-explorer (or your preferred name) |
| **Branch** | main |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |

---

## Step 4: Deploy

1. Click **"Create Web Service"**
2. Wait for build to complete (watch the logs)
3. You'll see "Your service is live" when done

---

## Step 5: Get Your Live URL

Your site will be at:
```
https://YOUR_SERVICE_NAME.onrender.com
```

Find it in:
- Dashboard under your service name
- The deployed URL shown after deployment

---

## Troubleshooting

**Build fails?**
- Check that `npm run build` works locally first
- Verify package.json has the build script

**White page after deploy?**
- Make sure Publish Directory is `dist` (not `build`)
- Vite outputs to `dist`, not `build`

**404 errors?**
- Add a `_redirect` file to `public/` folder with:
```
/*    /index.html   200
```

---

## Quick Command Reference

Your package.json should have:
```json
{
  "scripts": {
    "build": "vite build"
  }
}
```

Vite automatically outputs to `dist` folder - no extra config needed.