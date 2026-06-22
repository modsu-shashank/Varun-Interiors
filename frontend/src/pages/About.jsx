import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="page-container about-page">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-image-wrapper"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Interior Design Studio"
              className="about-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-content"
          >
            <span className="subtitle">Our Story</span>
            <h1>Designing the Extraordinary</h1>
            <p className="lead-text">
              MVR Interiors is an award-winning design studio specializing in luxury residential and commercial spaces.
            </p>
            <p>
              Founded on the principle that your environment profoundly impacts your quality of life, we strive to create spaces that are not only visually stunning but also deeply functional. Our approach is deeply collaborative, ensuring that every project is a true reflection of our client's vision and lifestyle.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
