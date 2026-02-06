import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm an aspiring Engineer driven by the vision of building <strong>sustainable, user-centric products</strong> that make a positive impact on society. As a relentless pursuer of knowledge, I believe in learning something new every day.
            </p>
            
            <h3 className="about-subheading">Notable Achievements</h3>
            <ul className="achievements-list">
              <li>Received <strong>₹15 Lakhs in MSME funding</strong> for a Railway Navigation System aimed at societal betterment</li>
              <li><strong>Champion of a 24-hour internal hackathon</strong> and <strong>3x hackathon winner</strong> under the Sairam Innovation Ecosystem</li>
              <li><strong>6x symposium winner</strong> with consistent recognition in technical competitions</li>
              <li><strong>Finalist in the UBA Village Project Funding round at IIT Madras</strong>, advocating for rural development solutions</li>
              <li>Achieved <strong>17,400+ impressions</strong> on a single LinkedIn post, demonstrating strength in storytelling and audience connection</li>
              <li><strong>Mentored over 150 students</strong> through tech talks, fostering passion in aspiring tech enthusiasts</li>
            </ul>

            <h3 className="about-subheading">Leadership & Community Service</h3>
            <ul className="achievements-list">
              <li><strong>Office Bearer</strong> - SSIT IEEE Student Branch</li>
              <li><strong>Secretary</strong> - IEEE Women in Engineering (WIE)</li>
              <li><strong>Magic Member</strong> - NSP and IEEE ITSS</li>
              <li><strong>Volunteer</strong> - UBA (Unnat Bharat Abhiyan), NSS (National Service Scheme), BIS (Bureau of Indian Standards)</li>
            </ul>
            <p>
              Through these roles, I actively bridge the gap between technology and society, organizing impactful initiatives and contributing to community development.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat">
              <h3>₹15L</h3>
              <p>MSME Funding Received</p>
            </div>
            <div className="stat">
              <h3>150+</h3>
              <p>Students Mentored</p>
            </div>
            <div className="stat">
              <h3>9x</h3>
              <p>Awards & Recognition</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
