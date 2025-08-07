import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create favicon (32x32)
function createFavicon() {
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');
    
    // Purple gradient background
    const gradient = ctx.createLinearGradient(0, 0, 32, 32);
    gradient.addColorStop(0, '#6366F1');
    gradient.addColorStop(1, '#8B5CF6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    
    // White Arabic letter Alif
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ا', 16, 18);
    
    // Save as PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), buffer);
    console.log('✅ Favicon created: public/favicon.png');
}

// Create OG image (1200x630)
function createOGImage() {
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#4F46E5');
    gradient.addColorStop(0.5, '#6366F1');
    gradient.addColorStop(1, '#8B5CF6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);
    
    // Pattern overlay
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 7; j++) {
            ctx.beginPath();
            ctx.arc(100 + i * 100, 90 + j * 90, 30, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    ctx.globalAlpha = 1;
    
    // White text
    ctx.fillStyle = 'white';
    
    // Arabic title
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('تعلم العربية', 600, 200);
    
    // App name
    ctx.font = 'bold 60px Arial';
    ctx.fillText('Belajar Bahasa Arab', 600, 320);
    
    // Subtitle
    ctx.font = '36px Arial';
    ctx.fillText('Platform Pembelajaran Interaktif', 600, 380);
    
    // Features
    ctx.font = '28px Arial';
    ctx.fillText('Huruf Hijaiyah • Kosakata • Tashrif • Nahwu', 600, 460);
    ctx.fillText('Flashcards • AI Tutor • Gamifikasi', 600, 500);
    
    // Save as PNG
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, '../public/og-image.png'), buffer);
    console.log('✅ OG Image created: public/og-image.png');
}

// Generate both images
console.log('🎨 Generating images for Arabic Learning App...\n');
createFavicon();
createOGImage();
console.log('\n✨ All images generated successfully!');