# 🕌 Arabic Learning Application - Platform Pembelajaran Bahasa Arab Interaktif

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple.svg)](https://vitejs.dev/)

Platform pembelajaran bahasa Arab komprehensif dengan fitur interaktif, gamifikasi, dan AI tutor untuk membantu pengguna Indonesia menguasai bahasa Arab dari dasar hingga mahir.

## 📸 Screenshots

![Home Page](https://via.placeholder.com/800x400.png?text=Home+Page)
![Arabic Letters](https://via.placeholder.com/800x400.png?text=Arabic+Letters+Module)
![AI Tutor](https://via.placeholder.com/800x400.png?text=AI+Tutor+Chat)

## ✨ Fitur Utama

### 📚 Modul Pembelajaran Lengkap

#### 1. **Huruf Hijaiyah & Harakat** 
- 28 huruf Arab dengan 4 bentuk penulisan (terpisah, awal, tengah, akhir)
- 9 jenis harakat (fathah, kasrah, dammah, sukun, tanwin, dll)
- Audio pronunciation dengan Web Speech API
- Panduan stroke order untuk menulis
- Contoh kata untuk setiap huruf

#### 2. **Kosakata (Vocabulary)**
- 100+ kata dalam 15 kategori
- Kategori: Keluarga, Tubuh, Makanan, Hewan, Warna, Angka, dll
- 3 tingkat kesulitan (Pemula, Menengah, Mahir)
- Fitur pencarian dan filter
- Audio untuk setiap kata
- Contoh kalimat dengan transliterasi

#### 3. **Flashcards**
- Sistem kartu pintar dengan spaced repetition
- Mode latihan dengan berbagai ukuran sesi
- Tracking progress dan statistik
- Animasi flip card yang smooth
- Riwayat pembelajaran tersimpan

#### 4. **Tashrif (Konjugasi Kata Kerja)**
- 10 bentuk wazan (pola kata kerja Arab)
- Tabel konjugasi lengkap untuk semua dhamir (kata ganti)
- Fi'il madhi, mudhari', mustaqbal, dan amr
- Rumus-rumus tashrif dalam tabel
- Contoh penggunaan dengan audio

#### 5. **Nahwu (Tata Bahasa)**
- 10+ topik dari dasar hingga lanjutan:
  - Jumlah Ismiyyah & Fi'liyyah
  - I'rab dan tanda baca
  - Mudzakkar & Muannats
  - Mufrad, Mutsanna, Jamak
  - Nakirah & Ma'rifah
  - Idhafah
  - Nawasikh (Kana & Inna)
  - Hal
- Tabel rumus dan i'rab lengkap
- Contoh dengan analisis
- Latihan untuk setiap topik

#### 6. **Latihan Interaktif**
- Kuis pilihan ganda
- Tantangan harian dengan bonus poin
- Sistem lives (3 nyawa)
- Streak tracking
- Timer untuk setiap soal
- Feedback instant dengan penjelasan

#### 7. **AI Tutor (Powered by Google Gemini)**
- Chat interaktif dengan AI
- Jawab pertanyaan tentang bahasa Arab
- Penjelasan personal sesuai kebutuhan
- Contoh dan latihan khusus
- Quick questions untuk memulai
- Available 24/7

#### 8. **Progress Tracking**
- Dashboard progress pembelajaran
- Statistik detail (poin, streak, waktu belajar)
- Achievement system dengan badges
- Aktivitas heatmap 30 hari
- Learning path visualization
- Leaderboard

### 🎮 Sistem Gamifikasi

- **Poin**: Dapatkan poin dari setiap aktivitas
- **Level**: Naik level (Pemula → Menengah → Mahir)
- **Streak**: Jaga konsistensi belajar harian
- **Achievement**: 6+ badges untuk dibuka
- **Leaderboard**: Bersaing dengan pengguna lain

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18.3 dengan TypeScript
- **Styling**: Tailwind CSS 3.3
- **Routing**: React Router v6
- **Animasi**: Framer Motion
- **Icons**: Lucide React

### AI & APIs
- **AI Integration**: Google Generative AI (Gemini Pro)
- **Text-to-Speech**: Web Speech API dengan fallback Google TTS
- **Storage**: LocalStorage untuk progress tracking

### Build Tools
- **Bundler**: Vite 5.4
- **Package Manager**: npm/yarn
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Git

### Setup Development

1. **Clone repository**
```bash
git clone https://github.com/pendtiumpraz/complete-arabic-lesson.git
cd complete-arabic-lesson
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Setup environment variables (optional)**
```bash
# Buat file .env.local
cp .env.example .env.local

# Edit dengan API key Anda (optional, sudah ada default)
VITE_GEMINI_API_KEY=your_api_key_here
```

4. **Run development server**
```bash
npm run dev
# atau
yarn dev
```

5. **Build untuk production**
```bash
npm run build
# atau
yarn build
```

## 🗂️ Struktur Project

```
arabic-learning-app/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Layout.tsx      # Main layout dengan sidebar
│   │   └── AudioButton.tsx # Tombol audio dengan fallback
│   │
│   ├── pages/             # Halaman aplikasi
│   │   ├── Home.tsx       # Dashboard utama
│   │   ├── ArabicLetters.tsx # Modul huruf hijaiyah
│   │   ├── Vocabulary.tsx    # Modul kosakata
│   │   ├── Flashcards.tsx    # Sistem flashcard
│   │   ├── Tashrif.tsx       # Konjugasi kata kerja
│   │   ├── Nahwu.tsx         # Tata bahasa
│   │   ├── Practice.tsx      # Latihan & kuis
│   │   ├── AITutor.tsx       # Chat dengan AI
│   │   ├── Progress.tsx      # Tracking progress
│   │   └── AudioTest.tsx     # Test & debug audio
│   │
│   ├── data/              # Database lokal
│   │   ├── arabicLetters.ts  # Data huruf & harakat
│   │   ├── vocabulary.ts     # Database kosakata
│   │   ├── tashrif.ts       # Data konjugasi
│   │   └── nahwu.ts         # Materi tata bahasa
│   │
│   ├── utils/             # Utility functions
│   │   └── speech.ts      # Text-to-speech handler
│   │
│   ├── lib/               # Library helpers
│   │   └── utils.ts       # Tailwind merge utility
│   │
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
│
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md             # Documentation
```

## 🤝 Contributing

Kami sangat menyambut kontribusi dari siapa saja! Berikut cara berkontribusi:

### Cara Berkontribusi

1. **Fork repository**
   - Klik tombol "Fork" di GitHub
   - Clone fork Anda: `git clone https://github.com/YOUR_USERNAME/complete-arabic-lesson.git`

2. **Buat branch fitur**
```bash
git checkout -b feature/NamaFitur
# Contoh: git checkout -b feature/add-quiz-timer
```

3. **Commit perubahan**
```bash
git add .
git commit -m "Add: Deskripsi fitur yang ditambahkan"
```

4. **Push ke branch**
```bash
git push origin feature/NamaFitur
```

5. **Buat Pull Request**
   - Buka GitHub dan buat Pull Request
   - Jelaskan perubahan yang Anda buat
   - Link issue terkait jika ada

### Area yang Bisa Dikembangkan

#### 🎯 Priority Features
- [ ] **Offline Mode**: Service worker untuk akses offline
- [ ] **Voice Recording**: Rekam dan bandingkan pronunciation
- [ ] **Multiplayer Quiz**: Tantangan real-time dengan pengguna lain
- [ ] **Video Lessons**: Integrasi video pembelajaran
- [ ] **Handwriting Recognition**: Latihan menulis huruf Arab
- [ ] **Export Progress**: Download progress sebagai PDF
- [ ] **Dark Mode**: Tema gelap untuk mata
- [ ] **Mobile App**: React Native version

#### 📚 Content Additions
- [ ] Lebih banyak kosakata (target 1000+ kata)
- [ ] Percakapan sehari-hari (dialog)
- [ ] Cerita pendek untuk latihan membaca
- [ ] Doa-doa harian dengan audio
- [ ] Idiom dan peribahasa Arab
- [ ] Business Arabic module
- [ ] Medical Arabic module

#### 🔧 Technical Improvements
- [ ] Unit tests dengan Jest
- [ ] E2E tests dengan Cypress
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] PWA features
- [ ] Backend API dengan Node.js
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication
- [ ] Social features (follow, share progress)
- [ ] Analytics dashboard

### Development Guidelines

#### Code Style
- Gunakan TypeScript untuk type safety
- Follow React best practices
- Gunakan functional components dengan hooks
- Implementasikan proper error handling
- Tulis code yang readable dan maintainable

#### Commit Convention
```
Type: Subject

Body (optional)

Footer (optional)
```

Types:
- `Add:` Fitur baru
- `Fix:` Bug fix
- `Update:` Update fitur existing
- `Remove:` Hapus fitur/file
- `Refactor:` Refactor code
- `Style:` Perubahan styling
- `Docs:` Update dokumentasi
- `Test:` Tambah/update tests

#### Testing
```bash
# Run tests (coming soon)
npm run test

# Run linter
npm run lint

# Type check
npm run type-check
```

## 🐛 Bug Reports & Feature Requests

### Melaporkan Bug
1. Buka [Issues](https://github.com/pendtiumpraz/complete-arabic-lesson/issues)
2. Klik "New Issue"
3. Pilih template "Bug Report"
4. Isi detail:
   - Deskripsi bug
   - Steps to reproduce
   - Expected behavior
   - Screenshots (jika ada)
   - Browser & OS info

### Request Fitur
1. Buka [Issues](https://github.com/pendtiumpraz/complete-arabic-lesson/issues)
2. Klik "New Issue" 
3. Pilih template "Feature Request"
4. Jelaskan fitur yang diinginkan

## 📱 Deployment

### Deploy ke Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Atau langsung dari GitHub
# 1. Connect GitHub repo di vercel.com
# 2. Auto deploy setiap push
```

### Deploy ke Netlify
```bash
# Build locally
npm run build

# Drag & drop folder 'dist' ke netlify.com
# Atau connect GitHub untuk auto deploy
```

### Self Hosting
```bash
# Build production
npm run build

# Upload folder 'dist' ke hosting Anda
# Pastikan support SPA routing
```

### Environment Variables
```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_API_URL=your_backend_url (optional)
```

## 📊 Project Status

- ✅ Phase 1: Core Learning Modules (Complete)
- ✅ Phase 2: Gamification System (Complete)
- ✅ Phase 3: AI Integration (Complete)
- 🚧 Phase 4: Mobile App (In Planning)
- 📅 Phase 5: Backend API (Planned)
- 📅 Phase 6: Social Features (Planned)

## 👥 Contributors

<!-- ALL-CONTRIBUTORS-LIST:START -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/pendtiumpraz">
        <img src="https://github.com/pendtiumpraz.png" width="100px;" alt=""/>
        <br />
        <sub><b>Pendtium Praz</b></sub>
      </a>
      <br />
      💻 📖 🎨
    </td>
    <!-- Add more contributors here -->
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact & Support

- **Email**: pendtiumpraz@gmail.com
- **GitHub Issues**: [Create Issue](https://github.com/pendtiumpraz/complete-arabic-lesson/issues)
- **Discussions**: [GitHub Discussions](https://github.com/pendtiumpraz/complete-arabic-lesson/discussions)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Google Gemini](https://ai.google.dev/) - AI Integration
- [Lucide Icons](https://lucide.dev/) - Icons
- [Framer Motion](https://www.framer.com/motion/) - Animations
- All contributors and users

## 🌟 Support Project

Jika project ini membantu Anda, berikan ⭐️ di GitHub!

---

**Made with ❤️ for Arabic learners in Indonesia**

*"Barangsiapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan ke surga" - HR. Muslim*