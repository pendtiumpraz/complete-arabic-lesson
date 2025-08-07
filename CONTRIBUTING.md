# Contributing to Arabic Learning Application

Terima kasih atas minat Anda untuk berkontribusi pada Arabic Learning Application! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## 📜 Code of Conduct

### Our Pledge

Kami berkomitmen untuk menjadikan partisipasi dalam project ini sebagai pengalaman yang bebas dari pelecehan untuk semua orang, tanpa memandang usia, ukuran tubuh, disabilitas, etnis, identitas gender, tingkat pengalaman, kebangsaan, penampilan pribadi, ras, agama, atau identitas dan orientasi seksual.

### Our Standards

Contoh perilaku positif:
- Menggunakan bahasa yang ramah dan inklusif
- Menghormati sudut pandang dan pengalaman yang berbeda
- Menerima kritik konstruktif dengan baik
- Fokus pada apa yang terbaik untuk komunitas
- Menunjukkan empati terhadap anggota komunitas lain

## 🤝 How Can I Contribute?

### 🐛 Reporting Bugs

Sebelum membuat bug report, pastikan:
- Check [existing issues](https://github.com/pendtiumpraz/complete-arabic-lesson/issues) untuk memastikan bug belum dilaporkan
- Update ke versi terbaru dan cek apakah bug masih ada
- Kumpulkan informasi tentang bug (screenshot, error message, dll)

**Bug Report harus mencakup:**
- Ringkasan yang jelas
- Steps to reproduce (langkah-langkah untuk mereproduksi)
- Expected behavior (perilaku yang diharapkan)
- Actual behavior (perilaku yang terjadi)
- Screenshots (jika relevan)
- Environment details (browser, OS, dll)

### 💡 Suggesting Features

Feature request sangat welcome! Saat membuat feature request:
- Check apakah sudah ada di [issues](https://github.com/pendtiumpraz/complete-arabic-lesson/issues)
- Jelaskan use case dan manfaat fitur
- Berikan contoh implementasi jika memungkinkan
- Pertimbangkan scope dan kompleksitas

### 🔧 Contributing Code

#### Area Kontribusi Prioritas

**High Priority:**
1. **Bug Fixes** - Perbaikan bug existing
2. **Performance** - Optimasi performa
3. **Accessibility** - Peningkatan aksesibilitas
4. **Testing** - Menambah unit/integration tests
5. **Documentation** - Update/improve docs

**Feature Additions:**
1. **Content** - Menambah kosakata, materi nahwu, dll
2. **UI/UX** - Perbaikan interface dan experience
3. **New Modules** - Modul pembelajaran baru
4. **Gamification** - Fitur gamifikasi tambahan
5. **API Integration** - Integrasi dengan service eksternal

## 🛠️ Development Setup

### Prerequisites

```bash
# Required
- Node.js 18+ 
- npm 8+ atau yarn 1.22+
- Git

# Optional
- VS Code (recommended editor)
- Arabic keyboard layout (untuk testing)
```

### Setup Steps

1. **Fork & Clone**
```bash
# Fork di GitHub, lalu:
git clone https://github.com/YOUR_USERNAME/complete-arabic-lesson.git
cd complete-arabic-lesson
```

2. **Install Dependencies**
```bash
npm install
# atau
yarn install
```

3. **Create Branch**
```bash
git checkout -b feature/your-feature-name
# atau untuk bug fix:
git checkout -b fix/bug-description
```

4. **Start Development**
```bash
npm run dev
# App akan berjalan di http://localhost:5173
```

5. **Run Tests** (jika tersedia)
```bash
npm run test
npm run test:watch # untuk watch mode
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components (routes)
├── data/          # Static data (letters, vocabulary, etc)
├── utils/         # Utility functions
├── lib/           # External library wrappers
├── hooks/         # Custom React hooks (jika ada)
├── types/         # TypeScript type definitions
└── styles/        # Global styles
```

### Key Files

- `App.tsx` - Main application component & routing
- `data/arabicLetters.ts` - Database huruf Arab
- `data/vocabulary.ts` - Database kosakata
- `data/tashrif.ts` - Data konjugasi
- `data/nahwu.ts` - Materi tata bahasa
- `utils/speech.ts` - Text-to-speech handler

## 💻 Coding Standards

### TypeScript

```typescript
// ✅ Good - Use interfaces for object shapes
interface User {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

// ✅ Good - Use proper typing
const updateUser = (user: User): void => {
  // implementation
};

// ❌ Bad - Avoid any
const updateUser = (user: any) => {
  // implementation
};
```

### React Components

```tsx
// ✅ Good - Functional component with proper typing
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {label}
    </button>
  );
}

// ❌ Bad - Missing types
export default function Button(props) {
  return <button>{props.label}</button>;
}
```

### File Naming

```
components/
  Button.tsx          # PascalCase for components
  AudioButton.tsx
  
utils/
  speech.ts          # camelCase for utilities
  validation.ts
  
pages/
  ArabicLetters.tsx  # PascalCase for pages
  
data/
  arabicLetters.ts   # camelCase for data files
```

### CSS/Styling

```tsx
// ✅ Good - Use Tailwind classes
<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">

// ✅ Good - Extract complex styles to variables
const cardStyles = "flex items-center gap-4 p-4 bg-white rounded-lg shadow-md";
<div className={cardStyles}>

// ❌ Bad - Inline styles (kecuali untuk dynamic values)
<div style={{ display: 'flex', padding: '16px' }}>
```

## 📝 Commit Guidelines

### Commit Message Format

```
Type: Subject (max 50 chars)

Body (optional, wrap at 72 chars)

Footer (optional)
```

### Types

- `Add:` Menambah fitur baru
- `Fix:` Memperbaiki bug
- `Update:` Update fitur existing
- `Remove:` Menghapus fitur/file
- `Refactor:` Refactor code tanpa mengubah functionality
- `Style:` Perubahan styling (CSS, formatting)
- `Docs:` Update dokumentasi
- `Test:` Menambah/update tests
- `Chore:` Maintenance tasks
- `Perf:` Performance improvements

### Examples

```bash
# Feature
git commit -m "Add: Voice recording feature for pronunciation practice"

# Bug fix
git commit -m "Fix: Audio playback not working on Safari"

# With body
git commit -m "Update: Improve flashcard animation

- Add flip animation with Framer Motion
- Increase animation duration to 0.4s
- Add haptic feedback on mobile"
```

## 🚀 Pull Request Process

### Before Creating PR

1. **Update dari main branch**
```bash
git fetch origin
git rebase origin/main
```

2. **Test your changes**
- Run `npm run build` untuk memastikan build sukses
- Test di berbagai browser (Chrome, Firefox, Safari)
- Test responsive design
- Check console untuk errors

3. **Code quality**
```bash
# Format code
npm run format

# Lint check
npm run lint

# Type check
npm run type-check
```

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on mobile
- [ ] Added/updated tests

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design maintained
```

### Review Process

1. **Automated checks** - CI/CD akan run tests
2. **Code review** - Maintainer akan review code
3. **Testing** - Manual testing jika diperlukan
4. **Feedback** - Address any feedback
5. **Merge** - PR akan di-merge setelah approved

## 🌟 Recognition

Contributors akan ditambahkan ke:
- README.md contributors section
- Contributors page in app (planned)
- GitHub contributors list

## 💬 Community

### Getting Help

- **Discord**: [Join our Discord](https://discord.gg/arabic-learning) (coming soon)
- **GitHub Discussions**: [Start a discussion](https://github.com/pendtiumpraz/complete-arabic-lesson/discussions)
- **Email**: pendtiumpraz@gmail.com

### Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Arabic Language Resources](https://en.wikipedia.org/wiki/Arabic_grammar)

## 🎯 Development Roadmap

### Current Sprint (Q1 2025)
- [ ] Add offline support (PWA)
- [ ] Implement voice recording
- [ ] Add more vocabulary (500+ words)
- [ ] Create mobile app

### Future Plans
- Backend API development
- User authentication
- Social features
- Multiplayer quizzes
- Video lessons
- Certificate generation

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🙏

*"The best of people are those who bring most benefit to others"* - Hadith