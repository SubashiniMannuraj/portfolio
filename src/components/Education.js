import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'B.E Computer and Communication Engineering',
      field: 'Engineering',
      institution: 'Sri Sairam Institute of Technology, Chennai',
      year: 'Ongoing',
      grade: 'CGPA: 8.51 | PGPA: 8.22 (1st Rank Holder)',
      registrationNo: 'Reg No: 412422118050'
    }
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="education">
      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Education
        </motion.h2>

        <div className="education-timeline">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              className="education-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className="timeline-marker"></div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="field">{edu.field}</p>
                <p className="institution">{edu.institution}</p>
                <div className="education-meta">
                  <span className="year">{edu.year}</span>
                  <span className="grade">{edu.grade}</span>
                  {edu.registrationNo && <span className="reg-no">{edu.registrationNo}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
