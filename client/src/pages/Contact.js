import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({ loading: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ loading: false, success: false, error: null });
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: error.message || 'Failed to send message. Please try again.' 
      });
    }
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us for your construction needs. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Have a project in mind? We'd love to hear from you. Send us a message 
                and we'll respond as soon as possible.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 9876543210</p>
                    <p>+91 9876543211</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@nammiconstructions.com</p>
                    <p>contact@nammiconstructions.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>123 Construction Avenue</p>
                    <p>Hyderabad, Telangana 500001</p>
                    <p>India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-text">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength="2"
                    maxLength="100"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                    maxLength="1000"
                    rows="6"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {formStatus.error && (
                  <div className="form-message error-message">
                    {formStatus.error}
                  </div>
                )}

                {formStatus.success && (
                  <div className="form-message success-message">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary btn-submit"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            <iframe
              title="NAMMI Constructions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160381104!2d78.24323189453124!3d17.412608699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
