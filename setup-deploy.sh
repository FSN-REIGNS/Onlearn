#!/bin/bash

# setup-deploy.sh
echo "Setting up deployment for Nuxt 3 project..."

# Install required dependencies
npm install --save-dev gh-pages

# Update package.json scripts
npm pkg set scripts.generate="nuxt generate"
npm pkg set scripts.deploy="gh-pages -d .output/public"

# Create .github/workflows directory if it doesn't exist
mkdir -p .github/workflows

# Create GitHub Actions workflow file
cat > .github/workflows/deploy.yml << EOL
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Set a branch name to trigger deployment

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm ci

      - name: Generate static files
        run: npm run generate

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: .output/public
EOL

echo "Deployment setup complete. Don't forget to update your nuxt.config.ts with the correct baseURL."

chmod +x setup-deploy.sh