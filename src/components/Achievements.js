import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'MSME Fund Recipient',
      organization: 'Railway Navigation Project',
      description: 'INR 15 Lakhs awarded for development of an indoor railway navigation system'
    },
    {
      id: 2,
      title: 'Patent Published',
      organization: 'Decentralized Carbon Trading Platform',
      description: 'Patent published for a decentralized carbon trading solution'
    },
    {
      id: 3,
      title: 'SVCE GDSC Hackathon Finalist',
      organization: 'Nyaya AI',
      description: 'Finalist in the SVCE GDSC hackathon for Nyaya AI project'
    },
    {
      id: 4,
      title: 'Finalist — Village Project Funding (UBA)',
      organization: 'IIT Madras',
      description: 'Finalist in the UBA Village Project Funding round advocating for rural development'
    },
    {
      id: 5,
      title: 'Champion — Qtuxathon (24-Hour Hackathon)',
      organization: 'Car Parking Application',
      description: 'Champion of a 24-hour internal hackathon with a smart car parking solution'
    },
    {
      id: 6,
      title: '3x Hackathon Winner',
      organization: 'Sairam Innovation Ecosystem',
      description: 'Winner at Ideathon, Solvethon, and Innovathon'
    },
    {
      id: 7,
      title: '6x Symposium Winner',
      organization: 'Technical Events',
      description: 'Multiple wins across technical symposium events'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="achievements" className="achievements">
      <motion.div
        className="achievements-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Achievements & Awards
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="achievement-icon"></div>
              <h3>{achievement.title}</h3>
              <p className="achievement-org">{achievement.organization}</p>
              <p className="achievement-desc">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
