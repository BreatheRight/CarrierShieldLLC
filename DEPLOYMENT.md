# Deployment Guide

This project is configured for seamless deployment on **Vercel**. 

## Vercel Deployment Steps

1. **Push to GitHub**: Ensure your latest changes are pushed to your remote repository.
2. **Import Project**: Log into Vercel and click "Add New..." > "Project".
3. **Select Repository**: Import your GitHub repository.
4. **Configure Settings**:
   - Framework Preset: `Vite` (Vercel usually detects this automatically).
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Click the Deploy button.

## Routing
A `vercel.json` file is included in the root directory to handle SPA (Single Page Application) routing. This ensures that direct visits to sub-routes (e.g., `/contact`) are correctly redirected to `index.html` by the Vercel edge servers instead of returning a 404 error.
