import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Calendar, MapPin, User, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'The Vertex Penthouse',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      client: 'Private Owner',
      location: 'Manhattan, NY',
      year: '2025',
      overview: 'A full-floor duplex penthouse showcasing double-height ceilings, bespoke minimalist millwork, and expansive glass curtain walls overlooking Central Park. Designed for entertaining and gallery-level art collection displaying.',
      history: 'Originally a raw commercial loft space, the penthouse required a complete structural re-engineering. Over an 18-month execution period, our design team curated a harmonious balance of cold travertine surfaces with warm French white oak panels. We integrated smart-home automation seamlessly into the shadowline reveals, creating a clutter-free luxury sanctuary.'
    },
    {
      id: 2,
      title: 'Aura Studio',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      client: 'Aura Creative Labs',
      location: 'Brooklyn, NY',
      year: '2024',
      overview: 'An open-concept creative headquarters that balances industrial raw aesthetics with functional modern workspaces, promoting collaborative innovation and focused research.',
      history: 'Situated in a repurposed 1920s brick warehouse, the challenge was to preserve historical elements (like exposed timber beams and distressed masonry) while optimizing acoustic comfort and natural light distribution. We custom-fabricated acoustic felt baffles and designed modular partitions that allow the studio to shift dynamically from co-working zones to private presentation pods.'
    },
    {
      id: 3,
      title: 'Minimalist Haven',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      client: 'The Kapoor Family',
      location: 'Mumbai, MH',
      year: '2025',
      overview: 'A suburban sanctuary focusing on clean sightlines, natural textures, and a seamless connection between indoor luxury and outdoor landscape design.',
      history: 'This project was designed for a multi-generational family seeking escape from urban noise. The layout was structured around a central open-air courtyard that promotes passive ventilation. We selected tactile plaster finishes, hand-knotted natural rugs, and low-profile teak furniture to build a deep, calming sense of home.'
    },
    {
      id: 4,
      title: 'Luxe Boutique Hotel',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      client: 'Marigold Stays',
      location: 'Goa, GA',
      year: '2023',
      overview: 'A 20-suite micro-resort that blends heritage Portuguese architecture with contemporary upscale luxury and bespoke coastal design details.',
      history: 'The building structure was a heritage villa that required delicate restoration and strict preservation guidelines. We reimagined the main lobby as a high-ceiling atrium filled with native flora and custom terrazzo flooring. Each guest suite features bespoke cane weaving, customized brass light fixtures, and private plunge pools facing the sea.'
    }
  ];

  return (
    <div className="page-container projects-page">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-header"
        >
          <h1>Selected Works</h1>
          <p>Explore the design language, history, and specifications behind our premium architecture and interior creations.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="project-view-details">
                    View Details <ChevronRight size={18} />
                  </span>
                </div>
              </div>
              <div className="project-info">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className="modal-grid">
                <div className="modal-image-panel">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  <div className="modal-meta-box">
                    <div className="meta-item">
                      <User size={18} />
                      <div>
                        <h4>Client</h4>
                        <p>{selectedProject.client}</p>
                      </div>
                    </div>
                    <div className="meta-item">
                      <MapPin size={18} />
                      <div>
                        <h4>Location</h4>
                        <p>{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="meta-item">
                      <Calendar size={18} />
                      <div>
                        <h4>Year</h4>
                        <p>{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-info-panel">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  
                  <div className="info-section">
                    <h3>Project Overview</h3>
                    <p>{selectedProject.overview}</p>
                  </div>

                  <div className="info-section">
                    <h3>History & Design Process</h3>
                    <p>{selectedProject.history}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
