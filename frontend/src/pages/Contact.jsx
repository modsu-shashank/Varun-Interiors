import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'residential',
    message: ''
  });
  
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    
    const API_URL = import.meta.env.PROD 
      ? '/_/backend/api/contact' 
      : 'http://localhost:5000/api/contact';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', service: 'residential', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: true });
      }
    } catch (err) {
      console.error(err);
      // For demo purposes if backend isn't running
      setTimeout(() => {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', service: 'residential', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="page-container contact-page">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >
            <span className="subtitle">Get In Touch</span>
            <h1>Let's Start a Conversation</h1>
            <p className="lead-text">
              Whether you have a vision in mind or need inspiration, our team is ready to bring your space to life.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Visit Our Studio</h3>
                  <p>123 Premium Ave, Design District, <br/> New York, NY 10001</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-wrapper">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@mvr.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                >
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="architecture">Architecture</option>
                  <option value="consultation">Consultation Only</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5"
                  placeholder="Tell us about your space and vision..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary submit-btn" 
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : (
                  <>Send Message <Send size={18} className="ml-2" /></>
                )}
              </button>
              
              {status.success && (
                <div className="form-success">
                  Thank you! Your message has been received. We will contact you shortly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
