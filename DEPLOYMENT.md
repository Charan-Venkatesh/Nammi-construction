# NAMMI Constructions - Deployment Guide

## Quick Start (Development)

1. **Install dependencies:**
```bash
npm install
cd client && npm install
cd ..
```

2. **Configure environment:**
```bash
cp .env.example .env
# Edit .env with your email credentials
```

3. **Start development servers:**
```bash
# Option 1: Run both servers concurrently
npm run dev

# Option 2: Run separately
# Terminal 1
npm run server

# Terminal 2
npm run client
```

4. **Access the website:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Production Deployment

### Option 1: Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create nammi-constructions

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set EMAIL_SERVICE=gmail
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASSWORD=your-app-password
heroku config:set EMAIL_RECIPIENT=contact@nammiconstructions.com

# Deploy
git push heroku main

# Open
heroku open
```

### Option 2: Netlify (Frontend) + Separate Backend

**Frontend (Netlify):**
```bash
cd client
npm run build
# Deploy the build/ folder to Netlify
```

**Backend (Any server):**
```bash
# On your server
npm install
npm run build  # Builds React app
NODE_ENV=production npm start
```

### Option 3: Traditional Server (VPS/Dedicated)

```bash
# On your server
git clone https://github.com/Charan-Venkatesh/Nammi-construction.git
cd Nammi-construction

# Install dependencies
npm install
cd client && npm install && cd ..

# Build frontend
npm run build

# Set up environment
cp .env.example .env
nano .env  # Edit with your credentials

# Install PM2 for process management
npm install -g pm2

# Start with PM2
pm2 start server.js --name nammi-constructions
pm2 save
pm2 startup
```

## Email Configuration

### Gmail Setup (Recommended for testing)

1. Enable 2-Factor Authentication on your Google account
2. Go to: https://myaccount.google.com/apppasswords
3. Generate an "App Password" for Mail
4. Use this password in your .env file:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # App password from step 3
EMAIL_RECIPIENT=contact@nammiconstructions.com
```

### Other Email Services

**Outlook/Hotmail:**
```env
EMAIL_SERVICE=hotmail
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

**Custom SMTP:**
```env
EMAIL_SERVICE=custom
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASSWORD=your-password
```

## Nginx Configuration (Optional - For Production)

```nginx
server {
    listen 80;
    server_name nammiconstructions.com www.nammiconstructions.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

Required environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | production/development |
| EMAIL_SERVICE | Email provider | gmail |
| EMAIL_USER | Email username | your-email@gmail.com |
| EMAIL_PASSWORD | Email password/app password | your-app-password |
| EMAIL_RECIPIENT | Recipient email | contact@nammiconstructions.com |

## Verification Checklist

After deployment, verify:

- [ ] Website loads at your domain
- [ ] All navigation links work
- [ ] All pages render correctly
- [ ] Contact form displays properly
- [ ] Form validation works (try invalid data)
- [ ] Email notifications are received
- [ ] Responsive design works on mobile
- [ ] Google Maps loads
- [ ] Social media links work
- [ ] Footer displays correctly

## Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules client/node_modules
rm package-lock.json client/package-lock.json
npm install
cd client && npm install
```

### Email not sending
- Check EMAIL_* environment variables are set
- For Gmail, ensure you're using an App Password, not your regular password
- Check spam folder
- View server logs for error messages

### Port already in use
```bash
# Find and kill process using port 5000
lsof -ti:5000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

### Can't connect to backend from frontend
- Check CORS settings in server.js
- Verify backend is running on correct port
- Check proxy setting in client/package.json

## Support

For issues or questions:
- Email: contact@nammiconstructions.com
- GitHub Issues: https://github.com/Charan-Venkatesh/Nammi-construction/issues

## Performance Optimization

For production:
1. Enable gzip compression (already configured)
2. Use a CDN for static assets
3. Enable caching headers
4. Minify assets (automatic with build)
5. Optimize images
6. Use SSL certificate (Let's Encrypt)

## Monitoring

Recommended tools:
- PM2 for process management
- Google Analytics for traffic
- Sentry for error tracking
- UptimeRobot for uptime monitoring
