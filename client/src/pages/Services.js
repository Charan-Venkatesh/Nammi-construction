import React from 'react';
import { FaHome, FaBuilding, FaPaintRoller, FaCouch, FaClipboardList, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Construction',
      description: 'Custom home building tailored to your lifestyle and preferences. From concept to completion, we create living spaces that reflect your unique vision.',
      features: [
        'Custom home design and construction',
        'Single and multi-family housing',
        'Luxury villas and apartments',
        'Sustainable and eco-friendly options',
        'Smart home integration'
      ]
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Construction',
      description: 'Professional commercial building services for businesses of all sizes. We deliver functional, efficient spaces that meet your operational needs.',
      features: [
        'Office buildings and complexes',
        'Retail and shopping centers',
        'Warehouses and industrial facilities',
        'Hospitality and restaurant spaces',
        'Healthcare facilities'
      ]
    },
    {
      icon: <FaPaintRoller />,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation services. We breathe new life into old structures while preserving their character.',
      features: [
        'Complete home renovations',
        'Kitchen and bathroom remodeling',
        'Structural modifications',
        'Heritage building restoration',
        'Energy efficiency upgrades'
      ]
    },
    {
      icon: <FaCouch />,
      title: 'Interior Design',
      description: 'Professional interior design services that combine aesthetics with functionality. Create beautiful, livable spaces that inspire.',
      features: [
        'Space planning and layout',
        'Color consultation and selection',
        'Furniture and fixture selection',
        'Lighting design',
        '3D visualization and rendering'
      ]
    },
    {
      icon: <FaClipboardList />,
      title: 'Project Management',
      description: 'Comprehensive project management ensuring your construction project stays on schedule and within budget from start to finish.',
      features: [
        'Detailed project planning',
        'Budget management and cost control',
        'Timeline scheduling',
        'Quality assurance and inspection',
        'Regulatory compliance'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Maintenance Services',
      description: 'Post-construction maintenance and support to keep your property in perfect condition. We stand behind our work long after completion.',
      features: [
        'Regular maintenance programs',
        'Emergency repairs',
        'Warranty support',
        'Property inspections',
        'Preventive maintenance'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive construction solutions delivered with precision and care
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-detail-icon">
                {service.icon}
              </div>
              <div className="service-detail-content">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Construction Process</h2>
          <p className="section-subtitle">A streamlined approach to bring your vision to life</p>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Initial meeting to understand your needs, budget, and timeline</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Planning</h3>
              <p>Detailed blueprints, permits, and project planning</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Construction begins with regular updates and quality checks</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Completion</h3>
              <p>Final inspection, handover, and post-construction support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and detailed quote</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
