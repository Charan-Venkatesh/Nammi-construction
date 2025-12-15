const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5000;

// Security and Performance Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allow inline styles for animations
}));
app.use(compression()); // Gzip compression
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'NAMMI Constructions Animation Server',
    timestamp: new Date().toISOString()
  });
});

// Animation configuration endpoint
app.get('/api/animation-config', (req, res) => {
  res.json({
    variants: {
      master: {
        duration: 4.5,
        description: 'Full sequential animation with all elements'
      },
      minimal: {
        duration: 3.5,
        description: 'Single continuous line drawing'
      },
      micro: {
        duration: 1.5,
        description: 'Fast center-outward reveal'
      }
    },
    colors: {
      primary: '#1E3A5F',
      secondary: '#8B9DAF',
      background: '#FFFFFF'
    }
  });
});

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({ 
      message: 'API is running. Start React client with: npm run client' 
    });
  });
}

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 NAMMI Constructions server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 API Health: http://localhost:${PORT}/api/health`);
});

module.exports = app;
