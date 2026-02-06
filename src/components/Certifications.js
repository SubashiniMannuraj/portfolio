import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Full Stack Core Java',
      issuer: 'L&T Edutech, Wipro TalentNext',
      date: 'Completed'
    },
    {
      id: 2,
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: 'Completed'
    },
    {
      id: 3,
      title: 'Software Conceptual Design',
      issuer: 'NPTEL',
      date: 'Completed'
    },
    {
      id: 4,
      title: 'Introduction to IIOT',
      issuer: 'NPTEL',
      date: 'Completed'
    },
    {
      id: 5,
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: 'Completed'
    },
    {
      id: 6,
      title: 'Introduction to Machine Learning',
      issuer: 'NPTEL',
      date: 'Completed'
    },
    {
      id: 7,
      title: 'Introduction to Psychology',
      issuer: 'NPTEL',
      date: 'Completed'
    },
    {
      id: 8,
      title: 'Complete Placement Guide',
      issuer: 'NPTEL',
      date: 'Completed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="certifications" className="certifications">
      <motion.div
        className="certifications-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Certifications
        </motion.h2>

        <div className="certifications-list">
          {certifications.map((cert) => (
            <motion.p key={cert.id} className="cert-para" variants={itemVariants}>
              <strong>{cert.title}</strong> — {cert.issuer}{cert.date ? ` (${cert.date})` : ''}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
