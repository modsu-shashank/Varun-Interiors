import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-text-wrapper"
          >
            <motion.span variants={fadeUp} className="hero-subtitle">Premium Interior Design</motion.span>
            <motion.h1 variants={fadeUp} className="hero-title">
              Crafting Spaces That <br />
              <span className="text-gradient">Inspire Life</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-desc">
              We blend luxury architecture with functional design to create environments that reflect your unique essence.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <Link to="/projects" className="btn-primary">
                View Portfolio <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section workflow">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="section-header"
          >
            <h2>Our Signature Process</h2>
            <p>From conception to completion, a seamless journey.</p>
          </motion.div>

          <div className="workflow-grid">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision, lifestyle, and spatial requirements.' },
              { step: '02', title: 'Concept Design', desc: 'Developing mood boards, layouts, and initial 3D renderings.' },
              { step: '03', title: 'Material Selection', desc: 'Curating premium materials, textures, and bespoke furniture.' },
              { step: '04', title: 'Execution', desc: 'Flawless construction and styling by our expert craftsmen.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                }}
                className="workflow-card"
              >
                <div className="workflow-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About / CTA */}
      <section className="section cta-section">
        <div className="container cta-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-box"
          >
            <h2>Ready to transform your space?</h2>
            <p>Let's collaborate to build an environment that is distinctly yours.</p>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
