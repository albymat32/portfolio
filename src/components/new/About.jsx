import React from 'react';
import { motion } from 'framer-motion';
import alby from '../assets/alby.jpg'; // adjust path

const About = () => (
  <section id="about" className="section about-section">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="about-content"
    >
      <img src={alby} alt="Alby Thekkedan" className="profile-image" />
      <div className="about-text">
        <h2>Hello, I'm <span>Alby Thekkedan</span></h2>
        <p>AI/ML Engineer @ Rappit, Computer Science Graduate from Model Engineering College, Kochi 🇮🇳</p>
        <div className="social-links">
          {/* Add icons using react-icons */}
          <a href="https://linkedin.com/in/alby-thekkedan-3b2871210" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/albymat32" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
