# Portfolio Website

My professional portfolio showcasing my work as a Staff Engineer and React Native Developer.

🌐 **Live Site:** [gyaan.tech](https://gyaan.tech)

## 🚀 Tech Stack

- **Language:** TypeScript
- **Framework:** React 19 + Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Quality Control:** Husky
- **Deployment:** Vercel
- **Package Manager:** pnpm

## ✨ Features

- 🎨 Modern dark theme with electric blue accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Smooth scroll navigation
- ⌨️ Typewriter animation effect
- 🎯 Clean component architecture
- 🔒 HTTPS enabled with automatic SSL
- 🚀 Optimized performance

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/hb2708/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Run type checking
pnpm run type-check
```

Visit `http://localhost:5173` to view the site locally.

### Build for Production

```bash
pnpm run build
```

The optimized build will be in the `dist/` folder.

### Pre-commit Hooks

This project uses **Husky** to enforce quality standards. Before every commit, the following checks run automatically:
- `pnpm lint`: Runs ESLint on the entire project.
- `pnpm run build`: Verifies the project builds successfully.

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetails.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Writing.tsx
│   │   ├── Awards.tsx
│   │   └── Footer.tsx
│   ├── constants/       # Centralized data
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── resume.pdf
└── tailwind.config.js
```

## 🎨 Color Palette

- **Background:** `#0F172A` (Deep Slate)
- **Surface:** `#1E293B` (Slate 800)
- **Primary:** `#3B82F6` (Electric Blue)
- **Secondary:** `#10b981` (Emerald)
- **Accent:** `#61DAFB` (React Cyan)
- **Text:** `#F8FAFC` (Slate 50)
- **Muted:** `#94A3B8` (Cool Grey)

## 📝 Content Management

All content (projects, experience, skills, articles) is centralized in `src/constants/index.ts` for easy updates.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Harshal Bhavsar**
- GitHub: [@hb2708](https://github.com/hb2708)
- LinkedIn: [harshal-ios-swift-react-native](https://linkedin.com/in/harshal-ios-swift-react-native)
- Email: hb2708@gmail.com

---

Built with ❤️ using React and TailwindCSS
