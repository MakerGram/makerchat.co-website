# GitHub Pages Deployment Guide

## Setup for Image Paths

To ensure images work correctly on GitHub Pages deployment, we've implemented a utility that handles image paths. The changes made include:

1. Created `src/utils/images.ts` utility to handle image paths consistently
2. Updated components to use the utility:
   - LocationPage
   - PlaceCard

## Environment Setup

For local development, create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_BASE_PATH=/makerchat.co-website
```

This ensures the image path utility works correctly both locally and in production.

## How the Fix Works

1. The `getImagePath` utility handles different types of image paths:
   - Converts `./public/uploads/photos/kochi.jpg` to `/uploads/photos/kochi.jpg`
   - Adds the correct base path prefix for GitHub Pages deployment
2. Your Next.js config is already correctly set up with:
   ```js
   basePath: "/makerchat.co-website",
   assetPrefix: "/makerchat.co-website/",
   ```

## Testing

To test GitHub Pages deployment locally:

1. Set `NEXT_PUBLIC_BASE_PATH` as mentioned above
2. Build your project: `yarn build`
3. Serve the output directory: `npx serve out`

This ensures your images will work correctly when deployed to GitHub Pages.
