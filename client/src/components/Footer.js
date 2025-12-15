import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <span className="footer-logo-main">NAMMI</span>
              <span className="footer-logo-sub">CONSTRUCTIONS</span>
            </div>
            <p className="footer-description">
              Building dreams with quality, integrity, and excellence since 2008. 
              Your trusted partner for all construction needs.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/why-nammi">Why NAMMI</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Residential Construction</Link></li>
              <li><Link to="/services">Commercial Construction</Link></li>
              <li><Link to="/services">Renovation & Remodeling</Link></li>
              <li><Link to="/services">Interior Design</Link></li>
              <li><Link to="/services">Project Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FaPhone className="footer-icon" />
                <div>
                  <p>+91 9876543210</p>
                  <p>+91 9876543211</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope className="footer-icon" />
                <div>
                  <p>info@nammiconstructions.com</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-icon" />
                <div>
                  <p>123 Construction Avenue</p>
                  <p>Hyderabad, Telangana 500001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NAMMI Constructions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
