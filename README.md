# NAMMI Constructions - Full-Stack Website

Professional, modern full-stack website for NAMMI Constructions featuring responsive design, comprehensive service information, and integrated contact form functionality.

## 🌟 Features

### Website Sections
- **Home** - Hero section with company overview, services, testimonials, and statistics
- **About Us** - Company history, mission, vision, values, and team information
- **Services** - Detailed construction services including residential, commercial, renovation, interior design, and project management
- **Why NAMMI** - Unique value propositions, competitive advantages, certifications, and achievements
- **Contact Us** - Contact form with email integration, location map, and company details

### Technical Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Full-stack implementation (React frontend + Node.js backend)
- ✅ Contact form with email notifications
- ✅ Form validation (client-side and server-side)
- ✅ Rate limiting for security
- ✅ Google Maps integration
- ✅ Professional UI with NAMMI branding (#1e3a5f navy, #ffd700 gold)
- ✅ Smooth animations and transitions
- ✅ SEO-ready structure

## 📁 Project Structure

```
NAMMI-Constructions/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components (Header, Footer, etc.)
│   │   ├── pages/         # Page components (Home, About, Services, etc.)
│   │   ├── App.js         # Main app with routing
│   │   └── index.js       # Entry point
│   └── package.json
├── server.js              # Express backend server
├── package.json           # Backend dependencies
├── .env.example           # Environment variables template
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Charan-Venkatesh/Nammi-construction.git
cd Nammi-construction
```

2. **Install dependencies**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

3. **Configure environment variables**
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your email credentials
# For Gmail, you need to use an App Password:
# 1. Enable 2FA on your Google account
# 2. Go to https://myaccount.google.com/apppasswords
# 3. Generate an app password for "Mail"
# 4. Use that password in EMAIL_PASSWORD
```

4. **Run in development mode**
```bash
# Start both backend and frontend concurrently
npm run dev

# OR run them separately:

# Terminal 1 - Backend (port 5000)
npm run server

# Terminal 2 - Frontend (port 3000)
npm run client
```

5. **Access the website**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api/health

### Production Build

```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

The production build will serve the React app from the Express server on port 5000.

## 📧 Email Configuration

The contact form requires email credentials to send messages. Update `.env` with your email provider details:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_RECIPIENT=contact@nammiconstructions.com
```

**Supported Email Services:**
- Gmail (recommended for testing)
- Outlook/Hotmail
- Yahoo
- Custom SMTP servers

## 🎨 Design System

### Color Palette
- **Primary:** #1E3A5F (Navy Blue) - Trust and professionalism
- **Accent:** #FFD700 (Gold) - Premium and quality
- **Secondary:** #8B9DAF (Blue Gray) - Supporting elements
- **Background:** #FFFFFF (White) - Clean and modern

### Typography
- **Headings:** System fonts (Segoe UI, Roboto, Helvetica)
- **Body:** Optimized for readability across devices

## 🛠️ API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and timestamp.

### Contact Form
```
POST /api/contact
```
Submit contact form with the following fields:
- `name` (required, 2-100 characters)
- `email` (required, valid email)
- `phone` (required, valid phone format)
- `message` (required, 10-1000 characters)
- `service` (optional, service interest)

**Rate Limiting:** 5 requests per 15 minutes per IP

## 🔒 Security Features

- Rate limiting on contact form
- Input validation and sanitization
- CORS protection
- Helmet.js security headers
- Environment variable protection

## 📱 Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** 480px - 768px
- **Desktop:** > 768px

## 🚀 Deployment

### Heroku
```bash
# Login to Heroku
heroku login

# Create new app
heroku create nammi-constructions

# Set environment variables
heroku config:set EMAIL_SERVICE=gmail
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Netlify/Vercel
For static hosting of the React frontend:
```bash
cd client
npm run build
# Deploy the build folder
```

### Traditional Server
```bash
# Build the frontend
npm run build

# Copy files to server and run
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details

## 👥 Support

For support, email contact@nammiconstructions.com or create an issue on GitHub.

---

**NAMMI Constructions** - Building Dreams with Excellence Since 2008
