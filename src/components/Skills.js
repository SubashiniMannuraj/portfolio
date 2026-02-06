import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { 
      category: 'Programming & Tools', 
      items: ['Java', 'SQL', 'Github', 'Figma', 'Notion', 'VS Code', 'Jupyter Lab'] 
    },
    { 
      category: 'Core Subjects', 
      items: ['Computer Networks', 'Operating Systems', 'OOPS', 'DBMS', 'SDLC'] 
    },
    { 
      category: 'Technical Skills (MERN Stack)', 
      items: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] 
    },
    { 
      category: 'Soft Skills & Interests', 
      items: ['Communication', 'Adaptability', 'Team Collaboration', 'Leadership', 'AI', 'Innovation'] 
    },
    {
      category: 'Others',
      items: ['UI Design', 'Content Writing', 'Manual Testing', 'Product Research', 'Product Management', 'ML Algorithms']
    },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div key={index} className="skill-category" variants={itemVariants}>
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
