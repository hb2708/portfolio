# Portfolio Website

My professional portfolio showcasing my work as a Staff Engineer and React Native Developer.

🌐 **Live Site:** [gyaan.tech](https://gyaan.tech)

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Package Manager:** pnpm

## ✨ Features

- 🎨 Modern dark theme with amber accents
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
```

Visit `http://localhost:5173` to view the site locally.

### Build for Production

```bash
pnpm run build
```

The optimized build will be in the `dist/` folder.

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Writing.jsx
│   │   └── Contact.jsx
│   ├── constants/       # Centralized data
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── resume.pdf
└── tailwind.config.js
```

## 🎨 Color Palette

- **Background:** `#0f172a` (Slate 900)
- **Surface:** `#1e293b` (Slate 800)
- **Primary:** `#f59e0b` (Amber 500)
- **Secondary:** `#10b981` (Emerald 500)
- **Text:** `#f8fafc` (Slate 50)

## 📝 Content Management

All content (projects, experience, skills, articles) is centralized in `src/constants/index.js` for easy updates.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Harshal Bhavsar**
- GitHub: [@hb2708](https://github.com/hb2708)
- LinkedIn: [harshal-ios-swift-react-native](https://linkedin.com/in/harshal-ios-swift-react-native)
- Email: hb2708@gmail.com

---

Built with ❤️ using React and TailwindCSS
