#!/bin/bash

echo "🚀 Preparing deployment for hosting..."

# 1. Clean build files
echo "Cleaning old files..."
rm -rf dist
rm -rf node_modules/.vite

# 2. Build with production optimizations
echo "Building production version..."
NODE_OPTIONS="--max-old-space-size=512" npm run build

# 3. Create deployment package
echo "Creating deployment package..."
cd dist

# 4. Create .htaccess for Apache (if needed)
cat > .htaccess << EOF
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
EOF

# 5. Compress assets
echo "Compressing assets..."
find . -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) -exec gzip -k {} \;

echo "✅ Build complete! Upload the 'dist' folder to your hosting"
echo "📦 Size: $(du -sh . | cut -f1)"