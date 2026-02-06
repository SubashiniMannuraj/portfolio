import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'CarbonX',
      description: 'An innovative sustainability platform designed to track and reduce carbon footprints. Features real-time carbon emission tracking, personalized recommendations, and impact metrics to drive environmental consciousness.',
      technologies: ['React JS', 'Node JS', 'MongoDB', 'CSS'],
      link: 'https://github.com/SubashiniMannuraj/CarbonX_website.git'
    },
    {
      id: 2,
      title: 'Indoor Railway Navigation System',
      description: 'MSME-funded railway navigation solution providing intelligent wayfinding for passengers. Integrates real-time location tracking and intuitive navigation within railway stations for enhanced commuter experience.',
      technologies: ['React', 'Navigation APIs', 'Real-time Data'],
      link: 'https://github.com/thejvanth08/railway-nav'
    },
    {
      id: 3,
      title: 'Backend Mini Project',
      description: 'A comprehensive backend solution demonstrating RESTful API design, database management, and server-side optimization. Includes user authentication, data validation, and middleware integration.',
      technologies: ['Node.js', 'Express JS', 'MongoDB', 'JWT'],
      link: 'https://github.com/SubashiniMannuraj/backend-demo.git'
    },
    {
      id: 4,
      title: 'Nyaya AI',
      description: 'An AI-powered legal assistance platform leveraging machine learning to provide intelligent legal insights and document analysis. Developed during hackathon with focus on accessibility and ease of use.',
      technologies: ['React', 'AI/ML', 'Node.js', 'APIs'],
      link: 'https://github.com/SubashiniMannuraj/hackathongdsc.git'
    },
    {
      id: 5,
      title: 'Personal Portfolio (ReactJS)',
      description: 'A personal portfolio website built with React.js showcasing projects, skills, and contact information. Responsive design and smooth interactions.',
      technologies: ['React JS', 'CSS', 'Framer Motion'],
      link: '#'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
