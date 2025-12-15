const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and Performance Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allow inline styles for animations
}));
app.use(compression()); // Gzip compression
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact form submissions, please try again later.'
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'NAMMI Constructions Website Server',
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

// Contact form endpoint with validation
app.post('/api/contact',
  contactLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required')
      .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
    body('email').trim().isEmail().withMessage('Valid email is required')
      .normalizeEmail(),
    body('phone').trim().notEmpty().withMessage('Phone number is required')
      .matches(/^[\d\s\-\+\(\)]+$/).withMessage('Invalid phone number format'),
    body('message').trim().notEmpty().withMessage('Message is required')
      .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),
    body('service').optional().trim()
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false,
        errors: errors.array() 
      });
    }

    const { name, email, phone, message, service } = req.body;

    try {
      // Configure email transport
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      // Email to company
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
        subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `
      };

      // Confirmation email to user
      const confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting NAMMI Constructions',
        html: `
          <h2>Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <br>
          <p>Best regards,<br>NAMMI Constructions Team</p>
          <hr>
          <p><small>This is an automated confirmation email.</small></p>
        `
      };

      // Send emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(confirmationMailOptions);

      res.json({ 
        success: true,
        message: 'Thank you for your message. We will contact you soon!' 
      });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ 
        success: false,
        message: 'Failed to send message. Please try again later or contact us directly.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
);

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
