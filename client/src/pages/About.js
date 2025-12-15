import React from 'react';
import { FaAward, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">About NAMMI Constructions</h1>
          <p className="page-subtitle">Building trust through quality construction since 2008</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2008, NAMMI Constructions began with a simple vision: to provide exceptional 
              construction services that combine traditional craftsmanship with modern innovation. What 
              started as a small team of dedicated professionals has grown into one of the region's most 
              trusted construction companies.
            </p>
            <p>
              Over the past 15+ years, we've successfully completed over 500 projects, ranging from 
              residential homes to large-scale commercial developments. Our commitment to quality, 
              integrity, and customer satisfaction has earned us a reputation for excellence in the 
              construction industry.
            </p>
            <p>
              Today, NAMMI Constructions stands as a testament to what can be achieved through hard work, 
              dedication, and an unwavering commitment to our clients' dreams. We continue to evolve, 
              embracing new technologies and sustainable practices while maintaining the core values that 
              have defined us from the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>
                To deliver superior construction services that exceed client expectations through 
                innovation, quality craftsmanship, and sustainable practices. We are committed to 
                building lasting relationships based on trust, transparency, and excellence.
              </p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>
                To be the leading construction company known for transforming visions into reality 
                while setting new standards in quality, safety, and environmental responsibility. 
                We aspire to create spaces that inspire and endure for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaCheckCircle />
              </div>
              <h4>Quality Excellence</h4>
              <p>
                We never compromise on quality. Every project is executed with meticulous attention 
                to detail using premium materials and proven construction methods.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h4>Customer Focus</h4>
              <p>
                Our clients are at the heart of everything we do. We listen, understand, and work 
                collaboratively to bring their visions to life.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaAward />
              </div>
              <h4>Integrity</h4>
              <p>
                Honesty and transparency guide all our interactions. We build trust through ethical 
                practices and open communication.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaClock />
              </div>
              <h4>Reliability</h4>
              <p>
                We honor our commitments and deliver on our promises. Timely project completion 
                without compromising quality is our standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Experienced professionals dedicated to bringing your construction dreams to life
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-placeholder">
                <FaUsers size={60} />
              </div>
              <h3>Narasimha Reddy</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">
                With over 20 years of experience in construction, Narasimha leads our vision 
                with passion and expertise.
              </p>
            </div>

            <div className="team-card">
              <div className="team-placeholder">
                <FaUsers size={60} />
              </div>
              <h3>Meena Kumar</h3>
              <p className="team-role">Chief Operations Officer</p>
              <p className="team-bio">
                Meena ensures seamless project execution and maintains our high standards of 
                quality across all operations.
              </p>
            </div>

            <div className="team-card">
              <div className="team-placeholder">
                <FaUsers size={60} />
              </div>
              <h3>Arun Sharma</h3>
              <p className="team-role">Chief Engineer</p>
              <p className="team-bio">
                Arun brings innovative engineering solutions and technical excellence to every 
                project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-icon">
                <FaAward />
              </div>
              <h4>15+ Years</h4>
              <p>Of Excellence in Construction</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <FaCheckCircle />
              </div>
              <h4>500+ Projects</h4>
              <p>Successfully Completed</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <FaUsers />
              </div>
              <h4>100+ Team Members</h4>
              <p>Skilled Professionals</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">
                <FaAward />
              </div>
              <h4>Multiple Awards</h4>
              <p>Industry Recognition</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
