import React from 'react';
import { FaAward, FaUsers, FaClock, FaDollarSign, FaSmile, FaCertificate, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './WhyNammi.css';

function WhyNammi() {
  return (
    <div className="why-nammi-page">
      {/* Header Section */}
      <section className="why-header">
        <div className="container">
          <h1 className="page-title">Why Choose NAMMI Constructions?</h1>
          <p className="page-subtitle">
            Your trusted partner for quality construction with a proven track record of excellence
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="key-advantages">
        <div className="container">
          <h2 className="section-title">Our Competitive Advantages</h2>
          
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <FaAward />
              </div>
              <h3>Quality Assurance</h3>
              <p>
                We maintain the highest quality standards using premium materials and proven 
                construction techniques. Every project undergoes rigorous quality checks at 
                multiple stages to ensure excellence.
              </p>
              <ul className="advantage-list">
                <li>Premium grade materials only</li>
                <li>Multi-stage quality inspections</li>
                <li>Adherence to international standards</li>
                <li>Comprehensive quality documentation</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <FaUsers />
              </div>
              <h3>Experienced Team</h3>
              <p>
                Our team of 100+ skilled professionals brings decades of combined experience 
                to every project. From architects to engineers, everyone is a specialist in 
                their field.
              </p>
              <ul className="advantage-list">
                <li>Licensed and certified professionals</li>
                <li>Ongoing training and development</li>
                <li>Specialized expertise in various domains</li>
                <li>Dedicated project managers</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <FaClock />
              </div>
              <h3>Timely Delivery</h3>
              <p>
                We respect your time and understand the importance of project deadlines. 
                Our efficient project management ensures completion on schedule without 
                compromising quality.
              </p>
              <ul className="advantage-list">
                <li>Detailed project timelines</li>
                <li>Regular progress updates</li>
                <li>Proactive risk management</li>
                <li>98% on-time delivery rate</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <FaDollarSign />
              </div>
              <h3>Cost-Effective Solutions</h3>
              <p>
                We provide competitive pricing without hidden costs. Our transparent billing 
                and efficient resource management deliver maximum value for your investment.
              </p>
              <ul className="advantage-list">
                <li>Transparent pricing structure</li>
                <li>No hidden charges</li>
                <li>Value engineering options</li>
                <li>Flexible payment plans</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <FaSmile />
              </div>
              <h3>Customer Satisfaction</h3>
              <p>
                Your satisfaction is our priority. We maintain open communication throughout 
                the project and don't consider it complete until you're completely satisfied.
              </p>
              <ul className="advantage-list">
                <li>24/7 client support</li>
                <li>Regular communication channels</li>
                <li>Post-completion support</li>
                <li>100% satisfaction guarantee</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">
                <FaShieldAlt />
              </div>
              <h3>Safety First</h3>
              <p>
                Safety is non-negotiable at NAMMI. We implement comprehensive safety protocols 
                to protect our workers, clients, and the public during construction.
              </p>
              <ul className="advantage-list">
                <li>Strict safety protocols</li>
                <li>Regular safety training</li>
                <li>Proper safety equipment</li>
                <li>Zero-accident policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Recognized for excellence in construction and commitment to quality
          </p>

          <div className="cert-grid">
            <div className="cert-card">
              <FaCertificate className="cert-icon" />
              <h4>ISO 9001:2015 Certified</h4>
              <p>Quality Management System certification ensuring consistent quality standards</p>
            </div>

            <div className="cert-card">
              <FaCertificate className="cert-icon" />
              <h4>ISO 14001:2015</h4>
              <p>Environmental Management System certification for sustainable practices</p>
            </div>

            <div className="cert-card">
              <FaAward className="cert-icon" />
              <h4>Best Builder Award 2022</h4>
              <p>Recognized as the region's best construction company for quality and innovation</p>
            </div>

            <div className="cert-card">
              <FaAward className="cert-icon" />
              <h4>Excellence in Safety</h4>
              <p>Award for maintaining highest safety standards in construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="numbers-section">
        <div className="container">
          <h2 className="section-title">NAMMI by the Numbers</h2>
          
          <div className="numbers-grid">
            <div className="number-item">
              <FaChartLine className="number-icon" />
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </div>

            <div className="number-item">
              <FaChartLine className="number-icon" />
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="number-item">
              <FaChartLine className="number-icon" />
              <h3>100+</h3>
              <p>Team Members</p>
            </div>

            <div className="number-item">
              <FaChartLine className="number-icon" />
              <h3>98%</h3>
              <p>On-Time Delivery</p>
            </div>

            <div className="number-item">
              <FaChartLine className="number-icon" />
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>

            <div className="number-item">
              <FaChartLine className="number-icon" />
              <h3>25+</h3>
              <p>Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="why-cta">
        <div className="container">
          <h2>Experience the NAMMI Difference</h2>
          <p>Join hundreds of satisfied clients who chose quality, reliability, and excellence</p>
          <Link to="/contact" className="btn btn-primary btn-large">Start Your Project Today</Link>
        </div>
      </section>
    </div>
  );
}

export default WhyNammi;
