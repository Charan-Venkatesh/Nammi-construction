# 🚀 NAMMI Constructions - Quick Start Guide

## ⚠️ Node.js Installation Required

Node.js is not currently installed on your system. Follow these steps to get started:

### Step 1: Install Node.js

1. **Download Node.js** from: https://nodejs.org/
2. **Recommended**: Download the **LTS version** (Long Term Support)
3. **Run the installer** and follow the setup wizard
4. **Restart your terminal/command prompt** after installation

### Step 2: Verify Installation

Open a new terminal and run:
```bash
node --version
npm --version
```

You should see version numbers (e.g., v18.x.x and 9.x.x).

### Step 3: Install Project Dependencies

#### Option A: Automated Setup (Windows)
```bash
setup.bat
```

#### Option B: Manual Installation
```bash
# Install root dependencies
npm install

# Install React client dependencies
cd client
npm install
cd ..

# Copy environment template
copy .env.example .env
```

### Step 4: Run the Application

#### Development Mode (Both Server + React)
```bash
npm run dev
```

This starts:
- **Express Server**: http://localhost:5000
- **React App**: http://localhost:3000 (opens automatically)

#### Production Mode
```bash
# Build the React app
npm run build

# Start the production server
npm start
```

Visit: http://localhost:5000

---

## 🎯 Quick Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both server and client in development |
| `npm run server` | Start only the Express server |
| `npm run client` | Start only the React development server |
| `npm run build` | Build React app for production |
| `npm start` | Run production server |
| `npm run install-all` | Install all dependencies (root + client) |

---

## 📦 What You're Getting

### ✨ Full-Stack Application
- **React 18** frontend with modern hooks
- **Node.js + Express** backend server
- **Framer Motion** for smooth, declarative animations
- **GSAP** for advanced timeline control
- **REST API** for configuration

### 🎬 Three Animation Variants
1. **Master** (4.5s) - Full sequential animation
2. **Minimal** (3.5s) - Continuous line drawing
3. **Micro** (1.5s) - Fast performance mode

### 🎨 Premium Features
- Seamless animation switching
- Replay functionality
- Keyboard shortcuts (1, 2, 3, R)
- Fully responsive design
- 60fps performance
- Production-ready code

---

## 🛠️ Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in PATH
- Solution: Install Node.js from https://nodejs.org/

### Port already in use
```bash
# Change the port in .env file
PORT=3000
```

### Installation fails
```bash
# Clear npm cache and try again
npm cache clean --force
npm install
```

### React doesn't start
```bash
# Manually start the client
cd client
npm start
```

---

## 📖 Project Architecture

```
NAMMI-Website/
├── server.js              # Express backend (REST API)
├── package.json           # Root dependencies
├── client/                # React frontend
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   └── components/    # Animation components
│   │       ├── MasterAnimation.js    # GSAP timeline animation
│   │       ├── MinimalAnimation.js   # SVG path drawing
│   │       ├── MicroAnimation.js     # Fast reveal
│   │       └── ControlPanel.js       # UI controls
│   └── package.json       # React dependencies
```

---

## 🎯 Technology Breakdown

### Backend (Node.js)
- **Express**: Web server framework
- **CORS**: Cross-origin resource sharing
- **Helmet**: Security middleware
- **Compression**: Gzip compression

### Frontend (React)
- **Framer Motion**: Declarative animation library
- **GSAP**: Professional animation timeline
- **React 18**: Latest React with concurrent features
- **CSS Modules**: Scoped styling

---

## 🌐 Deployment Ready

### Environment Variables
Copy `.env.example` to `.env` and configure:
```env
PORT=5000
NODE_ENV=production
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Cloud
- **Heroku**: Use provided `heroku-postbuild` script
- **Vercel/Netlify**: Deploy `client/build` folder
- **AWS/Azure**: Use Docker or direct deployment

---

## 📞 Support

For detailed documentation, see:
- [SETUP.md](SETUP.md) - Complete setup guide
- [README.md](README.md) - Original project documentation

---

**Need Node.js?** Download here: https://nodejs.org/en/download/

**Built for NAMMI Constructions**  
*Trust-led, engineering-first, premium construction brand*
