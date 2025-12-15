import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHardHat, FaBuilding, FaPaintRoller, FaCheckCircle } from 'react-icons/fa';
import Logo3DAnimation from '../components/Logo3DAnimation';
import './Home.css';

function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Hide animation after it completes
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Animation */}
      {showAnimation && (
        <div className="animation-overlay">
          <Logo3DAnimation />
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Building Dreams, Delivering Excellence</h1>
          <p className="hero-subtitle">
            Premium construction services with 15+ years of experience in residential and commercial projects
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive construction solutions for all your needs</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3>Residential Construction</h3>
              <p>Custom homes designed and built to your specifications with attention to detail.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaHardHat />
              </div>
              <h3>Commercial Construction</h3>
              <p>Professional commercial buildings that meet your business requirements.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaPaintRoller />
              </div>
              <h3>Renovation & Remodeling</h3>
              <p>Transform your existing space with our expert renovation services.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaCheckCircle />
              </div>
              <h3>Project Management</h3>
              <p>End-to-end project management ensuring timely and quality delivery.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose NAMMI Constructions?</h2>
          <div className="why-grid">
            <div className="why-item">
              <h4>Quality Assured</h4>
              <p>We use premium materials and follow strict quality standards</p>
            </div>
            <div className="why-item">
              <h4>Experienced Team</h4>
              <p>Skilled professionals with years of industry experience</p>
            </div>
            <div className="why-item">
              <h4>Timely Delivery</h4>
              <p>We complete projects on schedule without compromising quality</p>
            </div>
            <div className="why-item">
              <h4>Cost Effective</h4>
              <p>Competitive pricing with transparent billing</p>
            </div>
          </div>
          <div className="cta-button-container">
            <Link to="/why-nammi" className="btn btn-primary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "NAMMI Constructions built our dream home exactly as we envisioned. Their attention 
                to detail and professionalism is unmatched."
              </p>
              <div className="testimonial-author">
                <h4>Rajesh Kumar</h4>
                <p>Residential Client</p>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Outstanding work on our commercial project. They delivered on time and within 
                budget. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <h4>Priya Sharma</h4>
                <p>Business Owner</p>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "The renovation of our office was handled professionally. The team was courteous 
                and the results exceeded our expectations."
              </p>
              <div className="testimonial-author">
                <h4>Anil Reddy</h4>
                <p>Corporate Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Get in touch with us today for a free consultation</p>
          <Link to="/contact" className="btn btn-primary btn-large">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
